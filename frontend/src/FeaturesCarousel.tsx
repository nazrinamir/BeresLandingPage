"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

type Feature = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

const FEATURES: Feature[] = [
  {
    id: 0,
    title: "Accurate Stocks, Guaranteed",
    desc: "Instantly view product availability and stock movement to ensure you’re always ready to fulfil demand.",
    img: "/Group134.svg",
  },
  {
    id: 1,
    title: "Order Management Tracking",
    desc: "Track, fulfil, and reconcile orders in real time for fewer mistakes and faster handovers.",
    img: "/Group161.svg",
  },
  {
    id: 2,
    title: "Sales & Customer Analysis",
    desc: "See trends and KPIs at a glance to improve decisions and marketing ROI.",
    img: "/Group159.svg",
  },
  {
    id: 3,
    title: "Inventory Performance Dashboard",
    desc: "Monitor stock turns, ageing, and alerts in one clean view—no spreadsheets needed.",
    img: "/Group160.svg",
  },
];

export default function FeatureStepsWithCube() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleHover = (i: number) => {
    setActive(i);
    swiperRef.current?.slideToLoop(i, 600);
  };

  return (
    <section className="relative min-h-screen bg-[#DFF9D7] flex flex-col items-center justify-start pt-24 md:pt-32 px-6 md:px-10 overflow-hidden">
      {/* ===== Headline ===== */}
      <div className="text-center mb-14 md:mb-20">
        <div className="inline-block bg-[#E2FBD7] text-[#012219] px-5 py-2 rounded-full border border-[#012219]/20 font-semibold text-sm mb-4">
          Features
        </div>
        <h2 className="!text-[18px] sm:!text-2xl md:!text-4xl font-extrabold text-[#012219] leading-snug">
          Stop Guessing. Start Growing. <br /> Total Control in Real-Time.
        </h2>
      </div>

      {/* ===== DESKTOP (cube untouched) ===== */}
      <div
        className="
          hidden md:grid
          max-w-6xl w-full 
          grid-cols-2 
          gap-10 
          items-center 
          place-items-center
        "
      >
        <div className="w-full max-w-sm text-left">
          <ul className="space-y-6">
            {FEATURES.map((f, i) => {
              const isActive = active === i;
              return (
                <li
                  key={f.id}
                  onMouseEnter={() => handleHover(i)}
                  onClick={() => handleHover(i)}
                  className="cursor-pointer group"
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-full border-2 text-sm font-bold shrink-0 ${isActive
                        ? "bg-[#59cf2b] border-[#59cf2b] text-white"
                        : "bg-white border-[#A3E08B] text-[#012219]"
                        }`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${isActive ? "!text-black" : "text-[#0B1E18]"
                          }`}
                      >
                        {f.title}
                      </p>
                      <p
                        className={`text-sm mt-1 ${isActive
                          ? "opacity-100 text-[#375b4e]"
                          : "opacity-70 text-[#4A4A4A]"
                          }`}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ===== Cube (unchanged) ===== */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.08)] ring-1 ring-white/10" />
          </div>

          <Swiper
            modules={[EffectCube, Autoplay]}
            effect="cube"
            grabCursor
            loop
            speed={1200}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 0,
              shadowScale: 0,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] z-10"
          >
            {FEATURES.map((f) => (
              <SwiperSlide key={f.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="flex md:hidden w-full max-w-sm rounded-3xl overflow-hidden shadow-lg">
        {/* LEFT: vertical image buttons */}
        <div className="w-1/3 bg-white flex flex-col justify-center items-center py-6 space-y-4 rounded-r-3xl">
          {FEATURES.map((f, i) => (
            <motion.button
              key={f.id}
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.95 }}
              className={`w-[65px] h-[65px] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 ${active === i ? "ring-2 ring-[#59CF2B]" : "opacity-70"
                }`}
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-full object-contain"
              />
            </motion.button>
          ))}
        </div>

        {/* RIGHT: title + description only */}
        <div className="flex-1 p-6 flex flex-col justify-center bg-[#DFF9D7]">
          <AnimatePresence mode="wait">
            <motion.div
              key={FEATURES[active].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start w-full"
            >
              <h3 className="text-lg font-bold text-[#012219] mb-2">
                {FEATURES[active].title}
              </h3>
              <p className="text-sm text-[#375B4E] leading-snug">
                {FEATURES[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
