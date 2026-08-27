import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const socialProfiles = [
  {
    name: "TikTok",
    handle: "@aprilfullskin",
    href: "https://www.tiktok.com/@aprilfullskin",
    image: "/images/socials/tiktok.jpg",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    handle: "7 April FF",
    href: "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
    image: "/images/socials/youtube.jpg",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    handle: "@falintino07",
    href: "https://www.instagram.com/falintino07",
    image: "/images/socials/instagram.jpg",
    icon: FaInstagram,
  },
  {
    name: "Spotify",
    handle: "Falintino",
    href: "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
    image: "/images/socials/spotify.jpg",
    icon: FaSpotify,
  },
];

export default function OfficialSocials() {
  return (
    <section
      id="socials-preview"
      className="relative overflow-hidden bg-[#030712] px-4 py-20 text-white"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1DB954]">
            Official Accounts
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Falintino Social Media
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Official social media accounts and digital profiles associated with
            Falintino.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {socialProfiles.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#1DB954]/40"
              >
                <div className="relative h-[330px] w-full overflow-hidden bg-black">
                  <Image
                    src={social.image}
                    alt={`${social.name} profile of Falintino`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="text-lg" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold">
                        {social.name}
                      </h3>

                      <p className="truncate text-sm text-white/60">
                        {social.handle}
                      </p>
                    </div>

                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* VIEW ALL */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/socials"
            className="rounded-full border border-[#1DB954]/40 bg-[#1DB954]/10 px-7 py-3 text-sm font-semibold text-[#1DB954] transition hover:bg-[#1DB954] hover:text-black"
          >
            View All Official Accounts →
          </Link>
        </div>

      </div>
    </section>
  );
}