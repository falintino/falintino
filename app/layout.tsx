import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Falintino | Official Artist",
    template: "%s | Falintino",
  },

  description:
    "Official website of Falintino. Listen to the latest music, watch official videos, explore the gallery, and connect through official social media.",

  keywords: [
    "Falintino",
    "Falintino Official",
    "Falintino Music",
    "Falintino Spotify",
    "Falintino YouTube",
    "Musician Indonesia",
    "Music Artist",
    "Spotify",
    "TikTok",
    "YouTube",
  ],

  authors: [
    {
      name: "Falintino",
      url: SITE_URL,
    },
  ],

  creator: "Falintino",

  publisher: "Falintino",

  category: "music",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Falintino",

    title: "Falintino | Official Artist",

    description:
      "Listen to the latest music, watch official videos, explore the gallery, and stay connected with Falintino.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falintino Official",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Falintino | Official Artist",

    description: "Official website of Falintino.",

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
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#000000",
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
      </body>

      <GoogleAnalytics gaId="G-CY3QT7LVSC" />
    </html>
  );
}