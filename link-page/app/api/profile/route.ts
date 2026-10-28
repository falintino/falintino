import { createHmac, timingSafeEqual } from "node:crypto";
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
  return { url: url.replace(/\\/$/, ""), key };
}

async function supabaseRequest(path: string, init?: RequestInit) {
  const cfg = config();
  if (!cfg) throw new Error("Supabase belum dikonfigurasi. Tambahkan SUPABASE_URL dan SUPABASE_SECRET_KEY di Vercel.");
  return fetch(`${cfg.url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: cfg.key,
      Authorization: `Bearer ${cfg.key}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
}

function toProfile(row: any) {
  return {
    name: row.name,
    bio: row.bio,
    avatar: row.avatar_url || "",
    background: row.background_url || "",
    backgroundType: row.background_type === "video" ? "video" : "image",
    links: Array.isArray(row.links) ? row.links : [],
  };
}

export async function GET() {
  try {
    const response = await supabaseRequest("bio_profile?select=slug,name,bio,avatar_url,background_url,background_type,links&slug=eq.falintino&limit=1");
    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json({ error: "Gagal membaca profil dari Supabase.", detail }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Profil Falintino belum ditemukan di database." }, { status: 404 });
    return NextResponse.json(toProfile(rows[0]), { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Konfigurasi Supabase bermasalah." }, { status: 503 });
  }
}

export async function PUT(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: "Akses admin diperlukan." }, { status: 401 });
  try {
    const body = await request.json();
    if (typeof body.name !== "string" || typeof body.bio !== "string" || !Array.isArray(body.links)) {
      return NextResponse.json({ error: "Data profil tidak valid." }, { status: 400 });
    }
    const payload = {
      name: body.name.slice(0, 100),
      bio: body.bio.slice(0, 1000),
      avatar_url: typeof body.avatar === "string" ? body.avatar.slice(0, 2000) : "",
      background_url: typeof body.background === "string" ? body.background.slice(0, 4000) : "",
      background_type: body.backgroundType === "video" ? "video" : "image",
      links: body.links.slice(0, 100),
      updated_at: new Date().toISOString(),
    };
    const response = await supabaseRequest("bio_profile?slug=eq.falintino", {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json({ error: "Gagal menyimpan profil ke Supabase.", detail }, { status: 502 });
    }
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Baris profil Falintino tidak ditemukan." }, { status: 404 });
    return NextResponse.json({ ok: true, profile: toProfile(rows[0]) }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Permintaan tidak valid." }, { status: 400 });
  }
}
