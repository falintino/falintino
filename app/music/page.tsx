import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Falintino Music | Official Releases",

  description:
    "Official music page of Falintino. Listen to Di Balik Layar and explore Falintino's official music releases, Spotify artist profile, and music videos.",

  alternates: {
    canonical: "https://www.falintino.com/music",
  },

  openGraph: {
    title: "Falintino Music | Official Releases",
    description:
      "Official music releases and artist profile of Falintino.",
    url: "https://www.falintino.com/music",
    siteName: "Falintino",
    type: "website",
    images: [
      {
        url: "/images/releases/di-balik-layar.jpeg",
        width: 1200,
        height: 1200,
        alt: "Di Balik Layar by Falintino",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Falintino Music | Official Releases",
    description:
      "Official music releases and artist profile of Falintino.",
    images: ["/images/releases/di-balik-layar.jpeg"],
  },
};

const musicSchema = {
  "@context": "https://schema.org",
  "@type": "MusicRecording",

  name: "Di Balik Layar",

  url: "https://www.falintino.com/music",

  image:
    "https://www.falintino.com/images/releases/di-balik-layar.jpeg",

  datePublished: "2026-07-07",

  byArtist: {
    "@type": "Person",
    name: "Falintino",
    url: "https://www.falintino.com",
    sameAs: [
      "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
      "https://www.tiktok.com/@aprilfullskin",
      "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
      "https://www.instagram.com/falintino07",
    ],
  },
};

export default function MusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(musicSchema),
        }}
      />

      <main className="min-h-screen bg-[#030712] px-4 py-24 text-white">
        <section className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1DB954]">
              Official Music
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Falintino Music
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Official releases, music videos, and artist profiles from
              Falintino.
            </p>
          </div>

          <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-2">
            <div className="relative aspect-square min-h-[380px] overflow-hidden bg-black">
              <Image
                src="/images/releases/di-balik-layar.jpeg"
                alt="Di Balik Layar by Falintino"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1DB954]">
                Latest Release
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Di Balik Layar
              </h2>

              <p className="mt-3 text-lg text-white/70">
                Falintino
              </p>

              <p className="mt-2 text-sm text-white/40">
                Released July 7, 2026
              </p>

              <p className="mt-7 max-w-xl leading-8 text-white/60">
                Di Balik Layar is an official music release by Falintino,
                marking his debut as a music artist.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#1DB954] px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
                >
                  <FaSpotify className="mr-3" />
                  Listen on Spotify
                </a>

                <a
                  href="https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-white/30"
                >
                  <FaYoutube className="mr-3" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </article>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-sm leading-6 text-white/50">
              Music released under the official Falintino artist identity.
            </p>

            <Link
              href="/socials"
              className="mt-4 inline-flex text-sm font-semibold text-[#1DB954] hover:underline"
            >
              View Falintino&apos;s official social media →
            </Link>
          </div>

        </section>
      </main>
    </>
  );
}