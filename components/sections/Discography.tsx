"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { music } from "@/data/music";

export default function Discography() {
  return (
    <section
      id="discography"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <SectionTitle
          subtitle="DISCOGRAPHY"
          title="Music Collection"
        />

        <div className="mt-16 space-y-6">

          {music.map((song, index) => (

            <motion.a
              key={song.id}
              href={song.spotify}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="group flex flex-col items-center gap-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-[#1DB954] md:flex-row"
            >

              <Image
                src={song.cover}
                alt={song.title}
                width={120}
                height={120}
                className="rounded-2xl"
              />

              <div className="flex-1">

                <p className="text-sm text-[#1DB954]">
                  {song.releaseDate}
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {song.title}
                </h3>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1DB954] text-2xl text-black transition group-hover:scale-110">
                <FaSpotify />
              </div>

            </motion.a>

          ))}

        </div>

      </Container>
    </section>
  );
}