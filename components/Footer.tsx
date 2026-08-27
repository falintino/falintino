import Link from "next/link";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
    icon: FaSpotify,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@aprilfullskin",
    icon: FaTiktok,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/falintino07",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1DB95410,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-block text-4xl font-black"
              aria-label="Falintino Official Website"
            >
              <span className="text-[#1DB954]">F</span>ALINTINO
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              Official website of Falintino, content creator and music artist.
              Discover official music, videos, social media accounts, and
              digital profiles.
            </p>

            <Link
              href="/socials"
              className="mt-6 inline-flex items-center rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-5 py-2.5 text-sm font-semibold text-[#1DB954] transition hover:bg-[#1DB954] hover:text-black"
            >
              Official Social Media →
            </Link>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Navigation
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-4"
            >
              <Link
                href="/#home"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                Home
              </Link>

              <Link
                href="/music"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                Music
              </Link>

              <Link
                href="/about"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                About
              </Link>

              <Link
                href="/#videos"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                Videos
              </Link>

              <Link
                href="/#gallery"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                Gallery
              </Link>

              <Link
                href="/#contact"
                className="text-zinc-400 hover:text-[#1DB954]"
              >
                Contact
              </Link>

              <Link
                href="/socials"
                className="font-medium text-[#1DB954] hover:text-[#24d463]"
              >
                Official Social Media
              </Link>
            </nav>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Official Accounts
            </h3>

            <p className="mb-6 max-w-sm text-sm leading-6 text-zinc-500">
              Connect with Falintino through official digital profiles.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Falintino on ${social.name}`}
                    title={`Falintino on ${social.name}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <div className="mt-7 space-y-2 text-sm text-zinc-500">
              <p>
                TikTok:{" "}
                <a
                  href="https://www.tiktok.com/@aprilfullskin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-300 hover:text-[#1DB954]"
                >
                  @aprilfullskin (Falintino)
                </a>
              </p>

              <p>
                YouTube:{" "}
                <a
                  href="https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-300 hover:text-[#1DB954]"
                >
                  @aprilfullskin (7 April FF)
                </a>
              </p>

              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/falintino07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-300 hover:text-[#1DB954]"
                >
                  @falintino07 (Falintino)
                </a>
              </p>

              <p>
                Spotify:{" "}
                <a
                  href="https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-300 hover:text-[#1DB954]"
                >
                  Falintino
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
            <p>
              © {year} Falintino. All Rights Reserved.
            </p>

            <p>
              Official Website:{" "}
              <Link
                href="/"
                className="font-medium text-zinc-300 hover:text-[#1DB954]"
              >
                falintino.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}