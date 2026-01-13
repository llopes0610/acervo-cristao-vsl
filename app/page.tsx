"use client";

import { useState } from "react";
import VideoHero from "@/src/components/VideoHero";
import CTAButton from "@/src/components/CTAButton";
import TopicsSection from "@/src/components/TopicsSection";
import SocialProof from "@/src/components/SocialProof";
import SalesTicker from "@/src/components/SalesTicker";
import PaymentSecurity from "@/src/components/PaymentSecurity";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <SalesTicker />
      <VideoHero onUnlock={() => setUnlocked(true)} />
      <CTAButton visible={unlocked} />
      <PaymentSecurity />
      <TopicsSection />
      <SocialProof />
    </>
  );
}
