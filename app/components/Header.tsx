"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      controls.start("open");
      gsap.to(document.body, { overflow: "hidden" });
    } else {
      controls.start("closed");
      gsap.to(document.body, { overflow: "auto" });
    }
  }, [menuOpen, controls]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: "#AE62C7",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.15)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}>
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between text-white">
          {/* Left: Logo + Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Doxa Innovations Logo"
              width={44}
              height={44}
              className="object-contain shrink-0"
              priority
            />
            <span className="text-[1.6rem] font-bold tracking-wide leading-none">
              Doxa Innovations
            </span>
          </motion.div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ opacity: 0.75, x: 2 }}
              whileTap={{ scale: 0.96 }}
              className="text-[15px] font-medium flex items-center gap-1 transition-opacity">
              Explore
              <motion.svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer select-none transition-transform duration-150 rounded-[50px]"
              style={{
                padding: "1.5px",
                background:
                  "linear-gradient(140deg, rgba(255,255,255,0.8) 0%, rgba(168,85,247,0.5) 35%, rgba(76,29,149,0.9) 100%)",
              }}>
              <span
                className="relative flex items-center px-[24px] py-[10px] rounded-[50px] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse 100px 65px at 95% -15%, rgba(255,255,255,0.60) 0%, rgba(167,139,250,0.30) 45%, transparent 70%), " +
                    "radial-gradient(ellipse 65px 55px at 5% 110%, rgba(196,148,255,0.22) 0%, transparent 65%), " +
                    "linear-gradient(160deg, #5b21b6 0%, #3b0764 55%, #1e0a3c 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}>
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[58%] h-[1px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
                  }}
                />
                <span className="relative z-10 text-white text-[13.5px] font-semibold tracking-wider">
                  Get A Quote
                </span>
              </span>
            </motion.button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle Menu">
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                variants={topVariants}
                animate={controls}
                transition={{ duration: 0.3, ease: "easeInOut" }}></motion.span>
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full my-1.5"
                variants={middleVariants}
                animate={controls}
                transition={{ duration: 0.3, ease: "easeInOut" }}></motion.span>
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                variants={bottomVariants}
                animate={controls}
                transition={{ duration: 0.3, ease: "easeInOut" }}></motion.span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-[#AE62C7] z-40 flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button
          onClick={toggleMenu}
          className="text-2xl font-medium mb-8"
          whileHover={{ scale: 1.1 }}>
          Explore
        </motion.button>

        {/* Get A Quote Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer select-none transition-transform duration-150 rounded-[50px]"
          style={{
            padding: "1.5px",
            background:
              "linear-gradient(140deg, rgba(255,255,255,0.8) 0%, rgba(168,85,247,0.5) 35%, rgba(76,29,149,0.9) 100%)",
          }}>
          <span
            className="relative flex items-center px-[28px] py-[12px] rounded-[50px] overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 100px 65px at 95% -15%, rgba(255,255,255,0.60) 0%, rgba(167,139,250,0.30) 45%, transparent 70%), " +
                "radial-gradient(ellipse 65px 55px at 5% 110%, rgba(196,148,255,0.22) 0%, transparent 65%), " +
                "linear-gradient(160deg, #5b21b6 0%, #3b0764 55%, #1e0a3c 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}>
            <span
              aria-hidden="true"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[58%] h-[1px] rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
              }}
            />
            <span className="relative z-10 text-white text-[14px] font-semibold tracking-wider">
              Get A Quote
            </span>
          </span>
        </motion.button>
      </motion.div>
    </>
  );
}
