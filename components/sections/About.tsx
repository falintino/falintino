"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { artist } from "@/data/artist";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <SectionTitle
          subtitle="ABOUT"
          title={`About ${artist.name}`}
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

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
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#1DB954]/20 blur-[90px]" />

              <Image
                src={artist.heroImage}
                alt={artist.name}
                width={520}
                height={680}
                className="relative rounded-[36px] border border-white/10 shadow-[0_0_80px_rgba(29,185,84,.2)]"
              />

            </div>

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

            <h2 className="text-5xl font-black">
              {artist.name}
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              {artist.description}
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

                <p className="text-sm text-zinc-500">
                  Profession
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Artist & Creator
                </h3>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

                <p className="text-sm text-zinc-500">
                  Focus
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Music & Digital Content
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}