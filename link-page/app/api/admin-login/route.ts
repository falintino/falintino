import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const password = process.env.BIO_ADMIN_PASSWORD;
  if (!password) return NextResponse.json({ error: "Admin belum dikonfigurasi." }, { status: 503 });

  let submitted = "";
  try {
    const body = await request.json();
    submitted = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }

  const actual = Buffer.from(submitted);
  const expected = Buffer.from(password);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return NextResponse.json({ error: "Password salah." }, { status: 401 });
  }

  const tokenValue = "falintino-bio-admin";
  const signature = createHmac("sha256", password).update(tokenValue).digest("hex");
  const response = NextResponse.json({ ok: true });
  response.cookies.set("falintino_bio_admin", tokenValue + "." + signature, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
