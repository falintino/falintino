"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const links = [
  { label: "Beranda", href: "/#home", sectionId: "home" },
  { label: "Musik", href: "/#music", sectionId: "music" },
  { label: "Tentang", href: "/#about", sectionId: "about" },
  { label: "Video", href: "/#videos", sectionId: "videos" },
  { label: "Media", href: "/#press", sectionId: "press" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      links.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section && window.scrollY >= section.offsetTop - 160) current = item.sectionId;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#050807]/85 shadow-2xl shadow-black/20 backdrop-blur-2xl" : "bg-gradient-to-b from-black/70 to-transparent"}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <Link href="/#home" className="flex items-center gap-3" aria-label="Falintino — halaman utama">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#1DB954]/30 bg-[#1DB954]/10 text-xl font-black text-[#1DB954]">F</span>
            <span>
              <span className="block text-lg font-black tracking-tight">FALINTINO</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Official website</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map((item) => {
              const isActive = active === item.sectionId;
              return (
                <Link key={item.href} href={item.href} className={`relative rounded-full px-4 py-2 text-sm font-semibold ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                  {isActive && <motion.span layoutId="navbar-active" className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]" />}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-2.5 text-sm font-extrabold text-black hover:-translate-y-0.5 hover:bg-[#29d565]">
              Hubungi <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl lg:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#050807]/98 px-6 pt-28 backdrop-blur-2xl lg:hidden">
            <nav className="mx-auto flex max-w-lg flex-col" aria-label="Navigasi seluler">
              {links.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-bold">
                    {item.label}<span className="text-[#1DB954]">↗</span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)} className="mt-8 rounded-2xl bg-[#1DB954] px-6 py-4 text-center font-extrabold text-black">Kerja Sama & Kontak</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}