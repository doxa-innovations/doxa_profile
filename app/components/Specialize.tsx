"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

import { TABS, STAR_POSITIONS } from "../specialize/constants";
import type { StarConfig } from "../specialize/types";

// Shared UI 

function StarField({ count = 16 }: { count?: number }) {
  return (
    <>
      {STAR_POSITIONS.slice(0, count).map((star: StarConfig, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-purple-200 pointer-events-none animate-pulse"
          style={{
            top:               star.top,
            left:              star.left,
            width:             star.size,
            height:            star.size,
            opacity:           star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay:    `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function WindowDots() {
  return (
    <div className="flex gap-1.5">
      {(["#a855f7", "#7c3aed", "rgba(139,92,246,0.22)"] as const).map((color, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      ))}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

// Card Mockups

function DashboardMockup() {
  const navTabs   = ["DASHBOARD", "ANALYTICS", "REPORTS"] as const;
  const subStats  = [{ value: "6.21", label: "Orders" }, { value: "0.05", label: "Rate" }];
  const gridLines = [14, 28, 42];
  const legend    = [{ color: "#f472b6", label: "Fashion" }, { color: "#60a5fa", label: "Electronics" }, { color: "#34d399", label: "Home" }];

  return (
    <div className="mx-3.5 rounded-2xl overflow-hidden" style={{ height: 175, background: "linear-gradient(160deg,#0d0225,#070118)", border: "1px solid rgba(139,92,246,0.22)" }}>
      {/* Titlebar */}
      <div className="flex items-center justify-between px-3 py-1.5" style={{ borderBottom: "1px solid rgba(139,92,246,0.14)", background: "rgba(88,28,190,0.14)" }}>
        <WindowDots />
        <div className="flex gap-2.5">
          {navTabs.map((tab, i) => (
            <span key={tab} className="text-[6.5px] tracking-widest" style={{ color: i === 0 ? "#c084fc" : "rgba(167,139,250,0.32)", fontWeight: i === 0 ? 700 : 400 }}>{tab}</span>
          ))}
        </div>
        <span className="text-[7px] px-2 py-0.5 rounded-full" style={{ color: "rgba(192,132,252,0.5)", background: "rgba(139,92,246,0.15)" }}>Live</span>
      </div>

      {/* Revenue stat */}
      <div className="px-3 pt-2 pb-1.5" style={{ borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
        <p className="text-[6.5px] tracking-widest mb-1" style={{ color: "rgba(167,139,250,0.4)" }}>TOTAL REVENUE</p>
        <div className="flex items-baseline gap-3">
          <span className="text-[19px] font-extrabold" style={{ color: "#c084fc", fontFamily: "Syne,sans-serif" }}>£34,275.50</span>
          <div className="flex gap-3">
            {subStats.map((s) => (
              <span key={s.label} className="text-[9px] font-bold" style={{ color: "rgba(167,139,250,0.6)", fontFamily: "Syne,sans-serif" }}>
                {s.value}<span className="text-[6.5px] font-normal ml-0.5" style={{ color: "rgba(167,139,250,0.35)" }}>{s.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2.5 pt-2 relative">
        <svg viewBox="0 0 256 58" className="w-full" style={{ height: 58 }}>
          <defs>
            <linearGradient id="ecGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#a855f7" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0"    />
            </linearGradient>
          </defs>
          {gridLines.map((y) => <line key={y} x1="0" y1={y} x2="256" y2={y} stroke="rgba(139,92,246,0.07)" strokeWidth="0.6" />)}
          <path d="M0,53 C18,46 32,38 48,30 S75,20 98,15 S128,9 152,7 S188,4 210,6 S238,3 256,1" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M0,53 C18,46 32,38 48,30 S75,20 98,15 S128,9 152,7 S188,4 210,6 S238,3 256,1 L256,58 L0,58Z" fill="url(#ecGrad)" />
          <circle cx="256" cy="1" r="3.5" fill="#c084fc" />
          <circle cx="256" cy="1" r="6"   fill="rgba(192,132,252,0.2)" />
        </svg>
        <span className="absolute top-2.5 right-3.5 text-[7px] font-bold px-1.5 py-0.5 rounded" style={{ color: "#c084fc", background: "rgba(139,92,246,0.18)", border: "1px solid rgba(168,85,247,0.3)" }}>↑ 18%</span>
      </div>

      {/* Legend */}
      <div className="flex gap-2.5 px-3 pb-2">
        {legend.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            <span className="text-[6.5px]" style={{ color: "rgba(167,139,250,0.4)" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeachIllustration() {
  const skyStars: [number, number][] = [[18,12],[42,8],[88,16],[125,6],[162,20],[210,10],[240,16]];

  return (
    <div className="mx-3.5 rounded-2xl overflow-hidden" style={{ height: 192, border: "1px solid rgba(139,92,246,0.2)" }}>
      <svg viewBox="0 0 260 192" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <linearGradient id="bSky"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%"   stopColor="#060f22" /><stop offset="35%"  stopColor="#0f2a56" /><stop offset="65%"  stopColor="#1848a0" /><stop offset="100%" stopColor="#1a6090" /></linearGradient>
          <linearGradient id="bSea"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%"   stopColor="#1e82a8" /><stop offset="100%" stopColor="#0c3a58" /></linearGradient>
          <linearGradient id="bSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0%"   stopColor="#d4aa70" /><stop offset="100%" stopColor="#9e7040" /></linearGradient>
          <linearGradient id="bIsle" x1="0" y1="0" x2="0" y2="1"><stop offset="0%"   stopColor="#1e5030" /><stop offset="100%" stopColor="#0d2818" /></linearGradient>
          <radialGradient id="bSun"  cx="50%" cy="50%" r="50%"><stop offset="0%"   stopColor="#fffce0" /><stop offset="55%"  stopColor="#ffd060" /><stop offset="100%" stopColor="#ffa030" stopOpacity="0" /></radialGradient>
          <linearGradient id="bFog"  x1="0" y1="0" x2="0" y2="1"><stop offset="60%"  stopColor="transparent" /><stop offset="100%" stopColor="rgba(8,0,20,0.6)" /></linearGradient>
        </defs>
        <rect width="260" height="192" fill="url(#bSky)" />
        <ellipse cx="195" cy="56" rx="28" ry="28" fill="url(#bSun)" opacity="0.55" />
        <circle  cx="195" cy="52" r="12" fill="#fffde8" opacity="0.95" />
        <ellipse cx="55"  cy="36" rx="30" ry="11" fill="rgba(255,255,255,0.05)" />
        <ellipse cx="148" cy="28" rx="24" ry="9"  fill="rgba(255,255,255,0.05)" />
        {skyStars.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity="0.5" />)}
        <ellipse cx="100" cy="108" rx="60" ry="30" fill="url(#bIsle)" />
        <ellipse cx="170" cy="113" rx="38" ry="24" fill="#1a3e24" opacity="0.82" />
        <rect x="0" y="105" width="260" height="58" fill="url(#bSea)" />
        <rect x="12"  y="120" width="55" height="2"   rx="1" fill="rgba(255,255,255,0.10)" />
        <rect x="155" y="128" width="38" height="1.5" rx="1" fill="rgba(255,255,255,0.07)" />
        <rect x="88"  y="133" width="46" height="1.5" rx="1" fill="rgba(255,255,255,0.06)" />
        <path d="M0,155 Q65,148 130,151 Q195,154 260,148 L260,192 L0,192Z" fill="url(#bSand)" />
        <text x="5"   y="97"  fontSize="24" style={{ fontFamily: "serif" }}>🌴</text>
        <text x="208" y="104" fontSize="20" style={{ fontFamily: "serif" }}>🌴</text>
        <rect x="0" y="158" width="260" height="34" fill="rgba(8,2,22,0.22)" />
        <rect width="260" height="192" fill="url(#bFog)" />
        <rect x="9"   y="172" width="138" height="16" rx="5" fill="rgba(8,2,22,0.55)" />
        <text x="16"  y="183" fontSize="8.5" fill="rgba(220,200,255,0.88)" fontWeight="700" fontFamily="Syne,sans-serif">Maldives · Sunset Package</text>
        <rect x="183" y="8"    width="68" height="15" rx="8" fill="rgba(16,185,129,0.22)" stroke="rgba(16,185,129,0.42)" strokeWidth="0.8" />
        <text x="190" y="18.5" fontSize="7.5" fill="#6ee7b7" fontWeight="700">✓ Available</text>
      </svg>
    </div>
  );
}

function AttendanceMockup() {
  const bars     = [34, 58, 44, 76, 52, 90, 68];
  const periods  = ["Week", "Month"] as const;
  const students = [
    { color: "#f472b6", name: "Sophie Clarke", pct: "96%" },
    { color: "#60a5fa", name: "Elena Fates",   pct: "91%" },
    { color: "#34d399", name: "PRESCOT",        pct: "86%" },
  ];

  return (
    <div className="mx-3 rounded-2xl overflow-hidden p-3" style={{ height: 170, background: "linear-gradient(160deg,#0b0120,#060014)", border: "1px solid rgba(109,40,217,0.2)" }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[7.5px] font-bold tracking-widest" style={{ color: "rgba(167,139,250,0.58)", fontFamily: "Syne,sans-serif" }}>Attendance Students</span>
        <div className="flex gap-1.5">
          {periods.map((label, i) => (
            <span key={label} className="text-[6.5px] px-1.5 py-0.5 rounded" style={{ color: i === 0 ? "#c084fc" : "rgba(167,139,250,0.3)", background: i === 0 ? "rgba(139,92,246,0.18)" : "transparent" }}>{label}</span>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-1 mb-2" style={{ height: 65 }}>
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{
            height:     `${h}%`,
            background: i === 5 ? "linear-gradient(180deg,#d8b4fe,#7c3aed)" : i === 3 ? "linear-gradient(180deg,#a78bfa,#6d28d9)" : "rgba(109,40,217,0.28)",
            boxShadow:  i === 5 ? "0 0 10px rgba(192,132,252,0.5)" : "none",
          }} />
        ))}
      </div>
      <div className="h-px mb-2" style={{ background: "rgba(109,40,217,0.14)" }} />
      {students.map((s, i) => (
        <div key={s.name} className="flex items-center gap-1.5 mb-1">
          <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
          <span className="flex-1 text-[7.5px]" style={{ color: "rgba(200,185,238,0.7)" }}>{s.name}</span>
          <span className="text-[7.5px] font-semibold" style={{ color: i === 0 ? "#86efac" : "rgba(167,139,250,0.5)" }}>{s.pct}</span>
        </div>
      ))}
    </div>
  );
}

// Service Cards

const CARD_BORDER = "1.5px solid rgba(149,76,255,0.85)";
const cardGlow    = (opacity = 0.35) =>
  `0 0 0 1px rgba(149,76,255,0.12), 0 0 50px rgba(149,76,255,${opacity}), 0 32px 90px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.07)`;

function EcommCard() {
  return (
    <div className="relative overflow-hidden flex flex-col" style={{ width: 310, borderRadius: 22, background: "linear-gradient(170deg,#1c0640 0%,#0b0118 100%)", border: CARD_BORDER, boxShadow: cardGlow(0.35) }}>
      <div className="absolute inset-0 pointer-events-none"><StarField count={16} /></div>
      <div className="p-[18px] pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 flex items-center justify-center text-[22px]" style={{ width: 46, height: 46, borderRadius: 14, background: "linear-gradient(135deg,rgba(139,92,246,0.6),rgba(109,40,217,0.3))", border: "1px solid rgba(168,85,247,0.65)", boxShadow: "0 0 22px rgba(139,92,246,0.45)" }}>🛒</div>
          <div className="pt-0.5">
            <p className="text-white font-extrabold text-[18px] leading-tight" style={{ fontFamily: "Syne,sans-serif" }}>E-commerce<br />Platforms</p>
            <p className="text-[11.5px] leading-relaxed mt-1.5" style={{ color: "rgba(167,139,250,0.62)" }}>Custom online stores and payment<br />solutions built for growth and<br />scalability.</p>
          </div>
        </div>
      </div>
      <DashboardMockup />
      <div className="px-[18px] pt-3 pb-5">
        <p className="text-white font-bold text-[15px] mb-1" style={{ fontFamily: "Syne,sans-serif" }}>E-commerce Platforms</p>
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(107,114,128,0.85)" }}>Custom online stores and payment solutions built for growth and</p>
        <a href="#" className="inline-flex items-center gap-1.5 text-[#ede9fe] text-[12px] font-medium px-4 py-2 rounded-xl no-underline transition-opacity hover:opacity-80" style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.38),rgba(109,40,217,0.2))", border: "1px solid rgba(168,85,247,0.42)", boxShadow: "0 0 22px rgba(139,92,246,0.22)" }}>
          Learn More <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

function TourismCard() {
  return (
    <div className="relative overflow-hidden flex flex-col" style={{ width: 285, borderRadius: 22, background: "linear-gradient(170deg,#14032c 0%,#08001a 100%)", border: CARD_BORDER, boxShadow: cardGlow(0.28) }}>
      <div className="absolute inset-0 pointer-events-none"><StarField count={14} /></div>
      <div className="p-[18px] pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 flex items-center justify-center text-[20px]" style={{ width: 44, height: 44, borderRadius: 13, background: "linear-gradient(135deg,rgba(139,92,246,0.5),rgba(109,40,217,0.25))", border: "1px solid rgba(139,92,246,0.55)", boxShadow: "0 0 18px rgba(139,92,246,0.32)" }}>📍</div>
          <div className="pt-0.5">
            <p className="font-extrabold text-[18px] leading-tight" style={{ color: "#f0e6ff", fontFamily: "Syne,sans-serif" }}>Tourism & Travel<br />Systems</p>
            <p className="text-[11px] leading-relaxed mt-1.5" style={{ color: "rgba(167,139,250,0.55)" }}>Tailored solutions for bookings,<br />travel experiences, and<br />management.</p>
          </div>
        </div>
      </div>
      <BeachIllustration />
      <div className="px-[18px] pt-2.5 pb-4">
        <p className="text-[10.5px]" style={{ color: "rgba(167,139,250,0.5)" }}>Tourism & Travel Systems</p>
        <p className="text-[10px] mt-0.5" style={{ color: "rgba(107,114,128,0.55)" }}>Solutions for bookings,<br />experiences.</p>
        <a href="#" className="inline-flex items-center justify-center mt-2.5 no-underline transition-opacity hover:opacity-80" style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(139,92,246,0.18)", border: "1px solid rgba(168,85,247,0.35)", color: "#c084fc", fontSize: 14 }}>→</a>
      </div>
    </div>
  );
}

function SchoolCard() {
  return (
    <div className="relative overflow-hidden flex flex-col" style={{ width: 265, borderRadius: 22, background: "linear-gradient(170deg,#130228 0%,#09011a 100%)", border: CARD_BORDER, boxShadow: cardGlow(0.25) }}>
      <div className="absolute inset-0 pointer-events-none"><StarField count={12} /></div>
      <div className="p-[17px] pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 flex items-center justify-center text-[18px]" style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(149,76,255,0.28)", border: "1px solid rgba(149,76,255,0.5)" }}>🏫</div>
          <div className="pt-0.5">
            <p className="font-extrabold text-[15.5px] leading-tight" style={{ color: "#e8d8ff", fontFamily: "Syne,sans-serif" }}>School Management<br />Solutions</p>
            <p className="text-[10.5px] leading-relaxed mt-1" style={{ color: "rgba(190,160,240,0.65)" }}>End-to-end platforms for<br />administration, attendance, and<br />grades.</p>
          </div>
        </div>
      </div>
      <AttendanceMockup />
      <div className="px-[17px] pt-3 pb-5">
        <p className="font-bold text-[13.5px] mb-1" style={{ color: "#e2d0ff", fontFamily: "Syne,sans-serif" }}>School Management Solutions</p>
        <p className="text-[10px] leading-relaxed mb-3" style={{ color: "rgba(160,140,200,0.75)" }}>End-to-end platforms for administration,<br />attendance, and grades.</p>
        <a href="#" className="inline-flex items-center gap-1.5 text-[11.5px] font-medium px-4 py-1.5 rounded-xl no-underline transition-opacity hover:opacity-80" style={{ color: "rgba(210,160,255,0.9)", border: "1px solid rgba(149,76,255,0.45)", background: "rgba(149,76,255,0.14)" }}>
          Learn More <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

// Left Panel

function TabAccordion({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <div className="relative -translate-x-10">
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "rgba(120,120,130,0.25)" }} />

      <div className="pl-7 space-y-6">
        {TABS.map((tab, i) => {
          const isActive = i === active;
          return (
            <div key={tab.id} className="relative cursor-pointer" onClick={() => onSelect(i)}>
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute top-0 bottom-0 w-0.5 rounded-sm"
                  style={{ left: -29, background: "#a855f7", boxShadow: "0 0 14px rgba(168,85,247,0.8)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <AnimatePresence mode="popLayout">
                {isActive ? (
                  <motion.div key="active" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
                    <div className="inline-flex items-center px-3 py-1 rounded-md mb-3 text-[11.5px] font-medium text-purple-200" style={{ background: "#38334C", border: "1px solid rgba(168,85,247,0.48)", boxShadow: "0 0 18px rgba(139,92,246,0.28)", letterSpacing: "0.02em" }}>
                      {tab.title}
                    </div>
                    <h3 className="font-extrabold text-[34px] text-[#f0eaff] mb-3 leading-tight tracking-tight" style={{ fontFamily: "Syne,sans-serif" }}>{tab.title}</h3>
                    <p className="text-[14px] font-light leading-[1.72] mb-4 max-w-[350px]" style={{ color: "rgba(156,163,175,0.75)" }}>{tab.description}</p>
                    <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-medium no-underline transition-colors" style={{ color: "#b566ff" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#b566ff")}>
                      View our Works <span className="text-[17px]">›</span>
                    </a>
                  </motion.div>
                ) : (
                  <motion.div key="inactive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-1">
                    {/* Gray — not purple */}
                    <h3 className="font-semibold text-[24px] leading-tight transition-colors duration-200"
                      style={{ fontFamily: "Syne,sans-serif", color: "rgba(140,140,150,0.55)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,190,220,0.75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(140,140,150,0.55)")}>
                      {tab.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Right Panel 

function CardStack() {
  return (
    <div className="relative" style={{ height: 640 }}>
      <div className="absolute pointer-events-none" style={{ left: -20, bottom: 30, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ right: 60, top: 20,  width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.12) 0%,transparent 70%)" }} />

      {/* School */}
      <div className="absolute" style={{ right: -80, top: 200, zIndex: 1, opacity: 0.92, animation: "float3 9s ease-in-out infinite 1.5s" }}>
        <SchoolCard />
      </div>

      {/* Tourism */}
      <div className="absolute" style={{ left: "40%", top: 0, zIndex: 2, opacity: 0.95, animation: "float2 7.5s ease-in-out infinite 0.5s" }}>
        <TourismCard />
      </div>

      {/* E-commerce */}
      <div className="absolute" style={{ left: 0, top: 100, zIndex: 5, animation: "float1 6s ease-in-out infinite" }}>
        <EcommCard />
      </div>
    </div>
  );
}

// Main Export

export default function SpecializeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      gsap.to(blobRef.current, {
        x: ((e.clientX - left) / width  - 0.5) * 50,
        y: ((e.clientY - top)  / height - 0.5) * 50,
        duration: 1.4,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#07000f] overflow-hidden py-[60px]">

      {/* Parallax blobs */}
      <div ref={blobRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ top: "-5%",    left: "5%",   width: 580, height: 580, background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ bottom: "-10%", right: "-5%", width: 480, height: 480, background: "radial-gradient(circle,rgba(76,29,149,0.14)  0%,transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ top: "50%",    left: "42%",  width: 340, height: 340, background: "radial-gradient(circle,rgba(139,92,246,0.09) 0%,transparent 70%)" }} />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <StarField count={24} />
      </div>

      <div className="relative max-w-[1160px] mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-extrabold text-[50px] text-[#f0eaff] tracking-tight mb-3 leading-tight" style={{ fontFamily: "Syne,sans-serif" }}>
            What We Specialize In
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[15px] font-light max-w-[440px] mx-auto leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>
            Our work spans multiple industries — our expertise stays consistent.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid items-start" style={{ gridTemplateColumns: "5fr 7fr", gap: "80px" }}>
          <TabAccordion active={activeTab} onSelect={setActiveTab} />
          <CardStack />
        </div>
      </div>

      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-7px)}  }
        @keyframes float3 { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-9px)}  }
      `}</style>
    </section>
  );
}