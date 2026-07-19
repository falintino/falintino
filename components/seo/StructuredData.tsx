export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Falintino",

    url: "https://www.falintino.com",

    image: "https://www.falintino.com/og-image.jpg",

    description:
      "Official website of Falintino. Explore music releases, official videos, gallery, and official social media.",

    sameAs: [
      "https://www.youtube.com/channel/UCGry5noC1A-0DxXaKo6igcg",
      "https://www.tiktok.com/@aprilfullskin",
      "https://www.instagram.com/falintino07"
    ]
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