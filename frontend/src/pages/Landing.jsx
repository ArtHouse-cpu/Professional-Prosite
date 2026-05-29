import React from "react";
import PrositeProvider from "../components/prosite/PrositeProvider";
import Navbar from "../components/prosite/Navbar";
import Hero from "../components/prosite/Hero";
import CreativePain from "../components/prosite/CreativePain";
import Comparison from "../components/prosite/Comparison";
import BeforeAfter from "../components/prosite/BeforeAfter";
import CareerTrajectory from "../components/prosite/CareerTrajectory";
import CreatorMarquee from "../components/prosite/CreatorMarquee";
import WhyClients from "../components/prosite/WhyClients";
import Monetization from "../components/prosite/Monetization";
import CreatorEconomy from "../components/prosite/CreatorEconomy";
import BentoGrid from "../components/prosite/BentoGrid";
import SocialProof from "../components/prosite/SocialProof";
import Fomo from "../components/prosite/Fomo";
import NFCSection from "../components/prosite/NFCSection";
import Pricing from "../components/prosite/Pricing";
import FinalCTA from "../components/prosite/FinalCTA";
import Footer from "../components/prosite/Footer";

const IMG = {
  hero: "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/2400918348ec03148ff04f26f1e1e18d2b238000509cd774d1950bf87e17f130.png",
  chaos: "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/708cb6fd5d82bfd244f66e9665337baecb68dd07564cca8aede38d4efaf930bf.png",
  creator: "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/cc79b1045bd9470d242fed7665729545435e541969cc779506cfae19e44ddfc3.png",
  dashboard: "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/3e6fa00d321c54736757e38de4e26e4b9838c630ce2247e1d502715d174d9bbe.png",
  nfc: "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/5a4b8330a8bbad2d51c269ca085e0dc24f6df79f1c1314ebc2271512f6869659.png",
};

export default function Landing() {
  return (
    <PrositeProvider>
      <main data-testid="landing-page" className="relative min-h-screen bg-prosite-bg text-white font-body antialiased">
        <Navbar />
        <Hero chaoticImg={IMG.chaos} deviceImg={IMG.hero} />
        <CreatorMarquee />
        <CreativePain />
        <Comparison />
        <BeforeAfter creatorImg={IMG.creator} />
        <CareerTrajectory />
        <WhyClients />
        <Monetization dashboardImg={IMG.dashboard} />
        <CreatorEconomy />
        <BentoGrid />
        <SocialProof />
        <Fomo />
        <NFCSection nfcImg={IMG.nfc} />
        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </PrositeProvider>
  );
}
