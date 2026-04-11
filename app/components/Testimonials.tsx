"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  company: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Crystal",
    quote:
      "It was seamless and easy to replace our legacy integrations using Paragon. We were able to get rid of custom integrations that just work.",
    author: "Paul Jones",
    role: "VP of Engineering, Information Security",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    company: "ti;dv",
    quote:
      "We loved their documentation from the start, when evaluating vendors. Super developer friendly. Within less than 2 weeks we launched our first integrations to Slack, Hubspot and Salesforce.",
    author: "Hara Dejene",
    role: "Co-Founder & CEO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    company: "Trustpage",
    quote:
      "These integrations enable us to hit our close deals faster, and their support team knows our product incredibly well.",
    author: "Adam Janower",
    role: "Sr. Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    company: "Crystal",
    quote:
      "It was seamless and easy to replace our legacy integrations using Paragon. We were able to get rid of custom integrations that just work.",
    author: "Paul Jones",
    role: "VP of Engineering, Information Security",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = scroller.querySelectorAll<HTMLElement>(".testimonial-card");
    const cardCount = cards.length;

    // Clone cards only once
    if (scroller.children.length === cardCount) {
      cards.forEach((card) => {
        scroller.appendChild(card.cloneNode(true));
      });
    }

    // Get responsive gap
    const gap = parseInt(getComputedStyle(scroller).columnGap || "24");

    const cardWidth = cards[0].offsetWidth + gap;
    const totalScroll = cardWidth * cardCount;

    // Smooth infinite animation 
    const animation = gsap.to(scroller, {
      x: -totalScroll,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    const pause = () => animation.pause();
    const play = () => animation.play();

    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", play);

    return () => {
      animation.kill();
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030014]">
      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#030014] via-[#030014]/50 to-transparent z-20 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#030014] via-[#030014]/50 to-transparent z-20 pointer-events-none" />

        {/* Cards */}
        <motion.div
          ref={scrollerRef}
          className="flex gap-6 md:gap-8 px-4 md:px-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 testimonial-card h-[20rem]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="w-96 md:w-[32rem] h-full bg-[#0D0D2B] border border-purple-500/20 rounded-2xl p-7 md:p-9 backdrop-blur-sm group flex flex-col">
                {/* Company */}
                <div className="mb-6">
                  <p className="text-2xl font-bold text-white">
                    {testimonial.company}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 group-hover:text-gray-100 transition-colors duration-300 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <a
                    href="/case-study"
                    className="text-purple-400 mt-6 inline-flex items-center group"
                  >
                    <span className="text-sm font-medium group-hover:underline">
                      Read Case Study
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <motion.div
        className="flex justify-center gap-2 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === 0
                ? "w-6 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500"
                : "w-1.5 h-1.5 bg-gray-600"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </section>
  );
}