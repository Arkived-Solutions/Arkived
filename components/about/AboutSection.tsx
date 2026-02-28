"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedListItem } from "@/components/ui/magic-ui";
import {
    NextjsIcon, NodejsIcon, TypescriptIcon,
    SupabaseIcon, TailwindIcon, FigmaIcon,
} from "@/components/ui/tech-icons";

// Each stat: numeric value + optional suffix, label, color
const stats = [
    { num: 10, suffix: "+", label: "Projects Built", color: "text-[#E8A87C]" },
    { num: 4, suffix: "", label: "Team Members", color: "text-[#6B7BAD]" },
    { num: 6, suffix: "+", label: "Semesters", color: "text-[#E8A87C]" },
    { num: 20, suffix: "+", label: "GitHub Repos", color: "text-[#6B7BAD]" },
];

const skills = [
    { icon: NextjsIcon, label: "Next.js & React Native", desc: "Modern full-stack applications" },
    { icon: NodejsIcon, label: "Node.js & Express.js", desc: "Custom backend services and REST APIs" },
    { icon: TypescriptIcon, label: "TypeScript", desc: "Type-safe scalable codebases" },
    { icon: SupabaseIcon, label: "Supabase", desc: "PostgreSQL, authentication, and realtime services" },
    { icon: TailwindIcon, label: "Tailwind CSS", desc: "Utility-first responsive design" },
    { icon: FigmaIcon, label: "Figma", desc: "UI design, prototyping, and handoff" },
];

// Count-up hook: animates 0 → target when the element enters the viewport
function useCountUp(target: number, duration = 1600) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return { ref, count };
}

function StatCard({ num, suffix, label, color, delay }: {
    num: number; suffix: string; label: string; color: string; delay: number;
}) {
    const { ref, count } = useCountUp(num, 1400);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay }}
            className="relative rounded-xl border border-[#3D4F7C]/40 bg-[#252B45]/60 backdrop-blur-sm p-6 text-center hover:border-[#6B7BAD]/60 transition-colors duration-300 overflow-hidden"
        >
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }}
            />
            <div className={`font-[var(--font-space-grotesk)] text-4xl font-bold mb-1 tabular-nums ${color}`}>
                {count}{suffix}
            </div>
            <div className="text-[#8A96B8] text-sm font-[var(--font-inter)]">{label}</div>
        </motion.div>
    );
}

export default function AboutSection() {
    return (
        // Clip-path wipe reveal: slides up from below on scroll
        <motion.section
            id="about"
            className="py-28 px-6 bg-[#1A1F35]"
            initial={{ clipPath: "inset(8% 0 0 0 round 16px)", opacity: 0.4 }}
            whileInView={{ clipPath: "inset(0% 0 0 0 round 0px)", opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-[#E8A87C] uppercase font-[var(--font-inter)]">
                        Who We Are
                    </span>
                    <h2 className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#EEF0F7] mb-5">
                        About <span className="text-[#E8A87C]">Arkived</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#8A96B8] text-lg leading-relaxed font-[var(--font-inter)]">
                        We&apos;re a passionate team of undergraduate students from the{" "}
                        <span className="text-[#EEF0F7] font-medium">Polytechnic University of the Philippines</span>{" "}
                        who love turning ideas into polished, functional software. From concept to deployment, we build solutions that matter.
                    </p>
                </motion.div>

                {/* Count-up stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} delay={0.1 + i * 0.08} />
                    ))}
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill, i) => (
                        <AnimatedListItem key={i} delay={0.1 + i * 0.08}>
                            <div className="relative flex items-center gap-4 rounded-xl border border-[#3D4F7C]/30 bg-[#252B45]/40 p-5 hover:border-[#E8A87C]/30 hover:bg-[#252B45]/70 transition-all duration-300 group cursor-default overflow-hidden">
                                {/* Noise texture */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.025]"
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }}
                                />
                                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1A1F35] flex items-center justify-center border border-[#3D4F7C]/40 group-hover:border-[#E8A87C]/40 text-[#5A6485] group-hover:text-[#E8A87C] transition-all duration-300 group-hover:shadow-[0_0_14px_rgba(232,168,124,0.35)]">
                                    <skill.icon width={20} height={20} aria-label={skill.label} />
                                </div>
                                <div>
                                    <div className="font-[var(--font-space-grotesk)] font-semibold text-[#EEF0F7] text-sm">{skill.label}</div>
                                    <div className="text-[#8A96B8] text-xs font-[var(--font-inter)]">{skill.desc}</div>
                                </div>
                                <div className="ml-auto text-[#3D4F7C] group-hover:text-[#E8A87C] transition-colors">›</div>
                            </div>
                        </AnimatedListItem>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}
