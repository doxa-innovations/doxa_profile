"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Image from "next/image";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current || !bgRef.current || !contentRef.current) return;

        // Text fade + lift
        animate(contentRef.current, {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 1200,
            easing: "easeOutExpo",
        });

        // Slow drift
        animate(bgRef.current, {
            scale: [1, 1.05],
            translateY: [0, -20],
            duration: 30000,
            easing: "easeInOutSine",
            direction: "alternate",
            loop: true,
        });

        // Scroll fade-out
        const onScroll = () => {
            const scrollY = window.scrollY;
            const fadePoint = window.innerHeight * 0.6;
            const opacity = Math.max(0, 1 - scrollY / fadePoint);
            heroRef.current!.style.opacity = opacity.toString();
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* SVG Background (using next/image) */}
            <div
                ref={bgRef}
                className="absolute inset-0 mt-0 -z-10"
                style={{ color: "#fff" }} // important if SVG uses currentColor
            >
                <Image
                    src="/BGgradient.svg"
                    alt="Hero Background"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Light bloom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[45%] bg-white/20 blur-[140px]" />

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 max-w-5xl px-6 text-center opacity-0"
            >
                <div className="inline-block mb-6 px-5 py-2 rounded-full bg-black/30 text-sm text-white/90 backdrop-blur">
                    Leading Software Agency
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
                    Redefine. Evolve. Grow.
                    <br />
                    <span className="font-bold">Your Business</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                    We help companies design, build, and scale high-performance digital
                    products — from concept to production.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 rounded-full bg-white text-[#5B1FA6] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.35)] active:scale-95">
                        Start a Project
                    </button>

                    <button className="px-8 py-4 rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-95">
                        View Projects →
                    </button>
                </div>
            </div>
        </section>
    );
}
