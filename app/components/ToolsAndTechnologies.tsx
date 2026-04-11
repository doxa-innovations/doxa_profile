"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Image from "next/image";

const tabs = [
  "Tech Stacks",
  "AI Automation Tools",
  "Internal Systems",
  "Marketing Tools",
  "Planning",
];

const tools = [
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Paragon", icon: "/icons/Paragon.svg" },
];

export default function ToolsAndTechnologies() {
  const [activeTab, setActiveTab] = useState("Tech Stacks");

  return (
    <section className="relative w-full py-24 bg-[#030014] text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tools And Technologies
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Integrate your app with our growing list of pre-built connectors - or build your <br className="hidden md:block" />
            own <span className="text-purple-500 font-medium">custom connectors</span> with any API.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 px-4 w-full">
          <div className="flex flex-wrap items-center justify-center gap-1 bg-[#120B24]/80 p-1.5 rounded-full border border-white/5 backdrop-blur-md max-w-full overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-xs md:text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="ml-2 px-6 py-2.5 text-xs md:text-sm rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all whitespace-nowrap">
              See all
            </button>
          </div>
        </div>

        {/* Tool Display Area with Grid starting here */}
        <div className="relative w-full py-20 flex justify-center">
          {/* Subtle Background Grid */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: 'center top'
            }}
          />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px] place-items-center max-w-[900px] mx-auto px-4">
            {tools.map((tool, i) => {
              const isStaggered = i % 2 !== 0; 
              
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: [-1, 1, 0] }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`
                    w-[120px] h-[120px] flex items-center justify-center relative
                    opacity-100 transition-all duration-300 cursor-pointer
                    border border-transparent hover:border-purple-500/30 hover:bg-purple-500/5 rounded-2xl
                    ${isStaggered ? 'lg:translate-y-12' : ''}
                  `}
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}