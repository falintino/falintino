import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import LoadingScreen from "@/components/effects/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://falintino.com"),

  title: {
    default: "Falintino | Official Artist",
    template: "%s | Falintino",
  },

  description:
    "Official website of Falintino. Explore music releases, videos, gallery, and official social media.",

  keywords: [
    "Falintino",
    "Falintino Official",
    "Indonesian Artist",
    "Musician",
    "Spotify",
    "TikTok",
    "YouTube",
    "Music",
  ],

  authors: [
    {
      name: "Falintino",
    },
  ],

  creator: "Falintino",

  publisher: "Falintino",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://falintino.com",
    title: "Falintino | Official Artist",
    description:
      "Listen to the latest music, watch videos, and explore the official website of Falintino.",

    siteName: "Falintino",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falintino",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Falintino | Official Artist",
    description:
      "Official website of Falintino.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        <LoadingScreen />

        <AnimatedBackground />

        <CursorGlow />

        {children}
      </body>
    </html>
  );
}