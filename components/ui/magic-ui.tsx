"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "motion/react";
import { cn } from "@/lib/utils";

// ─── BlurFade ────────────────────────────────────────────────
export function BlurFade({
    children,
    className,
    delay = 0,
    duration = 0.5,
    yOffset = 8,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── AnimatedListItem ─────────────────────────────────────────
export function AnimatedListItem({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

// ─── MagicCard ────────────────────────────────────────────────
export function MagicCard({
    children,
    className,
    gradientColor = "#E8A87C15",
}: {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string;
}) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn("relative overflow-hidden", className)}
            style={
                hovered
                    ? {
                        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, ${gradientColor}, transparent 40%)`,
                    }
                    : undefined
            }
        >
            {children}
        </div>
    );
}

// ─── BorderBeam ───────────────────────────────────────────────
export function BorderBeam({
    className,
    duration = 5,
    colorFrom = "#E8A87C",
    colorTo = "#6B7BAD",
    borderWidth = 1.5,
}: {
    className?: string;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    borderWidth?: number;
}) {
    const angle = useMotionValue(0);
    const background = useMotionTemplate`conic-gradient(from ${angle}deg, transparent 0deg, ${colorFrom} 30deg, ${colorTo} 80deg, transparent 120deg)`;

    useEffect(() => {
        const controls = animate(angle, 360, {
            duration,
            ease: "linear",
            repeat: Infinity,
        });
        return controls.stop;
    }, [angle, duration]);

    return (
        <motion.div
            className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
            style={{
                background,
                padding: `${borderWidth}px`,
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
            }}
        />
    );
}

// ─── Meteors ──────────────────────────────────────────────────
type Meteor = {
    id: number;
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
};

export function Meteors({ number = 12 }: { number?: number }) {
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        setMeteors(
            Array.from({ length: number }, (_, i) => ({
                id: i,
                top: `${Math.floor(Math.random() * 60)}%`,
                left: `${Math.floor(Math.random() * 100)}%`,
                animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
                animationDuration: `${(Math.floor(Math.random() * 5) + 5)}s`,
            }))
        );
    }, [number]);

    return (
        <>
            {meteors.map((m) => (
                <span
                    key={m.id}
                    className="animate-meteor-effect pointer-events-none absolute w-px h-20"
                    style={{
                        top: m.top,
                        left: m.left,
                        animationDelay: m.animationDelay,
                        animationDuration: m.animationDuration,
                        background: "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)",
                        boxShadow: "0 0 4px 1px rgba(255,255,255,0.25)",
                    }}
                />
            ))}
        </>
    );
}
