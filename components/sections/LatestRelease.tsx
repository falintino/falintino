"use client";

import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import MusicPlayer from "../ui/MusicPlayer";
import VinylPlayer from "../ui/VinylPlayer";

import { music } from "@/data/music";

export default function LatestRelease() {
  const latest = music.find((song) => song.featured) ?? music[0];

  return (
    <section
      id="music"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <SectionTitle
          subtitle="LATEST RELEASE"
          title={latest.title}
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <VinylPlayer
              cover={latest.cover}
              title={latest.title}
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <p className="text-sm tracking-[5px] text-[#1DB954]">
              FEATURED SINGLE
            </p>

            <h2 className="mt-4 text-5xl font-black">
              {latest.title}
            </h2>

            <p className="mt-8 leading-8 text-zinc-400">
              Dengarkan rilisan terbaru Falintino langsung melalui Spotify tanpa meninggalkan website.
            </p>

            <div className="mt-10">
              <MusicPlayer />
            </div>

            <a
              href={latest.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1DB954] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              <FaSpotify />
              Open in Spotify
            </a>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}