"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";
import { useRef, useState } from "react";

type Benefit = {
  title: string;
  desc: string;
  img: string;
  color: string;
  textColor?: string;
};

export default function BenefitSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const BENEFITS: Benefit[] = [
    { title: t("benefits.items.0"), desc: t("benefits1"), img: "", color: "#E9D7FF" },
    { title: t("benefits.items.1"), desc: t("benefits2"), img: "", color: "#FFD6E8" },
    { title: t("benefits.items.2"), desc: t("benefits3"), img: "", color: "#FFF0B3" },
    { title: t("benefits.items.3"), desc: t("benefits4"), img: "", color: "#D6FFE4" },
    { title: t("benefits.items.4"), desc: t("benefits5"), img: "", color: "#D6E8FF" },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      className="relative py-20 select-none overflow-hidden bg-[#FAFAF8]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E18]">
            {t("benefits.title")}
          </h2>
          <p className="text-gray-500 mt-3 text-base md:text-lg">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* ===== Bento Grid ===== */}
        <div
          className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          auto-rows-[220px]
          lg:auto-rows-[260px]
        "
        >
          {/* Large feature card */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-3xl p-8 overflow-hidden shadow-md flex flex-col justify-between"
            style={{ backgroundColor: BENEFITS[0].color }}
          >
            <div className="relative z-10">
              <h3 className="font-bold text-2xl mb-3 leading-snug text-[#111]">
                {BENEFITS[0].title}
              </h3>
              <p className="text-sm md:text-base text-[#333] opacity-80 leading-relaxed">
                {BENEFITS[0].desc}
              </p>
            </div>
            {/* <motion.img
              src={BENEFITS[0].img}
              alt={BENEFITS[0].title}
              className="absolute right-4 bottom-2 w-[70%] max-w-[320px] object-contain drop-shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            /> */}
          </motion.div>

          {/* Remaining cards */}
          {BENEFITS.slice(1).map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl p-6 shadow-md overflow-hidden flex flex-col justify-between"
              style={{ backgroundColor: b.color }}
            >
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 leading-snug text-[#111]">
                  {b.title}
                </h3>
                <p className="text-sm md:text-base text-[#333] opacity-80 leading-relaxed">
                  {b.desc}
                </p>
              </div>
              {/* <motion.img
                src={b.img}
                alt={b.title}
                className="absolute right-3 bottom-2 w-[65%] max-w-[200px] object-contain drop-shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
