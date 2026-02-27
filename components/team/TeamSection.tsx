"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { BlurFade, BorderBeam } from "@/components/ui/magic-ui";
import { Facebook, Linkedin, Github, Download } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface SocialLink {
    icon: React.ElementType;
    href: string;
    label: string;
}

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    socials: SocialLink[];
    resumeFile: string;
}

const team: TeamMember[] = [
    {
        name: "Rhandie Sales Jr.",
        role: "Lead Developer",
        bio: "Rhandie J. Sales Jr. is a Beta Microsoft Student Ambassador from the Philippines and a full-stack cloud-native developer specializing in Next.js, TypeScript, and Express.js. He focuses on writing clean, maintainable code and building scalable web applications, while working with cloud and AI technologies in practical projects. He serves in tech leadership roles within the Microsoft Student Community, Google Developer Groups, and AWS Cloud Clubs, and is part of the StellarPH100, recognizing the country’s greatest minds under 30.",
        avatar: "/team/rhandie.jfif",
        socials: [
            { icon: Facebook, href: "https://www.facebook.com/rhandie.sales.1", label: "Facebook" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/rhandie-sales/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Roundyy", label: "GitHub" },
        ],
        resumeFile: "",
    },
    {
        name: "Donna Rachel Reymatias",
        role: "UI/UX Developer",
        bio: "Donna Rachel N. Reymatias is a UI/UX Developer specializing in user-centered design, utilizing Figma to build intuitive and impactful digital systems. With knowledge in frontend development, she helps bridge the gap between design and implementation. Beyond development, she serves as a marketing assistant for the Microsoft Student Community, where she helps in planning and execution.",
        avatar: "/team/donna.jfif",
        socials: [
            { icon: Facebook, href: "https://www.facebook.com/donnareymatias", label: "Facebook" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/donna-r-0a6263291/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/drchl", label: "GitHub" },
        ],
        resumeFile: "",
    },
    {
        name: "Kerby Bryan Correa",
        role: "Backend Developer",
        bio:
            "A dedicated Information Technology student at the Polytechnic University of the Philippines - Manila, Kerby balances a rigorous academic path with his role as IT Support Co-Lead for the Microsoft Student Community. He is a technical enthusiast with a deep interest in database design, web development, and data management, focusing on building efficient, scalable digital solutions. Beyond the screen, he is an avid strength training and bodybuilding enthusiast, applying a disciplined and analytical approach to physical performance and personal growth.",
        avatar: "/team/kerby.jfif",
        socials: [
            { icon: Facebook, href: "https://www.facebook.com/krby.crr/", label: "Facebook" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kerby-bryan-correa-1ba743307/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/BryanButtowski", label: "GitHub" },
        ],
        resumeFile: "",
    },
    {
        name: "Akisha Lei De Castro",
        role: "Project Manager",
        bio:
            "Akisha Lei de Castro is a 3rd Year BS in Information Technology student at the Polytechnic University of the Philippines specializing in UI/UX design and Marketing Technology. She currently applies her technical and creative expertise as a Marketing Associate for the AWS Cloud Club PUP, the PUP Microsoft Student Community, and JBEC PUP.",
        avatar: "/team/akisha.jfif",
        socials: [
            { icon: Facebook, href: "https://www.facebook.com/akidcstro", label: "Facebook" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/akisha-lei-de-castro-96bba92aa/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/akidcstro", label: "GitHub" },
        ],
        resumeFile: "",
    },
];

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
    const [imgError, setImgError] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const showImage = !!member.avatar && !imgError;
    return (
        <BlurFade delay={delay}>
            <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor="#E8A87C"
                glarePosition="all"
                style={{ cursor: "auto" }}
            >
                <div className="relative rounded-2xl border border-[#3D4F7C]/40 bg-[#252B45]/50 p-6 flex flex-col items-center text-center hover:border-[#6B7BAD]/50 transition-all duration-300 overflow-hidden">
                    <BorderBeam duration={10} colorFrom="#E8A87C" colorTo="#6B7BAD" borderWidth={1.5} />
                    {/* Noise texture */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.02] rounded-2xl"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }}
                    />
                    {/* Avatar */}
                    <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#E8A87C]/40 bg-[#1A1F35] flex items-center justify-center">
                            {showImage ? (
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    width={80}
                                    height={80}
                                    onError={() => setImgError(true)}
                                    className="w-full h-full object-cover object-center"
                                />
                            ) : (
                                <span className="font-[var(--font-space-grotesk)] font-bold text-2xl text-[#EEF0F7]">
                                    {member.name.split(" ").map((n) => n[0]).join("")}
                                </span>
                            )}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#E8A87C] border-2 border-[#252B45]" />
                    </div>

                    <h3 className="font-[var(--font-space-grotesk)] font-bold text-[#EEF0F7] text-lg mb-0.5">{member.name}</h3>
                    <span className="text-xs font-semibold text-[#E8A87C] tracking-wide mb-3 font-[var(--font-inter)]">{member.role}</span>
                    {/* Bio with animated expand/collapse */}
                    <div className="mb-5">
                        <motion.div
                            animate={{ height: expanded ? "auto" : 96 }}
                            initial={{ height: 96 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: "hidden" }}
                        >
                            <p className="text-[#8A96B8] text-sm leading-relaxed font-[var(--font-inter)]">
                                {member.bio}
                            </p>
                        </motion.div>
                        {member.bio && member.bio.length > 160 && (
                            <button
                                onClick={() => setExpanded((e) => !e)}
                                className="mt-2 text-xs font-semibold text-[#E8A87C] hover:text-[#d4956a] transition-colors cursor-pointer font-[var(--font-inter)]"
                            >
                                {expanded ? "Read less ↑" : "Read more ↓"}
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        {member.socials.map((social) => (
                            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                                className="w-8 h-8 rounded-lg bg-[#1A1F35] border border-[#3D4F7C]/40 flex items-center justify-center text-[#8A96B8] hover:text-[#E8A87C] hover:border-[#E8A87C]/40 transition-all duration-200 hover:scale-110">
                                <social.icon size={15} />
                            </a>
                        ))}
                    </div>

                    <a href={member.resumeFile} download
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold font-[var(--font-inter)] text-[#1A1F35] bg-[#E8A87C] hover:bg-[#d9976d] transition-all duration-200 hover:scale-105 active:scale-95">
                        <Download size={13} /> Download Resume
                    </a>
                </div>
            </Tilt>
        </BlurFade>
    );
}

export default function TeamSection() {
    return (
        <section id="team" className="py-28 px-6 bg-[#1A1F35]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <BlurFade delay={0.1}>
                    <div className="mb-16 text-center">
                        <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-[#E8A87C] uppercase font-[var(--font-inter)]">
                            Our Team
                        </span>
                        <h2 className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#EEF0F7] mb-5">
                            Meet the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A87C] to-[#6B7BAD]">
                                People
                            </span>
                        </h2>
                        <p className="max-w-xl mx-auto text-[#8A96B8] text-lg font-[var(--font-inter)]">
                            The PUP undergrad team behind Arkived Solutions — driven by curiosity and a love for building things on the web.
                        </p>
                    </div>
                </BlurFade>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
                    {team.map((member, i) => (
                        <TeamCard key={member.name} member={member} delay={0.15 + i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
