import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import MenuHighlights from "@/components/home/MenuHighlights";
import Benefits from "@/components/home/Benefits";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <MenuHighlights />
      <Benefits />
      <GalleryPreview />
    </div>
  );
}
