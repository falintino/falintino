import type { Metadata } from "next";
import Image from "next/image";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Falintino Social Media | Official Accounts",

  description:
    "Official social media accounts of Falintino, including TikTok @aprilfullskin, YouTube 7 April FF, Instagram @falintino07, and Spotify.",

  alternates: {
    canonical: "https://www.falintino.com/socials",
  },

  openGraph: {
    title: "Falintino Social Media | Official Accounts",
    description:
      "Official TikTok, YouTube, Instagram, and Spotify accounts associated with Falintino.",
    url: "https://www.falintino.com/socials",
    siteName: "Falintino",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Falintino Social Media | Official Accounts",
    description:
      "Official social media accounts and digital profiles associated with Falintino.",
  },
};

const socialProfiles = [
  {
    name: "TikTok",
    handle: "@aprilfullskin",
    description: "Official TikTok account of Falintino",
    href: "https://www.tiktok.com/@aprilfullskin",
    image: "/images/socials/tiktok.jpg",
    icon: FaTiktok,
  },

  {
    name: "YouTube",
    handle: "7 April FF",
    description: "Official YouTube channel of Falintino",
    href: "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
    image: "/images/socials/youtube.jpg",
    icon: FaYoutube,
  },

  {
    name: "Instagram",
    handle: "@falintino07",
    description: "Official Instagram account of Falintino",
    href: "https://www.instagram.com/falintino07",
    image: "/images/socials/instagram.jpg",
    icon: FaInstagram,
  },

  {
    name: "Spotify",
    handle: "Falintino",
    description: "Official Falintino artist profile on Spotify",
    href: "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
    image: "/images/socials/spotify.jpg",
    icon: FaSpotify,
  },
];

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-4 py-24 text-white">
      <section className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
            Official Accounts
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Falintino Social Media
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Official social media accounts and digital profiles associated with
            Falintino.
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {socialProfiles.map((social) => {
            const Icon = social.icon;

            return (
              <article
                key={social.name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >

                {/* SCREENSHOT */}
                <div className="relative h-[400px] w-full overflow-hidden bg-black">
                  <Image
                    src={social.image}
                    alt={`${social.name} profile of Falintino`}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* ACCOUNT INFO */}
                <div className="p-5">

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="text-lg" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold">
                        {social.name}
                      </h2>

                      <p className="truncate text-sm font-medium text-white/70">
                        {social.handle}
                      </p>
                    </div>
                  </div>

                  <p className="min-h-[48px] text-sm leading-6 text-white/50">
                    {social.description}
                  </p>

                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.10]"
                  >
                    Visit {social.name} →
                  </a>

                </div>
              </article>
            );
          })}
        </div>

        {/* OFFICIAL WEBSITE */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <p className="text-sm leading-6 text-white/50">
            These links are provided through Falintino&apos;s official website
            at{" "}
            <a
              href="https://www.falintino.com"
              className="font-semibold text-white transition hover:underline"
            >
              falintino.com
            </a>
            .
          </p>
        </div>

      </section>
    </main>
  );
}