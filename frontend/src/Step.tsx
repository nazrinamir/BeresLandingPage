// components/FeaturesGrid.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import IncentivePopup from "./components/popup/IncentivePopup";

export default function Step() {
  const [showPopup, setShowPopup] = useState(false);

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
            {/* <div className="rounded-2xl bg-[#A7E34A] p-6 md:p-8 flex flex-col md:h-[260px]">
              <h3 className="text-[#0B1E18] font-bold !text-sm md:text-xl mb-4">
                Feel like helping us? Here are some ways you can. There’s{" "}
                <button
                  type="button"
                  onClick={() => setShowPopup(true)}
                  className="underline underline-offset-2 text-[#0B1E18] hover:opacity-80 focus:outline-none"
                >
                  incentive
                </button>{" "}
                as well!
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
                ].map((b, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    whileHover={pillHover}
                    whileTap={pillTap}
                    transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
                    className="group flex items-center gap-2 rounded-full bg-white px-2 h-10 transition overflow-hidden will-change-transform transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                    aria-label={b.label}
                    onClick={() => {
                      if (b.label === "Join the waitlist") {
                        console.log("Join the waitlist clicked");
                      }
                    }}
                  >
                    <span className="flex items-center justify-center -ml-1 flex-shrink-0">
                      <img
                        src={b.icon}
                        alt=""
                        className={`h-8 w-8 md:h-8 md:w-8 object-contain ${
                          b.label === "Share with your friends" ? "scale-125" : ""
                        }`}
                      />
                    </span>
                    <span className="!text-xs md:text-sm font-semibold text-[#0B1E18] truncate">
                      {b.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div> */}
            {/* Right (tighter top/bottom spacing) */}
            <div className="rounded-2xl bg-[#A7E34A] p-6 md:p-8 shadow-2xl flex flex-col">
              <h3 className="text-[#0B1E18] font-extrabold !text-sm md:text-xl mb-1 md:mb-2">
                The more you help us, the more{" "}
                <button
                  type="button"
                  onClick={() => setShowPopup(true)}
                  className="underline underline-offset-2 text-[#0B1E18] hover:opacity-80 focus:outline-none"
                >
                  rewards
                </button>{" "}
                you get!
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 h-full mt-6">
                {[
                  { icon: "/Waitlist.svg", label: "Join the waitlist" },
                  { icon: "/1to1.svg", label: "One-to-one session" },
                  { icon: "/Group.svg", label: "Complete a quick survey with us" },
                  { icon: "/Sharing.svg", label: "Share with your friends" },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.01, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                    whileTap={{ scale: 0.98, y: -1 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
                    className="flex items-center rounded-full bg-white h-12 px-3 gap-2 overflow-hidden transform-gpu"
                  >
                    {/* Left: icon + label */}
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="flex items-center justify-center -ml-1 flex-shrink-0">
                        <img
                          src={b.icon}
                          alt=""
                          className={`h-9 w-9 md:h-10 md:w-10 object-contain ${b.label === "Share with your friends" ? "scale-110" : ""
                            }`}
                        />
                      </span>
                      <span className="!text-xs md:text-sm font-semibold text-[#0B1E18] truncate">
                        {b.label}
                      </span>
                    </span>

                    {/* CTA capsule (kept snug) */}
                    <button
                      type="button"
                      className="shrink-0 rounded-full bg-[#A7E34A] text-[#0B1E18] !text-[6px] md:!text-xs font-extrabold px-3 py-1 border border-white hover:brightness-105 focus:outline-none ml-2"
                    >
                      Click Here!
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {showPopup && <IncentivePopup onClose={() => setShowPopup(false)} />}
    </section>
  );
}
