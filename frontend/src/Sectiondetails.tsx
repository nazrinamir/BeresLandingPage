// components/SectionDetails.tsx
"use client";
import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
};

export default function SectionDetails() {
    // controls + refs
    const headingControls = useAnimation();
    const paraControls = useAnimation();
    const headingRef = useRef<HTMLDivElement | null>(null);
    const paraRef = useRef<HTMLDivElement | null>(null);

    const headingInView = useInView(headingRef, { amount: 0.4 });
    const paraInView = useInView(paraRef, { amount: 0.4 });

    useEffect(() => {
        if (headingInView) headingControls.start("show");
        else headingControls.start("hidden"); // reset bila keluar
    }, [headingInView, headingControls]);

    useEffect(() => {
        if (paraInView) paraControls.start("show");
        else paraControls.start("hidden"); // reset bila keluar
    }, [paraInView, paraControls]);

    return (
        <section className="relative bg-[#A7E34A]">
            <div className="relative mx-auto max-w-6xl px-6 md:px-10 rounded-tr-[28px] overflow-hidden">
                <div className="bg-[#A7E34A] md:h-[260px] py-10 md:py-0 flex items-center">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-start">
                        {/* Heading */}
                        <motion.div
                            ref={headingRef}
                            className="flex items-center"
                            variants={fadeUp}
                            initial="hidden"
                            animate={headingControls}
                        >
                            {/* Mobile */}
                            <h2 className="md:hidden text-[#0B1E18] tracking-tight leading-[1.15] text-[28px] sm:text-[32px] font-extrabold text-left">
                                <span className="block whitespace-nowrap">
                                    The tool <span className="text-[#33861C]">that every</span>
                                </span>
                                <span className="block whitespace-nowrap">business owner</span>
                                <span className="block whitespace-nowrap text-[#33861C]">
                                    needs.
                                </span>
                            </h2>
                            {/* Desktop */}
                            <h2 className="hidden md:block text-[#0B1E18] tracking-tight leading-[1.15] md:text-[40px] font-extrabold text-left">
                                The tool <span className="text-[#33861C]">that every</span>
                                <br className="hidden md:block" />
                                business owner
                                <br className="hidden md:block" />
                                <span className="text-[#33861C]">needs.</span>
                            </h2>
                        </motion.div>

                        {/* Paragraph */}
                        <motion.div
                            ref={paraRef}
                            className="flex items-center justify-start md:justify-center mt-4 md:mt-24 w-full"
                            variants={fadeRight}
                            initial="hidden"
                            animate={paraControls}
                        >
                            <p className="!text-[#33861C] !text-md md:!text-xl font-medium max-w-[520px] text-right w-full">
                                <span className="font-extrabold">Beres</span> reduces complexity,
                                saves time, and unlocks new opportunities for success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
