import { createSong } from "@/actions/song";

export default function NewMusicPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold">
        Tambah Lagu
      </h1>

      <form
        action={createSong}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block font-medium">
            Judul Lagu
          </label>

          <input
            name="title"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Link Spotify
          </label>

          <input
            name="spotify"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Cover Image URL
          </label>

          <input
            name="cover"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Release Date
          </label>

          <input
            type="date"
            name="release_date"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="featured"
          />

          Featured Song
        </label>

        <button
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Simpan Lagu
        </button>
      </form>
    </div>
  );
}