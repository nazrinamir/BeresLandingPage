// components/BenefitSection.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

type Benefit = { title: string; img: string };

export default function BenefitSection() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  const benefits: Benefit[] = [
    { title: t("benefits.items.0"), img: "/StraightfromWhatsApp.svg" },
    { title: t("benefits.items.1"), img: "/OrdersonAutopilot.svg" },
    { title: t("benefits.items.2"), img: "/YourBusiness.svg" },
    { title: t("benefits.items.3"), img: "/Bye-bye.svg" },
    { title: t("benefits.items.4"), img: "/ServeBetter.svg" },
  ];

  const active = hovered ?? selected;

  useEffect(() => {
    if (isPaused || hovered !== null) return;
    const id = setInterval(() => {
      setSelected((prev) => (prev + 1) % benefits.length);
    }, 2200);
    return () => clearInterval(id);
  }, [isPaused, hovered, benefits.length]);

  return (
    <section
      id="benefits"
      className="relative bg-[#F3F4F6] py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.img
        src="/chatbubble.svg"
        alt=""
        className="hidden md:block absolute left-0 top-52 h-48 w-auto drop-shadow-md pointer-events-none select-none ml-16 mt-10"
        animate={{ scale: [1, .9, 1], rotate: [0, 0, 40, 40, 0], borderRadius: ["0%", "0%", "20%", "20%", "0%"] }}
        transition={{ duration: 2, ease: "easeInOut", times: [0, .2, .5, .8, 1], repeat: Infinity, repeatDelay: 1 }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Title + subtitle */}
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
            {t("benefits.title")}
          </h2>
          <p className="text-2xl md:text-3xl mt-1 text-gray-400">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* Content grid */}
        <div className="mx-auto max-w-5xl px-0 md:px-0 flex justify-center">
          <div className="grid md:grid-cols-[360px_380px] gap-x-12 items-start">
            {/* LEFT list */}
            <div className="text-left max-w-[360px]">
              <ul className="space-y-6 max-w-[280px]">
                {benefits.map((b, i) => {
                  const isActive = i === active;
                  const isSelected = i === selected;
                  return (
                    <motion.li
                      key={i}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setSelected(i)}
                      className="cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                      <div
                        className={[
                          "text-[20px] md:text-[22px] whitespace-pre-line",
                          isActive
                            ? "font-extrabold text-[#0B1E18] leading-loosed"
                            : "font-semibold text-[#BFC5CB] leading-loosed",
                        ].join(" ")}
                      >
                        {b.title}
                      </div>
                      {isSelected && (
                        <motion.div
                          layoutId="benefit-underline"
                          className="h-[2px] w-24 bg-[#AEEA30] rounded-full mt-1"
                        />
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT preview */}
            <div className="md:pt-8 flex md:justify-center justify-center w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={benefits[active].img}
                  alt={benefits[active].title}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full md:w-full h-full rounded-2xl border border-[#E6E8EA] shadow-[0_10px_22px_rgba(0,0,0,0.12)] object-contain select-none"
                  draggable={false}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
