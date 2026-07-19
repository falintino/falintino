import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import CursorGlow from "@/components/effects/CursorGlow";
import LoadingScreen from "@/components/effects/LoadingScreen";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: {
    default: "Falintino",
    template: "%s | Falintino",
  },

  description: "Official Website of Falintino",

  metadataBase: new URL("https://falintino.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${montserrat.variable} bg-black text-white antialiased`}
      >
        <LoadingScreen />

        <CursorGlow />

        {children}
      </body>
    </html>
  );
}