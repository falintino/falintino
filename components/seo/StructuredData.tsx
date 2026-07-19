export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Falintino",
    url: "https://falintino.com",
    image: "https://falintino.com/og-image.jpg",
    description:
      "Official website of Falintino.",
    sameAs: [
      "https://open.spotify.com/artist/ISI_ID_ARTIST",
      "https://www.youtube.com/@falintino",
      "https://www.tiktok.com/@falintino",
      "https://www.instagram.com/falintino07"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}