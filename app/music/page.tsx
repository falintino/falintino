import type { Metadata } from "next";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

import { music } from "@/data/music";

export const metadata: Metadata = {
  title: "Music | Falintino Official",
  description:
    "Official music releases by Falintino. Listen to Di Balik Layar and discover the latest releases from Falintino.",

  alternates: {
    canonical: "https://www.falintino.com/music",
  },

  openGraph: {
    title: "Music | Falintino Official",
    description:
      "Official music releases and discography of Falintino.",
    url: "https://www.falintino.com/music",
    siteName: "Falintino",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Music | Falintino Official",
    description:
      "Listen to official music releases by Falintino.",
  },
};

export default function MusicPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://www.falintino.com/#artist",
        name: "Falintino",
        url: "https://www.falintino.com/",
        sameAs: [
          "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
          "https://www.tiktok.com/@aprilfullskin",
          "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
          "https://www.instagram.com/falintino07",
        ],
      },

      ...music.map((song) => ({
        "@type": "MusicRecording",
        "@id": `https://www.falintino.com/music#${song.id}`,
        name: song.title,
        datePublished: song.releaseDate,
        url: song.spotify,
        image: `https://www.falintino.com${song.cover}`,

        byArtist: {
          "@id": "https://www.falintino.com/#artist",
        },

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.falintino.com/music",
        },
      })),
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#1DB954]">
            Official Discography
          </p>

          <h1 className="mt-4 text-5xl font-black sm:text-6xl">
            Falintino Music
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore official music releases by Falintino and listen on
            Spotify.
          </p>
        </div>

        {/* MUSIC GRID */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {music.map((song) => (
            <article
              key={song.id}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]"
            >
              {/* COVER */}

              <div className="relative aspect-square overflow-hidden bg-zinc-900">
                <Image
                  src={song.cover}
                  alt={`${song.title} by Falintino`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={song.featured}
                />
              </div>

              {/* INFO */}

              <div className="p-7">
                {song.featured && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1DB954]">
                    Latest Release
                  </p>
                )}

                <h2 className="text-2xl font-bold">
                  {song.title}
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Falintino •{" "}
                  {new Date(`${song.releaseDate}T00:00:00`).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>

                <a
                  href={song.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1DB954] px-6 py-3.5 font-bold text-black transition hover:scale-[1.02] hover:bg-[#1ed760]"
                >
                  <FaSpotify size={20} />

                  Listen on Spotify
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ARTIST INFO */}

        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1DB954]">
            Artist
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Falintino
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            Falintino is an Indonesian content creator and music artist.
            This page contains official music releases and links to Falintino&apos;s
            music on streaming platforms.
          </p>
        </div>
      </section>
    </main>
  );
}