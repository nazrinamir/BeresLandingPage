// components/FeaturesGrid.tsx
import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "All-in-One Dashboard", desc: "Track orders, monitor payments, manage stock, and get analysis. All from one clean dashboard. Everything’s updated in real time so you stay in control.", img: "/Group159.svg" },
  { title: "Real-Time Stock Confirmation", desc: "Automated stock checks on WhatsApp orders. If available, customers instantly get a payment link. If not, they’re notified.", img: "/Group160.svg" },
  { title: "Easy and Safe Transaction", desc: "Smooth and secure checkout so customers can pay with confidence. No complicated steps.", img: "/Group161.svg" },
  { title: "Generated E-Invoice", desc: "Invoices are generated automatically for every order. Just confirm the sale.", img: "/Group162.svg" },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Cart sticker */}
        <img
          src="/cart.svg"
          alt="Cart"
          className="hidden md:block absolute -top-10 right-0 h-32 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] pointer-events-none select-none"
        />

        {/* Title + subtitle */}
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E18]">
            Beres has the features.
          </h2>
          <p className="text-2xl md:text-3xl mt-1 text-gray-400">
            Both familiar and new.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((f, i) => (
            <motion.article
              key={i}
              className="rounded-xl bg-[#F0F0F0] p-5 shadow-sm ring-1 ring-black/5 flex flex-col"
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-[15px] font-extrabold text-[#0B1E18] leading-snug text-left">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A7A82] text-justify">
                {f.desc}
              </p>

              {/* Illustration */}
              <div className="mt-4 h-28 md:h-32 rounded-lg bg-[#0B1E18] flex items-center justify-center overflow-hidden">
                <img src={f.img} alt="" className="w-full h-full object-contain" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
