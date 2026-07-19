export default function AdminDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-black">
        Dashboard
      </h1>

      <p className="mt-3 text-zinc-400">
        Selamat datang di dashboard Falintino.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-zinc-500">Music</p>
          <h2 className="mt-3 text-5xl font-black">1</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-zinc-500">Videos</p>
          <h2 className="mt-3 text-5xl font-black">3</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-zinc-500">Gallery</p>
          <h2 className="mt-3 text-5xl font-black">6</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-zinc-500">Press</p>
          <h2 className="mt-3 text-5xl font-black">3</h2>
        </div>

      </div>

    </div>
  );
}