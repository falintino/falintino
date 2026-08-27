import Image from "next/image";
import {
  FaSpotify,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";
import NowPlayingCard from "../ui/NowPlayingCard";

import { artist } from "@/data/artist";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black pt-28 text-white"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1DB954]/20 blur-[140px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Container>
          <div className="grid min-h-[92vh] items-center gap-16 py-10 lg:grid-cols-2 lg:gap-20">

            {/* LEFT */}
            <div>
              <div className="inline-flex rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-5 py-2 text-xs font-bold tracking-[4px] text-[#1DB954]">
                OFFICIAL WEBSITE
              </div>

              <h1 className="mt-8 text-6xl font-black leading-none sm:text-7xl lg:text-[96px]">
                {artist.name.toUpperCase()}
              </h1>

              <p className="mt-5 text-xl text-zinc-300">
                Creator • Music Artist
              </p>

              <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                {artist.description}
              </p>

              {/* LATEST RELEASE */}
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[3px] text-[#1DB954]">
                  Latest Release
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Di Balik Layar
                </h2>

                <p className="mt-2 text-zinc-400">
                  Released • July 7, 2026
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-5">
                <Button href={artist.spotify}>
                  <FaSpotify className="mr-3" />
                  Listen on Spotify
                </Button>

                <a
                  href={artist.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-red-500"
                >
                  <FaYoutube className="mr-3" />
                  Watch on YouTube
                </a>
              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#1DB954]">
                    47M+
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    TikTok Views
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#1DB954]">
                    120K+
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    YouTube Subs
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#1DB954]">
                    2026
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Artist Debut
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <NowPlayingCard />
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#1DB954]/20 blur-[100px]"
              />

              <Image
                src={artist.heroImage}
                alt="Falintino, Indonesian content creator and music artist"
                width={560}
                height={760}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 560px"
                className="relative z-10 h-auto w-full max-w-[560px] rounded-[40px] border border-white/10 object-cover shadow-[0_0_80px_rgba(29,185,84,.20)]"
              />
            </div>
          </div>

          {/* SCROLL */}
          <div className="pb-8 text-center text-zinc-500">
            <a
              href="#music"
              className="inline-flex flex-col items-center gap-3 transition hover:text-white"
            >
              <span className="text-xs tracking-[4px]">
                SCROLL
              </span>

              <FaChevronDown className="text-[#1DB954]" />
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}