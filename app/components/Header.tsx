"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-xl bg-black/30 border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">
                <span className="font-semibold tracking-wide">Doxa Innovations</span>

                <button className="relative p-[1px] rounded-[16px] cursor-pointer border-none
    bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#6b21a8)]
    after:content-[''] after:absolute after:w-[65%] after:height-[60%] after:rounded-[120px]
    after:top-0 after:right-0 after:shadow-[0_0_20px_#a855f766] after:-z-10 transition-transform active:scale-95">

                    {/* Blob1 Layer - Background Glow */}
                    <div className="absolute bottom-0 left-0 w-[70px] h-full rounded-[16px]
        bg-[radial-gradient(circle_60px_at_0%_100%,#d8b4fe,#7e22ce80,transparent)]
        shadow-[-10px_10px_30px_#7e22ce40] z-0">
                    </div>

                    {/* Inner Layer - The Glass Container */}
                    <div className="relative z-10 px-[25px] py-[14px] rounded-[14px]
        bg-[radial-gradient(circle_80px_at_80%_-50%,#a855f760,#3b0764ad)]
        backdrop-blur-md overflow-hidden
        before:content-[''] before:absolute before:inset-0 before:rounded-[14px]
        before:bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff20,#7e22ce10,transparent)]">

                        {/* THE TEXT - Forced to the top with z-20 and relative */}
                        <span className="relative z-20 text-white text-sm font-bold tracking-wider uppercase drop-shadow-md">
            Get a Quote
        </span>
                    </div>
                </button>

            </div>
        </nav>
    );
}