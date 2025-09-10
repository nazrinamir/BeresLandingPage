// components/FeaturesGrid.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import IncentivePopup from "./components/popup/IncentivePopup";
import ShareModal from "./components/popup/ShareModal";
import OneToOnePopup from "./components/popup/OneToOnePopup";

export default function Step() {
  const [showPopup, setShowPopup] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showOneToOne, setShowOneToOne] = useState(false);

  // Hover/tap animations (no X shift to avoid horizontal scroll)
  const pillHover = {
    y: -6,
    scale: 1.03,
    boxShadow: "0 10px 18px rgba(0,0,0,0.18)",
  };
  const pillTap = { scale: 0.98, y: -2 };

  return (
    <section id="steps" className="bg-white py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <img
          src="/invoice.svg"
          alt="Invoice"
          className="hidden md:block absolute -top-28 -right-8 h-48 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
        />

        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
            With these three simple steps
          </h2>
          <p className="text-2xl md:text-3xl mt-1 text-gray-400">Yeah, not kidding.</p>

          {/* Mobile only */}
          <img src="/mobilesteps.svg" alt="Steps mobile illustration" className="mt-6 w-full h-full md:hidden" />
          {/* Desktop only */}
          <img src="/Group164.svg" alt="Steps desktop illustration" className="mt-6 w-full h-full hidden md:block" />

          <div className="mt-20 grid grid-cols-1 md:[grid-template-columns:2fr_3fr] gap-2">
            {/* Left */}
            <div className="rounded-2xl bg-[#08231B] md:h-[260px] flex items-center justify-center overflow-hidden">
              <img src="/Frame8.svg" alt="Extra illustration" className="w-full h-full object-contain" />
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-[#A7E34A] p-6 md:p-8 flex flex-col md:h-[260px]">
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

              <div
                className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2 pr-2 h-full"
                style={{ scrollbarGutter: "stable" }}
              >
                {[
                  { icon: "/Waitlist.svg", label: "Join the waitlist" },
                  { icon: "/Group134.svg", label: "Tweet about us" },
                  { icon: "/Group.svg", label: "Complete a quick survey with us" },
                  { icon: "/IG.svg", label: "Share our IG post" },
                  { icon: "/1to1.svg", label: "One-to-one session" },
                  { icon: "/Sharing.svg", label: "Share with your friends" },
                ].map((b, i) => {
                  const isSurvey = b.label === "Complete a quick survey with us";
                  const isShare = b.label === "Share with your friends";
                  const isIG = b.label === "Share our IG post";

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

                  if (isSurvey) {
                    return (
                      <motion.a
                        key={i}
                        href="https://forms.office.com/r/v27frh4uhR"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={pillHover}
                        whileTap={pillTap}
                        transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
                        className="group flex items-center gap-2 rounded-full bg-white px-2 h-10 transition overflow-hidden will-change-transform transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                        aria-label={b.label}
                      >
                        {Inner}
                      </motion.a>
                    );
                  }

                  if (isIG) {
                    return (
                      <motion.a
                        key={i}
                        href="https://www.instagram.com/beres.my/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={pillHover}
                        whileTap={pillTap}
                        transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
                        className="group flex items-center gap-2 rounded-full bg-white px-2 h-10 transition overflow-hidden will-change-transform transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                        aria-label={b.label}
                      >
                        {Inner}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.button
                      key={i}
                      type="button"
                      whileHover={pillHover}
                      whileTap={pillTap}
                      transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
                      className="group flex items-center gap-2 rounded-full bg-white px-2 h-10 transition overflow-hidden will-change-transform transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                      aria-label={b.label}
                      onClick={() => {
                        if (isShare) {
                          setShowShare(true);
                        } else if (b.label === "One-to-one session") {
                          setShowOneToOne(true);
                        } else if (b.label === "Join the waitlist") {
                          console.log("Join the waitlist clicked");
                        } else if (b.label === "Tweet about us") {
                          console.log("Tweet about us clicked");
                        }
                      }}
                    >
                      {Inner}
                    </motion.button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modals (render ONCE, outside the map) */}
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
    </section>
  );
}
