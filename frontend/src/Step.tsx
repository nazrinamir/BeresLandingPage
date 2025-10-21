// components/FeaturesGrid.tsx
"use client";

import React, { useMemo, useState } from "react";
import {
  motion,
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
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      {/* Main green card container - made much bigger */}
      <div className="w-full max-w-6xl bg-[#A7F03D] rounded-3xl p-16 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #8ECF33 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Abstract curved line graphic */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20 80 Q50 20 80 80"
              stroke="#8ECF33"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-[#222222] mb-8">
            Join the Beres waitlist today!
          </h2>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-[#222222] mb-16 max-w-3xl mx-auto">
            and be part of Malaysia's first WhatsApp automation platform
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => setShowWaitlistPopup(true)}
            className="bg-[#1A361A] hover:bg-[#0F2418] text-white font-medium text-xl px-12 py-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join the waitlist now
          </button>
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
