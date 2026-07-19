import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";

const LatestRelease = dynamic(
  () => import("@/components/sections/LatestRelease")
);

const Discography = dynamic(
  () => import("@/components/sections/Discography")
);

const About = dynamic(
  () => import("@/components/sections/About")
);

const FeaturedVideos = dynamic(
  () => import("@/components/sections/FeaturedVideos")
);

const Gallery = dynamic(
  () => import("@/components/sections/Gallery")
);

const Press = dynamic(
  () => import("@/components/sections/Press")
);

const Contact = dynamic(
  () => import("@/components/sections/Contact")
);

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <LatestRelease />

      <Discography />

      <About />

      <FeaturedVideos />

      <Gallery />

      <Press />

      <Contact />

      <Footer />
    </>
  );
}