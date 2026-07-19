"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      links.forEach((item) => {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);

        if (!section) return;

        if (window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-2xl font-black tracking-wide"
          >
            <span className="text-[#1DB954]">F</span>alintino
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">

            {links.map((item) => {

              const isActive =
                active === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-5 py-2 font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </a>
              );
            })}

          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl lg:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </motion.header>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex h-full flex-col items-center justify-center gap-10">

              {links.map((item) => (

                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold transition hover:text-[#1DB954]"
                >
                  {item.label}
                </a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}