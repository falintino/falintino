import { createHmac, timingSafeEqual, randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAdmin(request: NextRequest) {
  const password = process.env.BIO_ADMIN_PASSWORD;
  if (!password) return false;
  const token = request.cookies.get("falintino_bio_admin")?.value || "";
  const [value, signature] = token.split(".");
  const expected = createHmac("sha256", password).update("falintino-bio-admin").digest("hex");
  const supplied = Buffer.from(signature || "");
  const correct = Buffer.from(expected);
  return value === "falintino-bio-admin" && supplied.length === correct.length && timingSafeEqual(supplied, correct);
}

function config() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/$/, ""), key };
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Login admin diperlukan untuk mengunggah file." }, { status: 401 });
  }

  const cfg = config();
  if (!cfg) {
    return NextResponse.json({ error: "Supabase belum dikonfigurasi di Vercel." }, { status: 503 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    const kind = form.get("kind");
    const mediaType = form.get("mediaType");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Pilih file terlebih dahulu." }, { status: 400 });
    }
    if (kind !== "avatar" && kind !== "background") {
      return NextResponse.json({ error: "Jenis upload tidak valid." }, { status: 400 });
    }

    const allowedImageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    const isVideo = kind === "background" && mediaType === "video";
    const allowed = isVideo ? ["video/mp4"] : allowedImageTypes;
    const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: isVideo ? "Video harus berformat MP4." : "File harus berupa JPG, PNG, WEBP, atau GIF." }, { status: 400 });
    }
    if (file.size > maxSize) {
      return NextResponse.json({ error: isVideo ? "Ukuran video maksimal 50 MB." : "Ukuran gambar maksimal 10 MB." }, { status: 413 });
    }

    const extensionByType: Record<string, string> = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
      "video/mp4": "mp4",
    };
    const extension = extensionByType[file.type];
    const folder = kind === "avatar" ? "avatars" : "backgrounds";
    const objectPath = `${folder}/${randomUUID()}.${extension}`;
    const bytes = await file.arrayBuffer();

    const response = await fetch(`${cfg.url}/storage/v1/object/bio-assets/${objectPath}`, {
      method: "POST",
      headers: {
        apikey: cfg.key,
        Authorization: `Bearer ${cfg.key}`,
        "Content-Type": file.type,
        "x-upsert": "false",
      },
      body: bytes,
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json({
        error: "Upload ke Supabase Storage gagal.",
        detail,
        hint: "Pastikan bucket bio-assets sudah dibuat dan secret key Supabase benar.",
      }, { status: 502 });
    }

    const url = `${cfg.url}/storage/v1/object/public/bio-assets/${objectPath}`;
    return NextResponse.json({ ok: true, url, path: objectPath }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Upload gagal diproses.",
    }, { status: 400 });
  }
}
