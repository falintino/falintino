"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";
import { SongSchema } from "@/types/song";

export async function createSong(formData: FormData): Promise<void> {
  const supabase = createServerSupabase();

  const data = {
    title: formData.get("title"),
    spotify: formData.get("spotify"),
    cover: formData.get("cover"),
    release_date: formData.get("release_date"),
    featured: formData.get("featured") === "on",
  };

  const parsed = SongSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Data lagu tidak valid.");
  }

  const { error } = await supabase
    .from("songs")
    .insert(parsed.data);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/music");
}