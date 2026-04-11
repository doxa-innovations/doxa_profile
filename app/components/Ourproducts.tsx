"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    tag: "Ecommerce Project",
    title: "KLA Constructions LLP",
    description:
      "A custom platform that streamlines equipment sales, inventory management, and content control through a unified, scalable system built for operational efficiency.",
    metric: "100% increase in ....",
    image: "/klp.svg",
  },
  {
    id: 2,
    tag: "Ecommerce Project",
    title: "Green Harvest Organics",
    description:
      "Where Fresh Air Meets Fresh Foods. A specialized farm-to-table digital marketplace optimizing supply chain logistics and direct-to-consumer sales.",
    metric: "100% increase in ....",
    image: "/klp2.svg",
  },
];

export default function OurProducts() {
  return (
    <section className="relative w-full bg-[#030014] py-24 px-6 overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1440 1000" fill="none">
          <path
            d="M-100 800C200 650 600 950 1000 650C1400 350 1600 550 1800 450"
            stroke="url(#purple-gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="purple-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#6800AD" stopOpacity="0" />
              <stop offset="0.5" stopColor="#6800AD" />
              <stop offset="1" stopColor="#6800AD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-4"
          >
            Our Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
             Paragon gives you a suite of features for implementing <br />
             integration logic without relying on workarounds.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 lg:gap-8">
          {PRODUCTS.map((product, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`flex ${
                  isLeft ? "justify-start" : "justify-end"
                } items-center relative group`}
              >
                {/* Left Arrow */}
                {!isLeft && <ArrowButton direction="left" />}

                <ProductCard product={product} align={isLeft ? "left" : "right"} />

                {/* Right Arrow */}
                {isLeft && <ArrowButton direction="right" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Arrow Button */

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left";

  return (
    <button
      aria-label="Navigate"
      className={`hidden lg:flex absolute ${
        isLeft ? "left-16 xl:left-50" : "right-16 xl:right-50"
      } top-1/2 -translate-y-1/2 w-14 h-14 bg-[#6800AD] rounded-full items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-20`}
    >
      <ArrowIcon className={isLeft ? "rotate-180" : ""} />
    </button>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

/* Product Card */

function ProductCard({
  product,
  align,
}: {
  product: (typeof PRODUCTS)[0];
  align: "left" | "right";
}) {
  const isLeft = align === "left";

  return (
    <div className="relative w-full max-w-4xl">
      {/* Ghost Card */}
      <div
        className={`absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-[1rem] -z-10
        ${isLeft ? "translate-x-8 -translate-y-8" : "-translate-x-8 translate-y-8"}`}
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`relative rounded-[1rem] p-8 lg:p-10 flex gap-8 overflow-hidden border border-white/20 ${
          isLeft ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
        }`}
      >
        {/* Solid Base */}
        <div className="absolute inset-0 bg-[#2a2a3e]/70 rounded-[1rem] -z-10" />

        {/* Glass Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[1rem]" />

        {/* Soft overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[1rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-[1rem]" />

        {/* Content */}
        <div className="flex-1 space-y-5 relative z-10 flex flex-col justify-center">
          <div className="inline-flex px-4 py-1.5 rounded-full border border-purple-300/30 bg-purple-500/10 text-[10px] font-bold text-purple-300 uppercase tracking-widest w-fit">
            {product.tag}
          </div>

          <h3 className="text-3xl font-bold text-white">
            {product.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            {product.description}
          </p>

          <div className="flex items-center gap-3 text-white font-medium">
            <CheckCircle2 size={18} className="text-purple-400" />
            <span className="text-sm">{product.metric}</span>
          </div>

          <button
            aria-label="Read more details"
            className="bg-[#6800AD] hover:bg-[#7a10c9] text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg w-fit"
          >
            Read More Details
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[340px] h-[240px] lg:h-[280px] rounded-2xl overflow-hidden border border-white/10 z-10 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}