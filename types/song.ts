import { z } from "zod";

export const SongSchema = z.object({
  title: z
    .string()
    .min(2, "Judul lagu minimal 2 karakter"),

  spotify: z
    .string()
    .url("Masukkan URL Spotify yang valid"),

  cover: z
    .string()
    .optional(),

  release_date: z.string(),

  featured: z.boolean(),
});

export type SongForm = z.infer<typeof SongSchema>;