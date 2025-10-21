"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

export default function BenefitSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#DFF9D7] py-16 sm:py-24 md:py-36 flex justify-center rounded-b-2xl">
      {/* Floating Rounded Box */}
      <div className="relative flex flex-col xl:flex-row gap-10 sm:gap-14 lg:gap-16 overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-20 shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-[#65D546] max-w-[1280px] w-[92%] md:min-h-[700px]">
        {/* Subtle Background Layer for Craft-style tint */}
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#F4F6F3]" />

        {/* === LEFT TEXT SECTION === */}
        <div className="flex flex-col justify-between flex-1 xl:pr-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {/* <h4 className="text-gray-700 text-sm font-semibold uppercase tracking-wide">
                Plan
              </h4> */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1E18] leading-tight text-left">
                {t("benefits.title")}
              </h3>
              <p className="!text-gray-900 text-base sm:text-lg leading-relaxed text-justify">
                {t("benefits.subtitle")}
              </p>
            </div>
            <button className="bg-[#F8F9F7] hover:bg-[#E8E9E8] font-semibold text-black px-6 py-3 rounded-full shadow-sm w-full sm:w-fit transition-all mt-2">
              Learn more
            </button>
          </div>
        </div>

        {/* === RIGHT CARDS SECTION === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.2fr_1.2fr] gap-6 sm:gap-8 lg:gap-10 flex-[1.3]">
          {[
            { title: " Save Time, Sell Faster", img: "/savetime.svg" },
            { title: "Run your Business 24/7", img: "/runbusiness.svg" },
            { title: "Improve Customer Experience", img: "/improvecustomer.svg" },
            { title: "Simplify Your Operations", img: "/simplifyoperation.svg" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold !text-[1rem] sm:text-xl mb-2 text-[#0B1E18]">
                  {card.title}
                </h3>

                <img
                  src={card.img}
                  alt={card.title}
                  className="mt-4 w-full max-h-40 object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}