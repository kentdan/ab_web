"use client"
import { useState } from "react";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Page() {
  const [showPricing, setShowPricing] = useState(false);

  const handleCheckoutClick = () => {
    setShowPricing(true);
  };

  return (
    <div>
      <Hero onCheckoutClick={handleCheckoutClick} />
      {showPricing && <Pricing />}
    </div>
  );
}
