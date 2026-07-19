import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Falintino",
    short_name: "Falintino",
    description: "Official Artist Website",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#1DB954",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}