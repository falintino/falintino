import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/admin-login", "/api/"] },
    ],
    sitemap: "https://bio.falintino.com/sitemap.xml",
    host: "https://bio.falintino.com",
  };
}
