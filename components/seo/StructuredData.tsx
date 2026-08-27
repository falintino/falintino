export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Falintino",

    alternateName: [
      "@aprilfullskin",
      "7 April FF",
    ],

    url: "https://www.falintino.com",

    image: "https://www.falintino.com/og-image.jpg",

    description:
      "Falintino is an Indonesian content creator and music artist from West Kalimantan. He is known through the TikTok account @aprilfullskin and the YouTube channel 7 April FF.",

    jobTitle: [
      "Content Creator",
      "Music Artist",
    ],

    sameAs: [
      "https://www.tiktok.com/@aprilfullskin",
      "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
      "https://www.instagram.com/falintino07",
      "https://open.spotify.com/artist/4uAv6DgSzS3d6ESFLdJyji",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}