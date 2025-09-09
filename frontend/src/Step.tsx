// components/FeaturesGrid.tsx
import { motion } from "framer-motion";

export default function step() {
  return (
    <section id="steps" className="bg-white py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Floating invoice sticker */}
        <img
          src="/invoice.svg"
          alt="Invoice"
          className="hidden md:block absolute -top-28 -right-8 h-40 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
        />

        {/* Title + subtitle */}
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
            With these three simple steps
          </h2>
          <p className="text-2xl md:text-3xl mt-1 text-gray-400">
            Yeah, not kidding.
          </p>

          {/* Responsive images */}
          {/* Mobile only */}
          <img
            src="/mobilesteps.svg"
            alt="Steps mobile illustration"
            className="mt-6 w-full h-full md:hidden"
          />
          {/* Desktop only */}
          <img
            src="/Group164.svg"
            alt="Steps desktop illustration"
            className="mt-6 w-full h-full hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
