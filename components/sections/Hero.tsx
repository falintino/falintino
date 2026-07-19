"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaSpotify,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";
import NowPlayingCard from "../ui/NowPlayingCard";

import { artist } from "@/data/artist";

const letters = artist.name.toUpperCase().split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#1DB954] blur-[180px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      <Container>
        <div className="relative grid min-h-[92vh] items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-5 py-2 text-xs font-bold tracking-[4px] text-[#1DB954]"
            >
              OFFICIAL WEBSITE
            </motion.div>

            <h1 className="mt-8 flex flex-wrap text-6xl font-black leading-none lg:text-[96px]">

              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="mr-1"
                >
                  {letter}
                </motion.span>
              ))}

            </h1>

            <p className="mt-5 text-xl text-zinc-300">
              Creator • Music Artist
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              {artist.description}
            </p>

            {/* Latest Release */}

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
                className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-red-500"
              >
                <FaYoutube className="mr-3" />
                Watch on YouTube
              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8">

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

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative flex justify-center"
          >

            <div className="absolute h-[520px] w-[520px] rounded-full bg-[#1DB954]/20 blur-[120px]" />

            <Image
              src={artist.heroImage}
              alt={artist.name}
              width={560}
              height={760}
              priority
              className="relative rounded-[40px] border border-white/10 shadow-[0_0_120px_rgba(29,185,84,.25)]"
            />

          </motion.div>

        </div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="pb-8 text-center text-zinc-500"
        >
          <a
            href="#music"
            className="inline-flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[4px]">
              SCROLL
            </span>

            <FaChevronDown className="text-[#1DB954]" />
          </a>
        </motion.div>

      </Container>
    </section>
  );
}