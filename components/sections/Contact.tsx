"use client";

import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { artist } from "@/data/artist";
import { socials } from "@/data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1DB954]/10 blur-[180px]" />

      <Container>
        <SectionTitle
          subtitle="CONTACT"
          title="Let's Connect"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black leading-tight">
              Ready For
              <br />
              Collaboration.
            </h2>

            <p className="mt-8 max-w-lg leading-8 text-zinc-400">
              Open for music collaboration,
              commercial campaign,
              endorsement,
              live streaming,
              brand partnership,
              and business inquiries.
            </p>

            <a
              href={`mailto:${artist.email}`}
              className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#1DB954] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              <FaEnvelope />
              {artist.email}
            </a>

            <div className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
              <p className="text-sm tracking-[5px] text-[#1DB954]">
                RESPONSE
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Within 24 Hours
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Every collaboration request will be reviewed as quickly as
                possible.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#1DB954]"
                >
                  <div className="flex items-center gap-5">

                    <div className="rounded-2xl bg-white/5 p-4 text-2xl text-[#1DB954]">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  <FaArrowRight className="transition group-hover:translate-x-2 group-hover:text-[#1DB954]" />
                </a>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}