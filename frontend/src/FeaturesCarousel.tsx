// components/FeaturesGrid.tsx
import React, { useMemo, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

export default function FeaturesGrid() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(v => !v);

  const items = [
    { title: t('features.items.0.title'), desc: t('features.items.0.description'), img: "/Group159.svg" },
    { title: t('features.items.1.title'), desc: t('features.items.1.description'), img: "/Group160.svg" },
    { title: t('features.items.2.title'), desc: t('features.items.2.description'), img: "/Group161.svg" },
    { title: t('features.items.3.title'), desc: t('features.items.3.description'), img: "/Group162.svg" },
  ];

  const stackPose = useMemo(
    () => ([
      { x: -10, y: -10, r: -6, s: 1.0 },
      { x: 8, y: -4, r: 4, s: 0.98 },
      { x: -6, y: 8, r: -2, s: 0.96 },
      { x: 12, y: 12, r: 7, s: 0.94 },
    ].slice(0, items.length)),
    [items.length]
  );

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 260, damping: 24 }}>
      <section className="bg-white py-20 ">
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 ">
          <motion.img
            src="/cart.svg"
            alt="Cart"
            className="hidden md:block absolute -top-10 right-0 h-48 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
            animate={{ scale: [1, .9, 1], rotate: [0, 0, 40, 40, 0], borderRadius: ["0%", "0%", "20%", "20%", "0%"] }}
            transition={{ duration: 2, ease: "easeInOut", times: [0, .2, .5, .8, 1], repeat: Infinity, repeatDelay: 1 }}
          />

          <div className="mb-10 md:mb-14 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
              {t('features.title')}
            </h2>
            <p className="text-2xl md:text-3xl mt-1 text-gray-400">
              {t('features.subtitle')}
            </p>
          </div>

          <motion.div layout className="relative mx-auto">
            <div
              className={expanded ? "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" : "relative mx-auto max-w-[720px] min-h-[420px] sm:min-h-[520px] flex items-center justify-center"}>
              {items.map((f, i) => {
                const pose = stackPose[i] ?? { x: 0, y: 0, r: 0, s: 1 };
                return (
                  <motion.article
                    key={i}
                    layout
                    onClick={toggle}
                    className={[
                      "rounded-xl bg-[#F0F0F0] p-5 shadow-sm ring-1 ring-black/5 flex flex-col cursor-pointer",
                      expanded
                        ? "static"
                        : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[680px] sm:w-[560px]"
                    ].join(" ")}
                    style={expanded ? { transformOrigin: "center" } : { zIndex: items.length - i }}
                    initial={false}
                    animate={
                      expanded
                        ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }
                        : { x: pose.x, y: pose.y, rotate: pose.r, scale: pose.s, opacity: 1 }
                    }
                    whileHover={
                      expanded
                        ? { y: -10, scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.25)" }
                        : { scale: pose.s + 0.02 }
                    }
                  >
                    {/* 🔽 Card content */}
                    <h3 className="text-[15px] font-extrabold text-[#0B1E18] leading-snug text-left">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed !text-[#4A4A4A] text-justify">
                      {f.desc}
                    </p>
                    <div className="mt-4 h-28 md:h-32 rounded-lg bg-[#0B1E18] flex items-center justify-center overflow-hidden">
                      <img src={f.img} alt="" className="w-full h-full object-contain" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
