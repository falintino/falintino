"use client";

import Link from "next/link";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1DB95410,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black">
              <span className="text-[#1DB954]">F</span>ALINTINO
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              Official Artist Website.
              Temukan karya terbaru, perjalanan musik,
              dan semua platform resmi Falintino.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#home" className="text-zinc-400 hover:text-[#1DB954]">
                Home
              </Link>

              <Link href="#music" className="text-zinc-400 hover:text-[#1DB954]">
                Music
              </Link>

              <Link href="#about" className="text-zinc-400 hover:text-[#1DB954]">
                About
              </Link>

              <Link href="#gallery" className="text-zinc-400 hover:text-[#1DB954]">
                Gallery
              </Link>

              <Link href="#contact" className="text-zinc-400 hover:text-[#1DB954]">
                Contact
              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Follow Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"
              >
                <FaSpotify size={20} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href="https://instagram.com/falintino07"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"
              >
                <FaInstagram size={20} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © {year} Falintino. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}