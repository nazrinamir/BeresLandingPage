// components/FeaturesGrid.tsx
import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion, MotionConfig, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

// Simple media query hook (safe on SSR because it runs in useEffect)
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

export default function FeaturesGrid() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(v => !v);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const prefersReduced = useReducedMotion();

  // Softer spring (mobile even softer)
  const spring = prefersReduced
    ? { duration: 0 }
    : (isMobile
        ? { type: "spring" as const, stiffness: 120, damping: 30, mass: 1.0 }
        : { type: "spring" as const, stiffness: 180, damping: 26, mass: 0.9 });

  // Observe section visibility
  const sectionRef = useRef<HTMLElement | null>(null);

  // Desktop: live in-view
  const inViewDesktop = useInView(sectionRef, { amount: 0.35, margin: "0px 0px -15% 0px" });

  // Mobile: expand once (avoid ping-pong)
  const inViewMobileOnce = useInView(sectionRef, { amount: 0.2, margin: "0px 0px -40% 0px", once: true });

  useEffect(() => {
    if (isMobile) {
      if (inViewMobileOnce) setExpanded(true);
    } else {
      const id = window.setTimeout(() => setExpanded(inViewDesktop), 90); // debounce a little
      return () => window.clearTimeout(id);
    }
  }, [isMobile, inViewDesktop, inViewMobileOnce]);

  const items = [
    { title: t('features.items.0.title'), desc: t('features.items.0.description'), img: "/Group159.svg" },
    { title: t('features.items.1.title'), desc: t('features.items.1.description'), img: "/Group160.svg" },
    { title: t('features.items.2.title'), desc: t('features.items.2.description'), img: "/Group161.svg" },
    { title: t('features.items.3.title'), desc: t('features.items.3.description'), img: "/Group162.svg" },
  ];

  // Stack offsets
  const stackPose = useMemo(
    () => ([
      { x: -10, y: -10, r: -6, s: 1.0 },
      { x:   8, y:  -4, r:  4, s: 0.98 },
      { x:  -6, y:   8, r: -2, s: 0.96 },
      { x:  12, y:  12, r:  7, s: 0.94 },
    ].slice(0, items.length)),
    [items.length]
  );

  // ---------- MOBILE HEIGHT LOCK (pre-measure grid height) ----------
  const gridProbeRef = useRef<HTMLDivElement | null>(null);
  const [gridHeight, setGridHeight] = useState<number>(520); // sensible fallback

  useLayoutEffect(() => {
    if (!isMobile) return; // only needed on mobile
    const el = gridProbeRef.current;
    if (!el) return;

    // measure immediately
    setGridHeight(el.getBoundingClientRect().height);

    // keep up-to-date if fonts/images load
    const ro = new ResizeObserver(() => {
      setGridHeight(el.getBoundingClientRect().height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile, items.length]);
  // ------------------------------------------------------------------

  return (
    <MotionConfig transition={spring}>
      <section ref={sectionRef} className="bg-white py-20">
        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <motion.img
            src="/cart.svg"
            alt="Cart"
            className="hidden md:block absolute -top-10 right-0 h-48 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
            animate={{ scale: [1,.9,1], rotate: [0,0,40,40,0], borderRadius: ["0%","0%","20%","20%","0%"] }}
            transition={{ duration: 2, ease: "easeInOut", times: [0,.2,.5,.8,1], repeat: Infinity, repeatDelay: 1 }}
          />

          <div className="mb-10 md:mb-14 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
              {t('features.title')}
            </h2>
            <p className="text-2xl md:text-3xl mt-1 text-gray-400">
              {t('features.subtitle')}
            </p>
          </div>

          {/* Invisible probe: measures the final grid height on mobile */}
          {isMobile && (
            <div
              ref={gridProbeRef}
              aria-hidden
              className="absolute -left-[9999px] -top-[9999px] w-full"
            >
              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                {items.map((f, i) => (
                  <div key={`probe-${i}`} className="rounded-xl bg-[#F0F0F0] p-5">
                    <div className="h-28 rounded-lg bg-[#0B1E18]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <motion.div layout={!isMobile} className="relative mx-auto">
            <div
              className={
                expanded
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
                  : "relative mx-auto max-w-[720px] flex items-center justify-center"
              }
              // Lock min-height on mobile to the grid height to prevent jump → no inView thrash
              style={isMobile ? { minHeight: gridHeight } : { minHeight: expanded ? undefined : 520 }}
            >
              {items.map((f, i) => {
                const pose = stackPose[i] ?? { x: 0, y: 0, r: 0, s: 1 };
                return (
                  <motion.article
                    key={i}
                    layout={!isMobile} // disable layout on mobile
                    onClick={toggle}
                    className={[
                      "rounded-xl bg-[#F0F0F0] p-5 shadow-sm ring-1 ring-black/5 flex flex-col",
                      "cursor-pointer transform-gpu will-change-transform",
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
                      !isMobile && !prefersReduced
                        ? (expanded
                            ? { y: -6, scale: 1.02, boxShadow: "0 15px 25px rgba(0,0,0,0.22)" }
                            : { scale: pose.s + 0.015 })
                        : undefined
                    }
                  >
                    <h3 className="text-[15px] font-extrabold text-[#0B1E18] leading-snug text-left">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed !text-[#4A4A4A] text-justify">
                      {f.desc}
                    </p>
                    <div className="mt-4 h-28 md:h-32 rounded-lg bg-[#0B1E18] flex items-center justify-center overflow-hidden">
                      <img src={f.img} alt="" className="w-full h-full object-contain pointer-events-none select-none" />
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
