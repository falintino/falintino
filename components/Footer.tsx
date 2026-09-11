import Link from "next/link";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";
import { artist } from "@/data/artist";

const socialLinks = [
  { name: "Spotify", href: artist.spotify, icon: FaSpotify },
  { name: "YouTube", href: artist.youtube, icon: FaYoutube },
  { name: "TikTok", href: artist.tiktok, icon: FaTiktok },
  { name: "Instagram", href: artist.instagram, icon: FaInstagram },
];

const nav = [
  ["Beranda", "/#home"], ["Musik", "/#music"], ["Tentang", "/#about"],
  ["Video", "/#videos"], ["Galeri", "/#gallery"], ["Media", "/#press"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#030504]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,185,84,.08),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.9fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-3" aria-label="Falintino — beranda">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#1DB954]/30 bg-[#1DB954]/10 text-2xl font-black text-[#1DB954]">F</span>
              <span className="text-2xl font-black tracking-tight">FALINTINO</span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">Situs resmi Falintino, kreator konten dan artis musik Indonesia. Temukan karya, kanal resmi, liputan media, dan informasi kerja sama.</p>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Falintino di ${name}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-1 hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"><Icon /></a>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-zinc-500">Jelajahi</h3>
            <nav className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4" aria-label="Navigasi footer">
              {nav.map(([label, href]) => <Link key={href} href={href} className="font-semibold text-zinc-300 hover:text-[#53dc83]">{label}</Link>)}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-zinc-500">Kontak Resmi</h3>
            <a href={`mailto:${artist.email}`} className="mt-6 flex items-center gap-3 break-all text-lg font-bold text-white hover:text-[#53dc83]"><FaEnvelope className="shrink-0 text-[#1DB954]" />{artist.email}</a>
            <p className="mt-4 text-sm leading-7 text-zinc-500">Untuk kerja sama, kampanye, publikasi media, dan pertanyaan bisnis.</p>
            <Link href="/socials" className="mt-5 inline-flex text-sm font-bold text-[#53dc83] hover:text-white">Lihat semua akun resmi →</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Falintino. Hak cipta dilindungi.</p>
          <p>Situs resmi · falintino.com</p>
        </div>
      </div>
    </footer>
  );
}