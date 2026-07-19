import Link from "next/link";
import { createServerSupabase } from "@/lib/supabase/server";

export default async function MusicPage() {
  const supabase = createServerSupabase();

  const { data: songs, error } = await supabase
    .from("songs")
    .select("*")
    .order("release_date", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Music</h1>

        <Link
          href="/admin/music/new"
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-neutral-800"
        >
          + Tambah Lagu
        </Link>
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error.message}
        </div>
      )}

      {!songs?.length ? (
        <div className="rounded-lg border p-6">
          Belum ada lagu.
        </div>
      ) : (
        <div className="space-y-3">
          {songs.map((song) => (
            <div
              key={song.id}
              className="rounded-xl border p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{song.title}</h2>

                <p className="text-sm text-neutral-500">
                  {song.release_date}
                </p>
              </div>

              {song.featured && (
                <span className="rounded bg-yellow-200 px-2 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}