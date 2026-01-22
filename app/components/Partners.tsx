"use client";

import Link from "next/link";
import { useMemo } from "react";

type Partner = {
    name: string;
    href: string;
    logo: string;
};

const PARTNERS: Partner[] = [
    { name: "Maor Lutheran Theological Seminary", href: "https://mlts.lcechurch.org", logo: "https://cdn.doxaplc.com/doxa-public/maor.png" },
    { name: "ZOA International", href: "https://www.zoa-international.com/", logo: "https://cdn.doxaplc.com/doxa-public/ZOA.svg" },
    { name: "Zoe Delivery", href: "https://zoedelivery.com", logo: "https://cdn.doxaplc.com/doxa-public/Zoe.png" },
    { name: "Classic Noodle & Burger House", href: "https://classicnoodle.com", logo: "https://cdn.doxaplc.com/doxa-public/classic_logo.png" },
    { name: "MySeed", href: "https://myseed.et/", logo: "https://cdn.doxaplc.com/doxa-public/myseed.png" },
    { name: "KLA Constructions LLP", href: "https://klaconstructionequipment.com", logo: "https://cdn.doxaplc.com/doxa-public/kla.svg" },
];

export default function PartnerStrip() {
    const scrollingList = useMemo(() => [...PARTNERS, ...PARTNERS], []);

    return (
        <section className="absolute bottom-24 md:bottom-10 w-full z-50">
            <div className="mx-auto px-4 text-center">
                <h2 className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wider uppercase text-shadow-white">
                    Trusted by
                </h2>

                <div className="relative mt-3 overflow-hidden mask-fade">
                    <div className="marquee">
                        {scrollingList.map((p, idx) => (
                            <Link
                                href={p.href}
                                key={`${p.name}-${idx}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="partner-item flex min-w-[120px] sm:min-w-[160px] md:min-w-[200px] items-center justify-center px-6 py-4 opacity-70 hover:opacity-100 transition-opacity"
                                aria-label={p.name}
                            >
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mask-fade {
                    height: 80px;
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }

                .marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
