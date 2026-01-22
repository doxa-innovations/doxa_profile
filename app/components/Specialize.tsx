"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type Tab = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

const TABS: Tab[] = [
    {
        id: "web",
        title: "Web Engineering",
        subtitle: "Fast, scalable, SEO-ready web applications",
        description:
            "Fast, scalable, SEO-ready web applications built for real-world usage. Designed for performance, maintainability, and long-term growth.",
        image: "https://cdn.doxaplc.com/doxa-public/web.png",
    },
    {
        id: "ui",
        title: "UI / UX Design",
        subtitle: "Human-first design systems",
        description:
            "Design systems, UI/UX strategy, and product design that feel intuitive, consistent, and delightful for users.",
        image: "https://cdn.doxaplc.com/doxa-public/uiux.png",
    },
    {
        id: "product",
        title: "Product Development",
        subtitle: "Build & scale digital products",
        description:
            "End-to-end product development: MVPs, iteration, scaling, and feature roadmaps for growth-focused products.",
        image: "https://cdn.doxaplc.com/doxa-public/product.png",
    },
    {
        id: "erp",
        title: "Enterprise & ERP Systems",
        subtitle: "Custom enterprise platforms",
        description:
            "Complex ERP systems, workflows, and automation for enterprise operations and logistics.",
        image: "https://cdn.doxaplc.com/doxa-public/erp.png",
    },
];

export default function SpecializeSection() {
    const [active, setActive] = useState<string>("web");
    const activeTab = useMemo(() => TABS.find((t) => t.id === active)!, [active]);

    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
    }, [active]);

    // hover parallax tilt
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 25;
            const rotateY = (x - rect.width / 2) / 25;

            gsap.to(el, {
                rotateX,
                rotateY,
                duration: 0.3,
                ease: "power3.out",
            });
        };

        const onLeave = () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <section className="relative w-full h-full bg-gradient-to-r from-purple-900 via-purple-950 to-black py-16 z-[9999]">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-12 gap-10">
                {/* Left side */}
                <div className="col-span-12 lg:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
                        What We Specialize In
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Our work spans multiple industries — our expertise stays consistent.
                    </p>

                    {/* clickable list */}
                    <div className="space-y-4">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                className={`w-full text-left px-3 py-3 rounded-md transition-all duration-300
                  ${
                                    active === tab.id
                                        ? "bg-purple-800 text-white border border-purple-600 shadow-glow"
                                        : "text-gray-400 hover:text-white hover:bg-purple-900/30"
                                }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="col-span-12 lg:col-span-7 relative">
                    <div ref={containerRef} className="relative w-full h-[420px] lg:h-[500px]">
                        {/* Stacked background cards */}
                        <div className="absolute right-0 top-0 w-[320px] md:w-[380px] lg:w-[420px] h-full">
                            <div className="absolute top-14 left-10 w-full h-[320px] bg-purple-900/20 border border-purple-700 rounded-2xl blur-sm"></div>
                            <div className="absolute top-8 left-20 w-full h-[320px] bg-purple-900/25 border border-purple-700 rounded-2xl blur-sm"></div>
                        </div>

                        {/* Active Card */}
                        <div
                            ref={cardsRef}
                            className="absolute right-0 top-0 w-[320px] md:w-[380px] lg:w-[420px] h-[320px] bg-gradient-to-br from-purple-950/70 to-black/40 border border-purple-700 rounded-2xl p-6 backdrop-blur-md shadow-2xl"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold text-white">
                                    {activeTab.title}
                                </h3>
                                <span className="text-purple-300 text-sm">
                  {activeTab.subtitle}
                </span>
                            </div>

                            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                                {activeTab.description}
                            </p>

                            <div className="mt-6 h-[150px] overflow-hidden rounded-xl border border-purple-600">
                                <img
                                    src={activeTab.image}
                                    alt={activeTab.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <a href="#" className="text-purple-300 hover:text-white">
                                    Learn More →
                                </a>
                                <a href="#" className="text-purple-300 hover:text-white">
                                    View Works →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow CSS */}
            <style jsx>{`
                .shadow-glow {
                    box-shadow: 0 0 20px rgba(129, 0, 255, 0.55);
                }
            `}</style>
        </section>
    );
}
