import { EstimateProvider } from "@/components/forms/EstimateProvider";
import { EstimateModal } from "@/components/forms/EstimateModal";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { Introduction } from "@/components/sections/Introduction/Introduction";
import { Services } from "@/components/sections/Services/Services";
import { Process } from "@/components/sections/Process/Process";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { FAQ } from "@/components/sections/FAQ/FAQ";
import { CTA } from "@/components/sections/CTA/CTA";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <EstimateProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[210] focus:bg-off-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Introduction />
        <Services />
        <Process />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <EstimateModal />
    </EstimateProvider>
  );
}
