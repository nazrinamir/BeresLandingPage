// components/FeaturesGrid.tsx
"use client";

import React, { useMemo, useState } from "react";
import {
  // motion,
  // useScroll,
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
  // const { scrollY } = useScroll();
  // const stickerY = useTransform(scrollY, [0, 600], [0, -40]);
  // const stickerR = useTransform(scrollY, [0, 600], [0, 8]);

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
    <div className="relative py-4 sm:py-6 md:py-8 bg-[#DFF9D7]" id="steps">
      {/* Card container - responsive height and padding */}
      <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]">
        <div className="bg-[url('/Maskgroup.svg')] bg-cover bg-center rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 max-w-4xl mx-3 sm:mx-4 md:mx-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !text-black mb-6 sm:mb-8 md:mb-10 !font-bold leading-tight">
              Scrolling For More Information?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl !text-black mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto !font-semibold leading-relaxed px-2"    style={{ fontFamily: "var(--font-inter)" }}>
              There’s more to come! Be the first to gain exclusive news from Beres by joining the waitlist now.
            </p>
            <button
              type="button"
              onClick={() => setShowWaitlistPopup(true)}
              className="!bg-[#012219] hover:bg-[#0F2418] !text-[#AFEB2B] font-medium 
             text-sm sm:text-base md:text-lg lg:text-xl 
             px-6 sm:px-8 md:px-10 lg:px-12 
             py-3 sm:py-4 md:py-5 
             rounded-full transition-all duration-200 
             shadow-lg hover:shadow-xl 
             w-full sm:w-auto mx-auto lg:mx-0"
            >
              Get early access
            </button>
          </div>
        </div>
      </div>

      {/* POPUPS */}
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
    </div>
  );
}
