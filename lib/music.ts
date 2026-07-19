import { music } from "@/data/music";

export function getFeaturedSong() {
  return music.find((song) => song.featured) ?? music[0];
}

export function getAllSongs() {
  return music;
}

export function getSong(id: number) {
  return music.find((song) => song.id === id);
}