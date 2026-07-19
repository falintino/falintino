import Link from "next/link";
import {
  LayoutDashboard,
  Music2,
  Video,
  ImageIcon,
  Newspaper,
  User,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Music",
    href: "/admin/music",
    icon: Music2,
  },
  {
    title: "Videos",
    href: "/admin/videos",
    icon: Video,
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    title: "Press",
    href: "/admin/press",
    icon: Newspaper,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: User,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#090909] text-white">

      <aside className="w-72 border-r border-white/10 bg-black">

        <div className="border-b border-white/10 p-8">

          <h1 className="text-3xl font-black">
            Falintino CMS
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Official Website Manager
          </p>

        </div>

        <nav className="space-y-2 p-5">

          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-white/10"
              >
                <Icon size={22} />

                <span>{item.title}</span>

              </Link>
            );
          })}

        </nav>

      </aside>

      <main className="flex-1">

        <header className="flex h-20 items-center justify-between border-b border-white/10 px-10">

          <div>

            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

            <p className="text-sm text-zinc-500">
              Welcome back.
            </p>

          </div>

        </header>

        <div className="p-10">

          {children}

        </div>

      </main>

    </div>
  );
}