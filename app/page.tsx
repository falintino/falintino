import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import LatestRelease from "@/components/sections/LatestRelease";
import Discography from "@/components/sections/Discography";
import About from "@/components/sections/About";
import FeaturedVideos from "@/components/sections/FeaturedVideos";
import Gallery from "@/components/sections/Gallery";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";

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