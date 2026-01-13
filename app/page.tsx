"use client";

import { useState } from "react";
import VideoHero from "@/src/components/VideoHero";
import CTAButton from "@/src/components/CTAButton";
import FloatingCTA from "@/src/components/FloatingCTA";
import PaymentSecurity from "@/src/components/PaymentSecurity";
import TopicsSection from "@/src/components/TopicsSection";
import SocialProof from "@/src/components/SocialProof";
import Footer from "@/src/components/Footer";
import SalesTicker from "@/src/components/SalesTicker";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <SalesTicker />
      <VideoHero onUnlock={() => setUnlocked(true)} />

      {/* CTA normal (desktop / fluxo padrão) */}
      <CTAButton visible={unlocked} />

      {/* CTA flutuante (mobile) */}
      <FloatingCTA visible={unlocked} />

      <PaymentSecurity />
      <TopicsSection />
      <SocialProof />
      <Footer />
    </>
  );
}
