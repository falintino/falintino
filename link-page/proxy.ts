import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) return NextResponse.next();

  const username = process.env.BIO_ADMIN_USERNAME;
  const password = process.env.BIO_ADMIN_PASSWORD;
  if (!username || !password) {
    return new NextResponse("Admin belum dikonfigurasi. Atur BIO_ADMIN_USERNAME dan BIO_ADMIN_PASSWORD di environment variables Vercel.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const separator = decoded.indexOf(":");
      const suppliedUser = decoded.slice(0, separator);
      const suppliedPassword = decoded.slice(separator + 1);
      if (separator >= 0 && suppliedUser === username && suppliedPassword === password) {
        return NextResponse.next();
      }
    } catch {
      // Invalid Basic Auth header; request login again.
    }
  }

  return new NextResponse("Login admin diperlukan.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Falintino Bio Admin", charset="UTF-8"',
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export const config = { matcher: ["/admin/:path*"] };
