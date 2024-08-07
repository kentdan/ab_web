"use client";

import { useState, useEffect } from "react";
import initializePostHog from "./posthog";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Pricing3 from "@/components/Pricing3";
import Pricing6 from "@/components/Pricing6";
import Pricing12 from "@/components/Pricing12";
import PricingAll from "@/components/PricingAll";

export default function Page() {
  const [showPricing, setShowPricing] = useState(false);
  const [flags, setFlags] = useState({});
  const [featureFlag, setFeatureFlag] = useState(null);

  useEffect(() => {
    const posthog = initializePostHog();

    async function fetchData() {
      const flags = await posthog.getFeatureFlag('interest-rate');
      setFlags(flags);

      const flag = posthog.getFeatureFlag('interest');
      setFeatureFlag(flag);
    }

    fetchData();
  }, []);

  const handleCheckoutClick = () => {
    setShowPricing(true);
  };
  return (
    <div>
      {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
      <Hero onCheckoutClick={handleCheckoutClick} />
      {showPricing && <Pricing />}
    </div>
  );
  // if (featureFlag === 'control') {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <Pricing />}
  //     </div>
  //   );
  // } else if (featureFlag === 'test_3month_increase') {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <Pricing3 />}
  //     </div>
  //   );
  // } else if (featureFlag === 'test_6month_increase') {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <Pricing6 />}
  //     </div>
  //   );
  // } else if (featureFlag === 'test_12month_increase') {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <Pricing12 />}
  //     </div>
  //   );
  // } else if (featureFlag === 'test_all') {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <PricingAll />}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {flags['interest-rate'] && <p>Interest rate: {flags['interest-rate']}</p>}
  //       <Hero onCheckoutClick={handleCheckoutClick} />
  //       {showPricing && <Pricing />}
  //     </div>
  //   );
  // }

}
