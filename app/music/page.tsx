export const metadata = {
  title: "Music",
};

export default function MusicPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-center text-white">
      <div>
        <h1 className="text-6xl font-black">
          Music
        </h1>

        <p className="mt-6 text-zinc-400">
          New releases and future discography will be available here.
        </p>
      </div>
    </main>
  );
}