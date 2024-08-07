"use client";

import { useState, useEffect } from "react";
import initializePostHog from "./posthog";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Pricing3 from "@/components/Pricing3";
import Pricing6 from "@/components/Pricing6";
import Pricing12 from "@/components/Pricing12";
import PricingAll from "@/components/PricingAll";
import { posthog } from "posthog-js";
// Initialize PostHog
// const posthog = initializePostHog();

// Randomly assign to one of the variants
// const variants = ['control', 'test_3month_increase', 'test_6month_increase', 'test_12month_increase', 'test_all'];
// const variant = variants[Math.floor(Math.random() * variants.length)];

// // Capture the page view event with the variant
// posthog.capture('page_view', {
//   variant: variant,
// });

// export default function Page() {
//   const [showPricing, setShowPricing] = useState(false);
//   const [flags, setFlags] = useState({});
//   const [featureFlag, setFeatureFlag] = useState(variant); // Set featureFlag based on the assigned variant

//   useEffect(() => {
//     async function fetchData() {
//       // Fetch feature flags from PostHog
//       const flags = await posthog.getFeatureFlag('interest');
//       setFlags(flags);

//       // You can set additional flags here if needed
//     }

//     fetchData();
//   }, []);

//   const handleCheckoutClick = () => {
//     setShowPricing(true);
//   };

//   return (
//     <div>
//       {flags['interest'] && <p>Interest rate: {flags['interest']}</p>}
//       <Hero onCheckoutClick={handleCheckoutClick} />
//       {showPricing && (
//         <>
//           {featureFlag === 'control' && <Pricing />}
//           {featureFlag === 'test_3month_increase' && <Pricing3 />}
//           {featureFlag === 'test_6month_increase' && <Pricing6 />}
//           {featureFlag === 'test_12month_increase' && <Pricing12 />}
//           {featureFlag === 'test_all' && <PricingAll />}
//         </>
//       )}
//     </div>
//   );
// }



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