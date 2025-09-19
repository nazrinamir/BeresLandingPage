// components/FeaturesGrid.tsx
"use client";

import React, { useMemo, useState} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import IncentivePopup from "./components/popup/IncentivePopup";
import ShareModal from "./components/popup/ShareModal";
import OneToOnePopup from "./components/popup/onetoonePopup";
import WaitlistPopup from "./components/popup/waitlistPopup";

export default function Step() {
  const [showPopup, setShowPopup] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showOneToOne, setShowOneToOne] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);

  // Parallax sticker
  const { scrollY } = useScroll();
  const stickerY = useTransform(scrollY, [0, 600], [0, -40]);
  const stickerR = useTransform(scrollY, [0, 600], [0, 8]);

  // Keep your original mask for the BLUE area only
  const sectionVariants: Variants = {
    initial: { opacity: 0, clipPath: "inset(12% 12% 12% 12% round 24px)" },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 24px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Staggered chips
  const list: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  };
  const item: Variants = {
    initial: { y: 16, opacity: 0, scale: 0.98 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 380, damping: 28, mass: 0.7 },
    },
  };

  // Magnetic/tilt hover for each pill
  function useTilt() {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-40, 40], [6, -6]), {
      stiffness: 200,
      damping: 20,
    });
    const ry = useSpring(useTransform(mx, [-40, 40], [-6, 6]), {
      stiffness: 200,
      damping: 20,
    });
    const tz = useSpring(8, { stiffness: 200, damping: 20 });

    function onMove(
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      mx.set(e.clientX - (rect.left + rect.width / 2));
      my.set(e.clientY - (rect.top + rect.height / 2));
    }
    function onLeave() {
      mx.set(0);
      my.set(0);
    }
    return { style: { rotateX: rx, rotateY: ry, z: tz }, onMove, onLeave };
  }

  // X/Twitter share
  const TWEET_TEXT =
    "Beres — the easiest way to run your WhatsApp business. Check this out!";
  const SITE_URL =
    typeof window !== "undefined" ? window.location.href : "https://beres.my";
  const tweetIntent = `https://x.com/intent/tweet?text=${encodeURIComponent(
    TWEET_TEXT
  )}&url=${encodeURIComponent(SITE_URL)}`;

  const buttons = useMemo(
    () => [
      { icon: "/Waitlist.svg", label: "Join the waitlist", as: "button" as const },
      { icon: "/Group134.svg", label: "Tweet about us", as: "a" as const, href: tweetIntent },
      { icon: "/Group.svg", label: "Complete a quick survey with us", as: "a" as const, href: "https://forms.office.com/r/v27frh4uhR" },
      { icon: "/IG.svg", label: "Share our IG post", as: "a" as const, href: "https://www.instagram.com/beres.my/" },
      { icon: "/1to1.svg", label: "One-to-one session", as: "button" as const },
      { icon: "/Sharing.svg", label: "Share with your friends", as: "button" as const },
    ],
    [tweetIntent]
  );

  const handlewaitlistpopup = () => setShowWaitlistPopup(true);

  return (
    <motion.section id="steps" className="bg-white py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Floating sticker */}
        <motion.img
          src="/invoice.svg"
          alt="Invoice"
          className="hidden md:block absolute -top-28 -right-8 h-48 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
          style={{ y: stickerY, rotate: stickerR }}
          animate={{
            scale: [1, 0.9, 1],
            rotate: [0, 0, 40, 40, 0],
            borderRadius: ["0%", "0%", "20%", "20%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

        {/* ===== HEADLINE OUTSIDE THE MASK (cannot be clipped) ===== */}
        <div className="mb-10 md:mb-14 text-left">
          <motion.h2
            className="leading-tight text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E18]"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            With these three simple steps
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-2xl mt-2 text-gray-400"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            Yeah, not kidding.
          </motion.p>
        </div>

        {/* ===== BLUE AREA WITH CLIP-PATH (keeps your reveal effect) ===== */}
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[24px] overflow-hidden"
        >
          {/* Illustrations */}
          <motion.img
            src="/mobilesteps.svg"
            alt="Steps mobile illustration"
            className="mt-6 w-full h-auto md:hidden mx-auto
             min-h-[240px] sm:min-h-[300px] max-h-[65vh] object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            src="/Group164.svg"
            alt="Steps desktop illustration"
            className="mt-6 w-full h-full hidden md:block"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Grid below (unchanged) */}
          <div className="mt-16 grid grid-cols-1 md:[grid-template-columns:2fr_3fr] gap-2">
            {/* LEFT card */}
            <motion.div
              className="rounded-2xl bg-[#08231B] h-40 md:h-[260px] flex items-center justify-center overflow-hidden"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              <img
                src="/Frame8.svg"
                alt="Extra illustration"
                className="h-full w-auto object-contain md:hidden"
              />
              <img
                src="/Beres_dont_rush.png"
                alt="Extra illustration"
                className="h-full w-auto object-contain hidden md:block"
              />
            </motion.div>

            {/* RIGHT card */}
            <motion.div
              className="rounded-2xl bg-[#A7E34A] p-6 md:p-8 flex flex-col md:h-[260px]"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              <h3 className="text-[#0B1E18] font-bold !text-sm md:text-xl mb-4">
                The more you help us, the more{" "}
                <button
                  type="button"
                  onClick={() => setShowPopup(true)}
                  className="underline underline-offset-2 text-[#0B1E18] hover:opacity-80 focus:outline-none !text-sm"
                >
                  rewards
                </button>{" "}
                you get!
              </h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2 pr-2 h-full"
                style={{ scrollbarGutter: "stable" }}
                variants={list}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
              >
                {buttons.map((b, i) => {
                  const tilt = useTilt();
                  const common =
                    "group flex items-center gap-2 rounded-full bg-white px-2 h-10 transition overflow-hidden transform-gpu will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

                  const Inner = (
                    <>
                      <span className="flex items-center justify-center -ml-1 flex-shrink-0">
                        <img
                          src={b.icon}
                          alt=""
                          className={`h-8 w-8 md:h-8 md:w-8 object-contain ${b.label === "Share with your friends" ? "scale-125" : ""
                            }`}
                        />
                      </span>
                      <span className="!text-xs md:text-sm font-semibold text-[#0B1E18] truncate">
                        {b.label}
                      </span>
                    </>
                  );

                  if (b.as === "a") {
                    return (
                      <motion.a
                        key={i}
                        href={(b as any).href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={item}
                        whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 18px rgba(0,0,0,0.18)" }}
                        whileTap={{ scale: 0.98, y: -2 }}
                        onMouseMove={tilt.onMove}
                        onMouseLeave={tilt.onLeave}
                        style={tilt.style}
                        className={common}
                        aria-label={b.label}
                      >
                        {Inner}
                      </motion.a>
                    );
                  }

                  if (b.label === "Join the waitlist") {
                    return (
                      <motion.button
                        key={i}
                        type="button"
                        variants={item}
                        whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 18px rgba(0,0,0,0.18)" }}
                        whileTap={{ scale: 0.98, y: -2 }}
                        onMouseMove={tilt.onMove}
                        onMouseLeave={tilt.onLeave}
                        style={tilt.style}
                        className={common}
                        aria-label={b.label}
                        onClick={handlewaitlistpopup}
                      >
                        {Inner}
                      </motion.button>
                    );
                  }

                  return (
                    <motion.button
                      key={i}
                      type="button"
                      variants={item as Variants}
                      whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 18px rgba(0,0,0,0.18)" }}
                      whileTap={{ scale: 0.98, y: -2 }}
                      onMouseMove={tilt.onMove}
                      onMouseLeave={tilt.onLeave}
                      style={tilt.style}
                      className={common}
                      aria-label={b.label}
                      onClick={() => {
                        if (b.label === "Share with your friends") setShowShare(true);
                        else if (b.label === "One-to-one session") setShowOneToOne(true);
                        else if (b.label === "Tweet about us") window.open(tweetIntent, "_blank", "noopener,noreferrer");
                      }}
                    >
                      {Inner}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <WaitlistPopup
        isOpen={showWaitlistPopup}
        onClose={() => setShowWaitlistPopup(false)}
      />
      {showShare && (
        <ShareModal
          onClose={() => setShowShare(false)}
          shareText="Beres — the easiest way to run your WhatsApp business. Check this out!"
        />
      )}
      {showPopup && <IncentivePopup onClose={() => setShowPopup(false)} />}
      <OneToOnePopup
        isOpen={showOneToOne}
        onClose={() => setShowOneToOne(false)}
      />
    </motion.section>
  );
}
