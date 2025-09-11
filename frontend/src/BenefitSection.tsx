// components/BenefitSectionMobile.tsx
// "use client"  // add this if you're on Next.js App Router

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

type Slide = { title: string; img: string };

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function BenefitSection() {
    const { t } = useTranslation();

    // Slides
    const slides: Slide[] = [
        { title: t("benefits.items.0"), img: "/StraightfromWhatsApp.svg" },
        { title: t("benefits.items.1"), img: "/OrdersonAutopilot.svg" },
        { title: t("benefits.items.2"), img: "/YourBusiness.svg" },
        { title: t("benefits.items.3"), img: "/Bye-bye.svg" },
        { title: t("benefits.items.4"), img: "/ServeBetter.svg" },
    ];

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-play
    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2500);
        return () => clearInterval(id);
    }, [paused, slides.length]);

    const prev = () => setIndex((i) => mod(i - 1, slides.length));
    const next = () => setIndex((i) => mod(i + 1, slides.length));

    // Position helper: -1 (left), 0 (center), +1 (right), others hidden
    const posOf = (i: number) => {
        const left = mod(index - 1, slides.length);
        const right = mod(index + 1, slides.length);
        if (i === index) return 0;
        if (i === left) return -1;
        if (i === right) return 1;
        return 2; // offstage
    };

    // Drag end → decide swipe
    const onDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
        const power = Math.abs(info.offset.x) + Math.abs(info.velocity.x) * 200;
        if (power > 180) {
            info.offset.x < 0 ? next() : prev();
        }
    };

    // Card sizes and spacing (px)
    const CARD_W = 400; // width of one card
    const GAP = 49;     // distance between cards when peeking
    const STEP = CARD_W + GAP;

    return (
        <section
            id="benefits"
            className="relative bg-[#f8f3f3] py-16 md:block hidden select-none overflow-x-hidden shadow-inner"
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="mx-auto  px-6">
                {/* Title */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-extrabold text-[#0B1E18]">
                        {t("benefits.title")}
                    </h2>
                    <p className="text-lg mt-1 text-gray-500">{t("benefits.subtitle")}</p>
                </div>

                {/* Carousel viewport */}
                <div className="relative h-[500px] overflow-visible">
                    {/* Slides */}
                    {slides.map((s, i) => {
                        const p = posOf(i); // -1,0,1,2
                        const isCenter = p === 0;
                        const isSide = Math.abs(p) === 1;

                        return (
                            <motion.div
                                key={i}
                                className="absolute top-0 left-1/2 -translate-x-1/2"
                                style={{ width: CARD_W, height: CARD_W+100, touchAction: "pan-y" }}
                                drag={isCenter ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={onDragEnd}
                                whileTap={{ scale: isCenter ? 0.98 : 1 }}
                                animate={{
                                    x: p === 2 ? (p > 0 ? STEP * 2 : -STEP * 2) : p * STEP,
                                    scale: isCenter ? 1 : 0.9,
                                    opacity: p === 2 ? 0 : 1,
                                    zIndex: isCenter ? 3 : isSide ? 2 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                            >
                                {/* Center card (white with image) */}
                                {isCenter ? (
                                    <div className="w-full h-full bg-[#f8f4f4] rounded-2xl border border-[#E6E8EA] shadow-[0_10px_22px_rgba(0,0,0,0.12)] p-5 grid place-items-center">
                                        <div className="text-lg text-black font-extrabold leading-snug">{s.title}</div>
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            className="w-full h-full !bg-[#f8f4f4] object-contain"
                                            draggable={false}
                                        />
                                    </div>
                                ) : (
                                    // Side cards (dark with title)
                                    <div className="w-full h-full rounded-2xl bg-[#f8f4f4]  text-white grid place-items-center blur-xs px-6 text-center">
                                        <div className="text-lg font-extrabold leading-snug text-black">{s.title}</div>
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            className="w-full h-full !bg-[#f8f4f4]  object-contain "
                                            draggable={false}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Dots */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all ${i === index ? "w-5 bg-[#0B1E18]" : "w-2 bg-[#C9D1D9]"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
