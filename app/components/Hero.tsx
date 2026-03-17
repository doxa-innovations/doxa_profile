"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { gsap } from "gsap";

import PartnerStrip from "./Partners";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !contentRef.current) return;

    // GSAP: text fade + lift
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    );

    // GSAP: slow background drift
    gsap.to(bgRef.current, {
      scale: 1.05,
      y: -10,
      duration: 30,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Scroll fade-out
    const onScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = window.innerHeight * 0.6;
      const opacity = Math.max(0, 1 - scrollY / fadePoint);
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center lg:justify-between overflow-hidden font-sans pt-20 pb-10">
      {/* SVG Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[160vh] bg-[url('/BGgradient.svg')] bg-cover bg-center bg-no-repeat -z-10 origin-center"
      />

      {/* Main Content Container */}
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center max-w-4xl w-full px-6 mx-auto text-center opacity-0 z-10 mt-10 sm:mt-14 lg:mt-20"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-lg text-[10px] sm:text-xs md:text-sm font-light tracking-wide text-white/90"
          style={{
            background: "rgba(30, 10, 60, 0.6)",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
          Leading Software Agency In the City
        </motion.div>

        {/* Main Headline */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[2.8rem] font-light text-white tracking-tight leading-tight">
            Redefine. Evolve. Grow.
          </h3>
          <motion.h4
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-6xl lg:text-[3.5rem] mt-1 sm:mt-2 tracking-tight drop-shadow-sm leading-none">
            Your Business
          </motion.h4>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs sm:text-sm md:text-lg lg:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10">
          We help companies design, build, and scale high-performance digital
          products — from concept to production.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-row gap-10 md:gap-12 justify-center items-center w-full mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-5 py-2.5 rounded-full text-white font-medium
             bg-gradient-to-r from-[#8b5cf6] to-[#A059B8]
             transition-all duration-300 text-sm md:text-sm whitespace-nowrap">
            Start a Project
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded-full border border-white text-white font-medium transition-all duration-300 hover:bg-white/10 text-sm md:text-sm whitespace-nowrap">
            View Projects
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Divider and Partners Section */}
      <div className="w-full flex flex-col items-center justify-start z-10 mt-12 lg:mt-auto">
        <div className="w-full max-w-4xl h-[1px] glow-divider mb-10" />
        <p className="mb-6 text-xs md:text-sm text-white/90 font-light tracking-wide text-center mt-20">
          Trusted by leading Companies and NGO&apos;s in Ethiopia and US
        </p>
        <PartnerStrip />
      </div>
    </section>
  );
}
