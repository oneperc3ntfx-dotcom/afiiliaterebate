import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <Features />
  <HowItWorks />
  <Statistics />
  <FAQ />
  <CTA />
  <Footer />
</>
  );
}
