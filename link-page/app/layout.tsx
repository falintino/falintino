import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falintino — Semua Link Resmi",
  description: "Temukan semua link resmi Falintino dalam satu tempat.",
  metadataBase: new URL("https://bio.falintino.com"),
  openGraph: { title: "Falintino — Semua Link Resmi", description: "Semua link Falintino dalam satu halaman.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}