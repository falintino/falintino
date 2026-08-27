import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { artist } from "@/data/artist";

export const metadata: Metadata = {
  title: "About Falintino | Content Creator & Music Artist",

  description:
    "Learn about Falintino, an Indonesian content creator and music artist from West Kalimantan, known through TikTok Falintino (@aprilfullskin), YouTube 7 April FF, and his music releases.",

  alternates: {
    canonical: "https://www.falintino.com/about",
  },

  openGraph: {
    title: "About Falintino | Content Creator & Music Artist",
    description:
      "Official profile of Falintino, Indonesian content creator and music artist known through TikTok Falintino (@aprilfullskin) and YouTube 7 April FF.",
    url: "https://www.falintino.com/about",
    siteName: "Falintino",
    type: "profile",
    images: [
      {
        url: "/images/artist/hero.jpeg",
        width: 1200,
        height: 1600,
        alt: "Falintino",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Falintino",
    description:
      "Official profile of Falintino, Indonesian content creator and music artist.",
    images: ["/images/artist/hero.jpeg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.falintino.com/about#page",

      url: "https://www.falintino.com/about",

      name: "About Falintino",

      description:
        "Official profile and biography of Falintino, an Indonesian content creator and music artist.",

      mainEntity: {
        "@id": "https://www.falintino.com/#person",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.falintino.com/#person",

      name: "Falintino",

      alternateName: [
        "@aprilfullskin",
        "7 April FF",
      ],

      url: "https://www.falintino.com",

      image: "https://www.falintino.com/images/artist/hero.jpeg",

      description:
        "Falintino is an Indonesian content creator and music artist from West Kalimantan. He is known through the TikTok profile Falintino (@aprilfullskin) and the YouTube channel 7 April FF.",

      jobTitle: [
        "Content Creator",
        "Music Artist",
      ],

      sameAs: [
        "https://www.tiktok.com/@aprilfullskin",
        "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
        "https://www.instagram.com/falintino07",
        "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
      ],
    },
  ],
};

const socialLinks = [
  {
    name: "TikTok",
    label: "Falintino (@aprilfullskin)",
    href: artist.tiktok,
    icon: FaTiktok,
  },

  {
    name: "YouTube",
    label: "7 April FF",
    href: artist.youtube,
    icon: FaYoutube,
  },

  {
    name: "Instagram",
    label: "@falintino07",
    href: artist.instagram,
    icon: FaInstagram,
  },

  {
    name: "Spotify",
    label: "Falintino",
    href: artist.spotify,
    icon: FaSpotify,
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
        <section className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#1DB954]">
              Official Profile
            </p>

            <h1 className="mt-4 text-5xl font-black sm:text-6xl">
              About Falintino
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Content creator, gaming personality, and music artist from
              West Kalimantan, Indonesia.
            </p>
          </div>

          {/* PROFILE */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full bg-[#1DB954]/20 blur-[100px]"
              />

              <Image
                src={artist.heroImage}
                alt="Falintino, Indonesian content creator and music artist"
                width={560}
                height={760}
                priority
                className="relative w-full rounded-[40px] border border-white/10 object-cover shadow-[0_0_80px_rgba(29,185,84,.18)]"
              />
            </div>

            {/* BIO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1DB954]">
                Falintino
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Creator • Music Artist
              </h2>

              <p className="mt-7 text-lg leading-9 text-zinc-400">
                Falintino adalah kreator konten dan musisi asal Kalimantan
                Barat, Indonesia. Ia dikenal melalui akun TikTok{" "}
                <strong className="font-semibold text-white">
                  Falintino (@aprilfullskin)
                </strong>{" "}
                dan kanal YouTube{" "}
                <strong className="font-semibold text-white">
                  7 April FF
                </strong>.
              </p>

              <p className="mt-5 text-lg leading-9 text-zinc-400">
                Kontennya banyak berfokus pada gaming, khususnya Free Fire.
                Selain aktivitas sebagai kreator konten, Falintino juga
                mengembangkan karya musik melalui identitas artis Falintino.
              </p>

              <p className="mt-5 text-lg leading-9 text-zinc-400">
                Pada 2026, Falintino merilis karya musik
                <strong className="font-semibold text-white">
                  {" "}Di Balik Layar
                </strong>,
                yang menjadi bagian dari perjalanan musiknya.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/music"
                  className="rounded-full bg-[#1DB954] px-7 py-3.5 font-bold text-black transition hover:bg-[#1ed760]"
                >
                  Explore Music →
                </Link>

                <Link
                  href="/socials"
                  className="rounded-full border border-white/10 px-7 py-3.5 font-semibold transition hover:border-[#1DB954] hover:text-[#1DB954]"
                >
                  Official Social Media →
                </Link>
              </div>
            </div>
          </div>

          {/* IDENTITY */}
          <div className="mt-24">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#1DB954]">
                Digital Identity
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Official Accounts
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                These profiles are associated with Falintino&apos;s official
                digital identity.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#1DB954]/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {social.name}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      {social.label}
                    </p>

                    <p className="mt-5 text-sm font-semibold text-[#1DB954]">
                      Visit profile →
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold">
              More about Falintino
            </h2>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-[#1DB954] hover:text-[#1DB954]"
              >
                Official Website
              </Link>

              <Link
                href="/music"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-[#1DB954] hover:text-[#1DB954]"
              >
                Music
              </Link>

              <Link
                href="/socials"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-[#1DB954] hover:text-[#1DB954]"
              >
                Official Social Media
              </Link>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}