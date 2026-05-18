import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Shapes from "@/components/Shapes";
import InTheBox from "@/components/InTheBox";
import Plants from "@/components/Plants";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Shapes />
      <InTheBox />
      <Plants />
      <CTA />
      <Footer />
    </main>
  );
}
