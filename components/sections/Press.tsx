"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { press } from "@/data/press";

export default function Press() {
  return (
    <section
      id="press"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <SectionTitle
          subtitle="FEATURED IN"
          title="Media Coverage"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-400"
        >
          Falintino has been featured across multiple national media
          platforms covering music releases, creator journey, and
          digital entertainment.
        </motion.p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {press.map((item, index) => (

            <motion.a
              key={`${item.media}-${index}`}
              href={item.url || "#"}
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
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#1DB954] hover:bg-white/[0.05]"
            >

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-4 py-2 text-xs font-bold tracking-[3px] text-[#1DB954]">
                  {item.media}
                </span>

                <span className="text-sm text-zinc-500">
                  {item.date}
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-black leading-snug transition group-hover:text-[#1DB954]">
                {item.title}
              </h3>

              <div className="mt-10 flex items-center gap-3 font-semibold text-[#1DB954] transition group-hover:translate-x-2">
                Read Article
                <FaArrowRight />
              </div>

            </motion.a>

          ))}

        </div>

      </Container>
    </section>
  );
}