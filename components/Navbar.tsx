"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
];

// Smooth scroll helper that works with Lenis
function scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        // Small delay so the menu closes before scrolling
        setTimeout(() => scrollTo(href), 50);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || menuOpen
                    ? "backdrop-blur-md bg-[#1A1F35]/90 border-b border-[#3D4F7C]/40 shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
                    whileHover={{ scale: 1.03 }}
                    className="font-[var(--font-space-grotesk)] font-semibold text-white text-xl tracking-tight"
                >
                    Arkived
                </motion.a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            whileHover={{ y: -1 }}
                            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 font-[var(--font-inter)] cursor-pointer"
                        >
                            {link.label}
                        </motion.button>
                    ))}
                    <motion.button
                        onClick={() => handleNavClick("#contact")}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-4 py-2 rounded-lg bg-[#E8A87C] text-[#1A1F35] text-sm font-semibold font-[var(--font-inter)] transition-shadow hover:bg-[#d9976d] cursor-pointer"
                    >
                        Get in Touch
                    </motion.button>
                </nav>

                {/* Mobile hamburger — large touch target */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {menuOpen ? (
                            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <X size={22} />
                            </motion.span>
                        ) : (
                            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <Menu size={22} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden bg-[#1A1F35]/98 border-t border-[#3D4F7C]/30"
                    >
                        <ul className="px-6 py-5 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleNavClick(link.href)}
                                        className="w-full text-left px-3 py-3 rounded-lg text-[#8A96B8] hover:text-[#EEF0F7] hover:bg-white/5 text-base font-medium transition-all duration-150 font-[var(--font-inter)] cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                            <li className="pt-2">
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="w-full px-3 py-3 rounded-lg bg-[#E8A87C] text-[#1A1F35] text-sm font-semibold font-[var(--font-inter)] hover:bg-[#d9976d] transition-colors cursor-pointer"
                                >
                                    Get in Touch
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
