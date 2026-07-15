import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import QueueSection from "@/components/home/QueueSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QueueSection />
      <Services />
    </>
  );
}