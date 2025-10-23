"use client";
import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WaitlistPopup from "./components/popup/waitlistPopup";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
};

export default function SectionDetails() {
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [expired, setExpired] = useState(false);

    const headingControls = useAnimation();
    const rightControls = useAnimation();
    const headingRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);
    const headingInView = useInView(headingRef, { amount: 0.4 });
    const rightInView = useInView(rightRef, { amount: 0.4 });

    useEffect(() => {
        headingControls.start(headingInView ? "show" : "hidden");
    }, [headingInView, headingControls]);

    useEffect(() => {
        rightControls.start(rightInView ? "show" : "hidden");
    }, [rightInView, rightControls]);

    // Countdown logic
    useEffect(() => {
        const targetDate = new Date("2025-12-01T00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                setExpired(true);
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOpenWaitlist = () => {
        if (isSubmitting || expired) return;
        setIsSubmitting(true);
        setShowPopup(true);
        setTimeout(() => setIsSubmitting(false), 400);
    };

    return (
        <section className="relative bg-[url('/waitlistbg.svg')] bg-cover bg-center bg-no-repeat py-24 md:py-36">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 md:justify-end">
                    {/* LEFT */}
                    <motion.div
                        ref={headingRef}
                        variants={fadeUp}
                        initial="hidden"
                        animate={headingControls}
                        className="text-left flex flex-col items-start justify-center 
             pl-0 sm:pl-4 md:pl-10 lg:pl-24"
                    >
                        {/* <p className="!text-yellow-300 text-xl">Coming Soon</p> */}
                        <h2
                            className="!text-[#AFEB2B] font-extrabold
              text-[1.9rem] sm:text-[2.25rem] md:!text-[72px]
              leading-[1.05] mb-4 sm:mb-6 tracking-tight"
                        >
                            <span className="!text-white">It Only Takes</span> <br className="hidden sm:block" /> 5 Seconds.
                        </h2>
                        <p
                            className="!text-white text-[1rem] sm:text-[1.1rem] md:text-[1.15rem]
              leading-relaxed max-w-md mb-8"
                        >
                            Join the waitlist now and be the first to access Beres when it goes live.
                        </p>
                    </motion.div>

                    {/* RIGHT: Countdown + Button */}
                    <motion.div
                        ref={rightRef}
                        variants={fadeRight}
                        initial="hidden"
                        animate={rightControls}
                        className="
                            flex flex-col items-center justify-center text-center 
                            space-y-12 md:space-y-14 
                            md:translate-x-6 lg:translate-x-10
                        "
                    >
                        {/* Sentence above countdown */}
                        <p className="!text-[#FFC72E] text-lg sm:text-xl font-semibold mb-2">
                            Beres will launch soon!
                        </p>

                        {/* Countdown */}
                        <div className="flex justify-center items-center gap-5 sm:gap-7 flex-wrap md:flex-nowrap">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hours", value: timeLeft.hours },
                                { label: "Minutes", value: timeLeft.minutes },
                                { label: "Seconds", value: timeLeft.seconds },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#123C30] text-[#AFEB2B] rounded-2xl shadow-md w-32 sm:w-36 h-32 flex flex-col items-center justify-center"
                                >
                                    <span className="text-5xl sm:text-6xl font-extrabold">{item.value}</span>
                                    <span className="text-white text-sm mt-2">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Waitlist button */}
                        <button
                            onClick={handleOpenWaitlist}
                            disabled={expired || isSubmitting}
                            className={`mt-2 font-semibold text-lg px-10 py-4 rounded-full transition-all ${expired
                                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                : "bg-[#AEEA30] text-black hover:bg-[#9cd426]"
                                }`}
                        >
                            {expired ? "Offer expired" : isSubmitting ? "Opening..." : "Join the waitlist"}
                        </button>
                    </motion.div>
                </div>
            </div>

            {showPopup && <WaitlistPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
        </section>
    );
}