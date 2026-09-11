import Image from "next/image";
import { FaSpotify, FaYoutube, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Container from "../ui/Container";
import NowPlayingCard from "../ui/NowPlayingCard";
import { artist } from "@/data/artist";

const stats = [
  { value: "47M+", label: "Tayangan TikTok" },
  { value: "120K+", label: "Subscriber YouTube" },
  { value: "2026", label: "Debut Musik" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050807] pt-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#1DB954]/15 blur-[150px]" />
        <div className="absolute right-[-10%] top-[10%] h-[620px] w-[620px] rounded-full bg-emerald-400/[0.08] blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100vh-6rem)] items-center gap-14 py-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1DB954]/25 bg-[#1DB954]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#53dc83]">
              <FaCheckCircle /> Profil Resmi
            </div>

            <h1 className="mt-7 text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(5.5rem,8vw,8rem)]">
              FALIN<span className="text-[#1DB954]">TINO</span>
            </h1>

            <p className="mt-6 text-xl font-semibold text-zinc-200 sm:text-2xl">Kreator Konten & Artis Musik Indonesia</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{artist.description}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={artist.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1DB954] px-7 py-4 font-extrabold text-black hover:-translate-y-1 hover:bg-[#2bd567]">
                <FaSpotify className="text-xl" /> Dengarkan Musik
              </a>
              <a href={artist.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-bold hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]">
                <FaYoutube className="text-xl text-red-500" /> Kanal YouTube
              </a>
              <a href="#press" className="inline-flex items-center justify-center gap-2 px-5 py-4 font-bold text-zinc-300 hover:text-white">Liputan Media <FaArrowRight /></a>
            </div>

            <div className="mt-12 grid grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`px-4 py-5 sm:px-6 ${index > 0 ? "border-l border-white/10" : ""}`}>
                  <p className="text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8"><NowPlayingCard /></div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-[#1DB954]/20 via-transparent to-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/50">
              <Image src={artist.heroImage} alt="Falintino, kreator konten dan artis musik Indonesia" width={560} height={760} priority fetchPriority="high" sizes="(max-width: 1024px) 90vw, 540px" className="aspect-[4/5] w-full rounded-[30px] object-cover" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#53dc83]">Rilisan Terbaru</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div><h2 className="text-xl font-black">Di Balik Layar</h2><p className="mt-1 text-sm text-zinc-400">Tersedia di Spotify</p></div>
                  <a href={artist.spotify} target="_blank" rel="noopener noreferrer" aria-label="Dengarkan Di Balik Layar di Spotify" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1DB954] text-black"><FaArrowRight /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}