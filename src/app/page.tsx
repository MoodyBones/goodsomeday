import { HeroSection } from '@/components/oolong/HeroSection';
import { ProblemSection } from '@/components/oolong/ProblemSection';
import { WhatOolongDoesSection } from '@/components/oolong/WhatOolongDoesSection';
import { BridgeToSteepSection } from '@/components/oolong/BridgeToSteepSection';
import { AntiSycophancySection } from '@/components/oolong/AntiSycophancySection';
import { WhoThisIsForSection } from '@/components/oolong/WhoThisIsForSection';
import { FinalCTASection } from '@/components/oolong/FinalCTASection';
import { Footer } from '@/components/oolong/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <WhatOolongDoesSection />
      <BridgeToSteepSection />
      <AntiSycophancySection />
      <WhoThisIsForSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
