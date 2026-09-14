"use client";

import { FaEnvelope, FaArrowRight, FaCheck, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { artist } from "@/data/artist";

const opportunities = ["Kolaborasi musik", "Kampanye & endorsement", "Media dan wawancara", "Kerja sama bisnis"];
const profiles = [
  { name: "TikTok", handle: "Falintino · @aprilfullskin", url: artist.tiktok, icon: FaTiktok },
  { name: "YouTube", handle: "7 April FF · @aprilfullskin", url: artist.youtube, icon: FaYoutube },
  { name: "Instagram", handle: "Falintino · @falintino07", url: artist.instagram, icon: FaInstagram },
  { name: "Spotify", handle: "Falintino", url: artist.spotify, icon: FaSpotify },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#1DB954]/10 blur-[180px]" />
      <Container>
        <div className="grid overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] lg:grid-cols-[1.1fr_.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#53dc83]">Kontak Profesional</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Mari menciptakan sesuatu yang berdampak.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">Untuk kebutuhan kerja sama, publikasi, kampanye, atau pertanyaan profesional, silakan hubungi melalui email resmi berikut.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {opportunities.map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-300"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#1DB954]/15 text-[#53dc83]"><FaCheck className="text-[10px]" /></span>{item}</div>)}
            </div>

            <a href={`mailto:${artist.email}?subject=Business%20Inquiry%20-%20Falintino`} className="mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-[#1DB954] px-7 py-4 font-extrabold text-black hover:-translate-y-1 hover:bg-[#2bd567]">
              <FaEnvelope /><span className="truncate">{artist.email}</span><FaArrowRight className="shrink-0" />
            </a>
            <p className="mt-4 text-xs leading-6 text-zinc-500">Gunakan subjek dan informasi kerja sama yang jelas agar permintaan dapat ditinjau dengan tepat.</p>
          </motion.div>

          <div className="border-t border-white/10 bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-zinc-500">Akun Terverifikasi</p>
            <div className="mt-6 space-y-3">
              {profiles.map((item) => {
                const Icon = item.icon;
                return <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-4 hover:-translate-y-0.5 hover:border-[#1DB954]/50 hover:bg-[#1DB954]/[0.06]">
                  <div className="flex min-w-0 items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-lg text-[#53dc83]"><Icon /></span><span className="min-w-0"><strong className="block">{item.name}</strong><span className="block truncate text-sm text-zinc-500">{item.handle}</span></span></div>
                  <FaArrowRight className="shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#53dc83]" />
                </a>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}