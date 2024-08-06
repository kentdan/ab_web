"use client"
import { useState } from "react";

const Step = ({ emoji, text }) => {
  return (
    <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

const Hero = ({ onCheckoutClick }) => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <p className="text-xl opacity-80 leading-relaxed">A/B testing demo page: interest rate</p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          <Step emoji="🖥️" text="20,000 NTD" />
          <Step emoji="🎷" text="30,000 NTD" />
          <Step emoji="🔭" text="50,000 NTD" />
          <Step emoji="💎" text="100,000 NTD" />
        </div>
        
      </div>
      <button className="btn btn-primary btn-wide items-center" onClick={onCheckoutClick}>
          Check out
        </button>
    </section>
  );
};

export default Hero;
