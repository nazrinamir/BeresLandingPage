import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistPopup from "./components/popup/waitlistPopup";
import { SuccessPopup } from "./components/popup/SuccessPopup";

export default function BenefitSection() {
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const cards = [
    { type: "text" }, // first one (no white bg)
    { title: "Save Time, Sell Faster", img: "/savesave.svg" },
    { title: "Run Your Business 24/7", img: "/runbusiness.svg" },
    { title: "No Commission of Each Sales", img: "/commision.svg" },
    { title: "Improve Customer Experience", img: "/improvecustomer.svg" },
    { title: "Simplify Your Operations", img: "/simplifyoperation.svg" },
  ];

  return (
    <>
      <section className="relative bg-[#DFF9D7] py-16 flex flex-col items-center justify-center rounded-b-2xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/Maskgroupbenefit.svg')] bg-cover bg-no-repeat opacity-90"></div>

        {/* === TOP LABEL === */}
        <div className="absolute top-4 sm:top-6 flex justify-center w-full z-20 mt-6 sm:mt-8">
          <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-black text-black font-semibold text-2xl inline-block">
            Benefits
          </div>
        </div>

        {/* === GRID OF 6 CARDS === */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-5 lg:gap-x-4 lg:gap-y-6 w-full max-w-[1150px] px-2 sm:px-4 mt-28 justify-items-center">
          {cards.map((card, i) =>
            card.type === "text" ? (
              // === TEXT CARD (no background) ===
              <div
                key={i}
                className="flex flex-col justify-center items-start text-left w-full max-w-[700px] px-6 sm:px-8 lg:px-12"
              >
                <h3 className="font-extrabold! text-[#012219]! text-[2.5rem]! sm:text-[5.5rem] lg:text-[8rem] leading-[1] mb-5 tracking-tight">
                  Why Business<br />Owners Love<br />Beres
                </h3>

                <p className="text-[#012219]! text-md sm:text-xl lg:text-[1.2rem] leading-relaxed font-medium max-w-[500px] opacity-90">
                  Manage your business with less effort, fewer mistakes, and
                  more time to focus on growth.
                </p>
              </div>
            ) : (
              // === NORMAL CARDS ===
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className="bg-white relative rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex flex-col items-center text-center py-10 sm:py-12 lg:py-14 px-4 sm:px-5 lg:px-6 max-w-[320px] w-full"
              >
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/red-grid-bg.svg')] bg-[length:18px_18px] opacity-25 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none"></div>

                <h3 className="font-semibold text-[#0B1E18] text-lg sm:text-xl mb-5 relative z-10">
                  {card.title}
                </h3>

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] object-contain relative z-10"
                  loading="lazy"
                />
              </motion.div>
            )
          )}
        </div>

        {/* Popups */}
        <WaitlistPopup
          isOpen={showWaitlistPopup}
          onClose={() => setShowWaitlistPopup(false)}
        />
        <SuccessPopup
          isOpen={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
        />
      </section>
    </>
  );
}
