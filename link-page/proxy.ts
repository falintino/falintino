import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) return NextResponse.next();

  const password = process.env.BIO_ADMIN_PASSWORD;
  if (!password) {
    return new NextResponse("Admin belum dikonfigurasi. Atur BIO_ADMIN_PASSWORD di Environment Variables Vercel.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  const token = request.cookies.get("falintino_bio_admin")?.value || "";
  const [value, signature] = token.split(".");
  const expected = createHmac("sha256", password).update("falintino-bio-admin").digest("hex");
  const supplied = Buffer.from(signature || "");
  const correct = Buffer.from(expected);
  if (value === "falintino-bio-admin" && supplied.length === correct.length && timingSafeEqual(supplied, correct)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/admin-login", request.url));
}

export const config = { matcher: ["/admin/:path*"] };
