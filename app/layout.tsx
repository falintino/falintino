import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import LoadingScreen from "@/components/effects/LoadingScreen";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.falintino.com";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Falintino | Official Website",
    template: "%s | Falintino",
  },

  description:
    "Official website of Falintino, an Indonesian content creator and music artist. Discover official music, videos, TikTok @aprilfullskin, YouTube 7 April FF, Instagram, Spotify, and more.",

  keywords: [
    "Falintino",
    "Falintino Official",
    "Falintino Content Creator",
    "Falintino Music",
    "Falintino Spotify",
    "Falintino TikTok",
    "aprilfullskin",
    "@aprilfullskin",
    "7 April FF",
    "Falintino YouTube",
    "Falintino Instagram",
    "Content Creator Indonesia",
    "Music Artist Indonesia",
    "Free Fire Creator",
    "TikTok",
    "YouTube",
    "Spotify",
  ],

  authors: [
    {
      name: "Falintino",
      url: SITE_URL,
    },
  ],

  creator: "Falintino",
  publisher: "Falintino",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Falintino",

    title: "Falintino | Official Website",

    description:
      "Official website of Falintino, Indonesian content creator and music artist known through TikTok @aprilfullskin and YouTube 7 April FF.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falintino Official Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Falintino | Official Website",

    description:
      "Official website of Falintino, Indonesian content creator and music artist.",

    images: ["/og-image.jpg"],
  },

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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  other: {
    "facebook-domain-verification":
      "xrisuxgu1ibp34vox4f3q1vvatx104",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LoadingScreen />

        <AnimatedBackground />

        <CursorGlow />

        <StructuredData />

        {children}

        <GoogleAnalytics gaId="G-CY3QT7LVSC" />
      </body>
    </html>
  );
}