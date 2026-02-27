"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ChevronDown } from "lucide-react";

const layers = [
    { src: "/parallax/1.png", speed: 0.04, zIndex: 1, isBackground: true },
    { src: "/parallax/2.png", speed: 0.15, zIndex: 2 },
    { src: "/parallax/3.png", speed: 0.28, zIndex: 3 },
    { src: "/parallax/4.png", speed: 0.38, zIndex: 4, riseUp: true },
    { src: "/parallax/5.png", speed: 0.62, zIndex: 5 },
];

function ParallaxLayer({
    src, zIndex, speed, isBackground, riseUp, scrollYProgress,
}: {
    src: string; zIndex: number; speed: number;
    isBackground?: boolean; riseUp?: boolean;
    scrollYProgress: MotionValue<number>;
}) {
    const yEnd = riseUp ? `-${speed * 55}%` : `${speed * 55}%`;
    const y = useTransform(scrollYProgress, [0, 1], ["0%", yEnd]);

    return (
        <motion.div
            style={{ y, zIndex }}
            className={isBackground
                ? "absolute inset-0 pointer-events-none"
                : "absolute inset-x-0 bottom-0 pointer-events-none"}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src} alt="" draggable={false}
                className={isBackground
                    ? "w-full h-full object-cover object-center select-none"
                    : "w-full select-none"}
                style={{ display: "block" }}
            />
        </motion.div>
    );
}

export default function ParallaxHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
        >
            {/* Parallax layers */}
            {layers.map((layer) => (
                <ParallaxLayer
                    key={layer.src}
                    src={layer.src}
                    zIndex={layer.zIndex}
                    speed={layer.speed}
                    isBackground={layer.isBackground}
                    riseUp={layer.riseUp}
                    scrollYProgress={scrollYProgress}
                />
            ))}

            {/* Dark overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1A1F35]"
                style={{ zIndex: 6 }}
            />

            {/* Floating atmospheric orbs — replaces meteors */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 7 }}>
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-[#E8A87C]/8 blur-[140px]"
                    animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    style={{ top: "5%", left: "5%" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-[#6B7BAD]/10 blur-[120px]"
                    animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    style={{ bottom: "15%", right: "5%" }}
                />
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full bg-[#3D4F7C]/12 blur-[100px]"
                    animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                    style={{ top: "40%", left: "50%" }}
                />
            </div>

            {/* Hero content */}
            <div className="relative flex flex-col items-center text-center px-6 max-w-3xl" style={{ zIndex: 8 }}>

                {/* Headline — static */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-[var(--font-space-grotesk)] font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-4 drop-shadow-md"
                >
                    We Build
                    <br />
                    <span className="text-[#E8A87C]">Software Solutions</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-white/60 text-lg max-w-lg mb-10 leading-relaxed font-[var(--font-inter)]"
                >
                    A software solutions team from the Polytechnic University of the Philippines
                    building modern digital experiences.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 items-center"
                >
                    <a
                        href="#projects"
                        className="rounded-full px-7 py-3 font-semibold text-sm text-[#1A1F35] bg-[#E8A87C] hover:bg-[#d9976d] transition-all duration-200 font-[var(--font-inter)] shadow-md hover:shadow-[#E8A87C]/30 hover:shadow-lg"
                    >
                        View Our Work
                    </a>
                    <a
                        href="#team"
                        className="rounded-full px-7 py-3 font-semibold text-sm text-white border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 font-[var(--font-inter)]"
                    >
                        Meet the Team
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
                style={{ zIndex: 8 }}
            >
                <span className="text-[10px] tracking-widest uppercase font-[var(--font-inter)]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
