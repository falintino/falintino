import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute h-[600px] w-[600px] rounded-full bg-[#1DB954]/10 blur-[180px]" />

      <div className="relative text-center">

        <p className="text-sm font-bold tracking-[8px] text-[#1DB954]">
          ERROR 404
        </p>

        <h1 className="mt-6 text-8xl font-black lg:text-[160px]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-black">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1DB954] px-8 py-4 font-bold text-black transition hover:scale-105"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>
    </main>
  );
}