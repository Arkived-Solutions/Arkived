"use client";

import Link from "next/link";
import { BlurFade, MagicCard } from "@/components/ui/magic-ui";
import { ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
    {
        title: "Fetch",
        description: `a full‑stack smart lost‑and‑found system for school communities with
            a modern interface, secure row‑level security, automated item matching, 
            claim workflows, and real‑time notifications.`,
        tags: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
        live: "http://pup-fetch.vercel.app/",
        github: "https://github.com/Roundyy/fetch",
        thumbnail: "https://placehold.co/600x340/252B45/E8A87C?text=Fetch",
        type: "Web App",
    },
    {
        title: "StallMate",
        description:
            `A full‑stack smart POS and inventory management system for PUP Lagoon stalls, with  
            AI‑driven insights and interactive dashboards to streamline operations and decision‑making.`,
        tags: ["Next.js", "Firebase", "Tailwind CSS"],
        live: "https://stall-mate-2025.vercel.app/",
        github: "https://github.com/Roundyy/stallmate",
        thumbnail: "https://placehold.co/600x340/252B45/6B7BAD?text=StallMate",
        type: "Web App",
    },
    {
        title: "I-70 Clinic App",
        description:
            `A digital system for government-funded clinics that manages employee medical registrations, 
            replacing manual I-70 forms with a normalized relational database to ensure data integrity and streamline patient information management for faster healthcare delivery.`,
        tags: ["Java", "MySQL"],
        live: "#",
        github: "https://github.com/BryanButtowski/I70-CLINIC-APP",
        thumbnail: "https://placehold.co/600x340/252B45/E8A87C?text=I-70",
        type: "Java App",
    },

    {
        title: "Tsyek: Barangay Management System ",
        description:
            "A digital solution tailored to the operational needs of barangay offices. It offers a straightforward way for barangay staff to handle inventory records, making routine tasks simpler and faster. ",
        tags: ["Java"],
        live: "#",
        github: "https://github.com/drchl/Tsyek-Barangay-Inventory-Management-System",
        thumbnail: "https://placehold.co/600x340/252B45/6B7BAD?text=Tsyek",
        type: "Java App",
    },

    {
        title: "MyndSave",
        description:
            `A comprehensive budgeting tool designed to help the user manage finances effortlessly. With 
            features that allow users to add income, track expenses, set budget goals, and view detailed 
            spending breakdowns by category.`,
        tags: ["Node.js", "Express", "PostgreSQL"],
        live: "#",
        github: "#",
        thumbnail: "https://placehold.co/600x340/252B45/E8A87C?text=MyndSave",
        type: "Web App",
    },
    {
        title: "PAG-IBIG System Database ",
        description:
            "A database system designed around the PAG-IBIG membership form to improve data organization and efficiency by eliminating redundancy and ensuring data integrity.",
        tags: ["Next.js", "Chart.js", "Python"],
        live: "#",
        github: "#",
        thumbnail: "https://placehold.co/600x340/252B45/6B7BAD?text=PAG-IBIG",
        type: "Backend / API",
    }
];

const typeColor: Record<string, string> = {
    "Web App": "bg-[#6B7BAD]/20 text-[#9BADD0]",
    "Java App": "bg-[#6B7BAD]/20 text-[#9BADD0]",
    "Mobile App": "bg-[#E8A87C]/15 text-[#E8A87C]",
    "Backend / API": "bg-[#3D4F7C]/40 text-[#8A96B8]",
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-28 px-6 bg-[#141829]">
            <div className="max-w-6xl mx-auto">

                <BlurFade delay={0.1}>
                    <div className="mb-16 text-center">
                        <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-[#E8A87C] uppercase font-[var(--font-inter)]">
                            Our Work
                        </span>
                        <h2 className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#EEF0F7] mb-5">
                            Featured Projects
                        </h2>
                        <p className="max-w-xl mx-auto text-[#8A96B8] text-lg font-[var(--font-inter)]">
                            From web platforms to mobile apps and backend APIs — solutions we&apos;ve built that solve real problems.
                        </p>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <BlurFade key={i} delay={0.15 + i * 0.07}>
                            <Tilt
                                tiltMaxAngleX={7}
                                tiltMaxAngleY={7}
                                scale={1.02}
                                transitionSpeed={2500}
                                glareEnable={true}
                                glareMaxOpacity={0.06}
                                glareColor="#E8A87C"
                                glarePosition="all"
                                className="h-full"
                                style={{ cursor: "auto" }}
                            >
                                <MagicCard
                                    className="h-full border border-[#3D4F7C]/30 bg-[#252B45]/50 hover:border-[#6B7BAD]/40 transition-all duration-300 rounded-xl overflow-hidden"
                                    gradientColor="#E8A87C12"
                                >
                                    {/* Thumbnail with hover overlay + icon buttons */}
                                    <div className="relative overflow-hidden group/thumb" style={{ height: "160px" }}>
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Dark overlay on hover */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Live Demo"
                                                className="w-10 h-10 rounded-full bg-[#E8A87C] flex items-center justify-center text-[#1A1F35] hover:bg-[#d9976d] hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg"
                                            >
                                                <ExternalLink size={16} />
                                            </Link>
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="GitHub Repository"
                                                className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm"
                                            >
                                                <Github size={16} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="relative p-5 flex flex-col h-full">
                                        {/* Noise texture */}
                                        <div
                                            className="absolute inset-0 pointer-events-none opacity-[0.025] rounded-b-xl"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }}
                                        />
                                        {/* Type badge + links row */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold font-[var(--font-inter)] ${typeColor[project.type]}`}>
                                                {project.type}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Live Demo"
                                                    className="text-[#3D4F7C] hover:text-[#E8A87C] transition-colors cursor-pointer"
                                                >
                                                    <ExternalLink size={13} />
                                                </Link>
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="GitHub"
                                                    className="text-[#3D4F7C] hover:text-[#EEF0F7] transition-colors cursor-pointer"
                                                >
                                                    <Github size={13} />
                                                </Link>
                                            </div>
                                        </div>
                                        <h3 className="font-[var(--font-space-grotesk)] font-bold text-base text-[#EEF0F7] mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#8A96B8] text-sm leading-relaxed font-[var(--font-inter)] mb-4 flex-1">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-[#1A1F35] text-[#6B7BAD] border border-[#3D4F7C]/40 font-[var(--font-inter)]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </MagicCard>
                            </Tilt>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
