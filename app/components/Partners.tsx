"use client";

import Link from "next/link";
import Image from "next/image";

type Partner = {
  name: string;
  href: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  {
    name: "ZOA International",
    href: "https://www.zoa-international.com/",
    logo: "https://cdn.doxaplc.com/doxa-public/ZOA.svg",
  },
  {
    name: "Maor Lutheran Theological Seminary",
    href: "https://mlts.lcechurch.org",
    logo: "https://cdn.doxaplc.com/doxa-public/maor.png",
  },
  {
    name: "Zoe Delivery",
    href: "https://zoedelivery.com",
    logo: "https://cdn.doxaplc.com/doxa-public/Zoe.png",
  },
  {
    name: "MySeed",
    href: "https://myseed.et/",
    logo: "https://cdn.doxaplc.com/doxa-public/myseed.png",
  },
  {
    name: "KLA Constructions LLP",
    href: "https://klaconstructionequipment.com",
    logo: "https://cdn.doxaplc.com/doxa-public/kla.svg",
  },
  {
    name: "Classic Noodle & Burger House",
    href: "https://classicnoodle.com",
    logo: "https://cdn.doxaplc.com/doxa-public/classic_logo.png",
  },
];

export default function PartnerStrip() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto px-4 text-center">
        <div className="relative mt-3 overflow-hidden">
          <div className="flex items-center justify-start animate-infinite-scroll">
            {PARTNERS.map((p, idx) => (
              <Link
                href={p.href}
                key={`${p.name}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex justify-center items-center w-48 sm:w-56 md:w-64 mx-6"
                aria-label={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </Link>
            ))}
            {PARTNERS.map((p, idx) => (
              <Link
                href={p.href}
                key={`duplicate-${p.name}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex justify-center items-center w-48 sm:w-56 md:w-64 mx-6"
                aria-label={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
