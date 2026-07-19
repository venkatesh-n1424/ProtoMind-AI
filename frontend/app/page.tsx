import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Workflow from "@/components/home/Workflow";
import Stats from "@/components/home/Stats";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#09090B] text-white">
        <Hero />
        <Features />
        <Workflow />
        <Stats />
      </main>

      <Footer />
    </>
  );
}