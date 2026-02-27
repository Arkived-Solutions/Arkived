"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);

    // Dot follows fast, ring follows slow (the lag creates the premium feel)
    const dotX = useSpring(mouseX, { damping: 50, stiffness: 800 });
    const dotY = useSpring(mouseY, { damping: 50, stiffness: 800 });
    const ringX = useSpring(mouseX, { damping: 22, stiffness: 180 });
    const ringY = useSpring(mouseY, { damping: 22, stiffness: 180 });

    const [hovering, setHovering] = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        const onOver = (e: MouseEvent) => {
            if ((e.target as Element).closest("a, button")) setHovering(true);
        };
        const onOut = (e: MouseEvent) => {
            if ((e.target as Element).closest("a, button")) setHovering(false);
        };
        const onDown = () => setClicking(true);
        const onUp = () => setClicking(false);

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("mouseup", onUp);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Outer ring — lagging, expands on hover */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/60 mix-blend-difference"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: hovering ? 52 : clicking ? 20 : 36,
                    height: hovering ? 52 : clicking ? 20 : 36,
                    opacity: hovering ? 0.9 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Inner dot — instant follow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ width: clicking ? 8 : 5, height: clicking ? 8 : 5 }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
}
