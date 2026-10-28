import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bio.falintino.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Falintino — Bio, Semua Link Resmi",
    template: "%s | Falintino",
  },
  description: "Temukan semua link resmi Falintino: website, musik, TikTok, Instagram, dan Top Up Free Fire dalam satu halaman.",
  applicationName: "Falintino",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Falintino",
    locale: "id_ID",
    title: "Falintino — Bio, Semua Link Resmi",
    description: "Semua link resmi Falintino dalam satu halaman: website, musik, media sosial, dan store.",
  },
  twitter: {
    card: "summary",
    title: "Falintino — Semua Link Resmi",
    description: "Temukan website, musik, media sosial, dan store resmi Falintino.",
  },
  category: "personal",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Falintino — Semua Link Resmi",
  url: siteUrl,
  description: "Halaman resmi yang mengumpulkan link website, musik, media sosial, dan store Falintino.",
  mainEntity: {
    "@type": "Person",
    name: "Falintino",
    url: "https://falintino.com",
    sameAs: [
      "https://www.tiktok.com/@falintino_",
      "https://www.instagram.com/falintino07/",
      "https://store.falintino.com"
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    {children}
  </body></html>;
}
