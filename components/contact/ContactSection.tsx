"use client";

import { BlurFade } from "@/components/ui/magic-ui";
import { Facebook, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-28 px-6 bg-[#141829]">
            <div className="max-w-3xl mx-auto text-center">

                <BlurFade delay={0.1}>
                    <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-[#E8A87C] uppercase font-[var(--font-inter)]">
                        Get in Touch
                    </span>
                    <h2 className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#EEF0F7] mb-5">
                        Let&apos;s{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A87C] to-[#6B7BAD]">
                            Connect
                        </span>
                    </h2>
                    <p className="text-[#8A96B8] text-lg font-[var(--font-inter)] mb-10 max-w-lg mx-auto">
                        Have a project in mind or just want to say hi? We&apos;d love to hear from you. Reach us on our Facebook page.
                    </p>
                </BlurFade>

                {/* Facebook card */}
                <BlurFade delay={0.25}>
                    <a
                        href="https://www.facebook.com/profile.php?id=61564503124354"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-5 rounded-2xl border border-[#3D4F7C]/40 bg-[#252B45]/50 p-7 text-left hover:border-[#1877F2]/50 hover:bg-[#252B45]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1877F2]/10 overflow-hidden"
                    >
                        {/* Hover shimmer */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#1877F2]/5 to-transparent" />

                        <div className="shrink-0 w-14 h-14 rounded-xl bg-[#1877F2] flex items-center justify-center shadow-lg shadow-[#1877F2]/30">
                            <Facebook size={24} className="text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="font-[var(--font-space-grotesk)] font-bold text-[#EEF0F7] text-lg mb-0.5 flex items-center gap-2">
                                Arkived Solutions
                                <ExternalLink size={14} className="text-[#8A96B8] group-hover:text-[#1877F2] transition-colors" />
                            </div>
                            <div className="text-[#8A96B8] text-sm font-[var(--font-inter)]">
                                facebook.com/arkivedsolutions · Follow us for updates
                            </div>
                        </div>

                        <MessageCircle size={20} className="shrink-0 text-[#3D4F7C] group-hover:text-[#1877F2] transition-colors" />
                    </a>
                </BlurFade>
            </div>
        </section>
    );
}
