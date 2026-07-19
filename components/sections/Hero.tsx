"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-28 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.14, 0.2, 0.14],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1DB954] blur-[140px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      </div>

      <Container>

        <div className="relative grid min-h-[92vh] items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="inline-flex rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-5 py-2 text-xs font-bold tracking-[4px] text-[#1DB954]"
            >
              OFFICIAL WEBSITE
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mt-8 text-6xl font-black leading-none lg:text-[96px]"
            >
              {artist.name.toUpperCase()}
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="mt-5 text-xl text-zinc-300"
            >
              Creator • Music Artist
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="mt-8 max-w-xl text-lg leading-9 text-zinc-400"
            >
              {artist.description}
            </motion.p>

            {/* Latest Release */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <p className="text-xs uppercase tracking-[3px] text-[#1DB954]">
                Latest Release
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Di Balik Layar
              </h2>

              <p className="mt-2 text-zinc-400">
                Released • July 7, 2026
              </p>

            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
              className="mt-10 flex flex-wrap gap-5"
            >

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

            </motion.div>

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
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex justify-center"
          >

            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#1DB954]/20 blur-[100px]" />

            <Image
              src={artist.heroImage}
              alt={artist.name}
              width={560}
              height={760}
              priority
              sizes="(max-width:768px) 100vw, 560px"
              className="relative rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(29,185,84,.20)]"
            />

          </motion.div>

        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
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