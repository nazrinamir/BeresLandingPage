import { motion } from "framer-motion";
import { useState } from "react";
// import { useTranslation } from "./lang/useTranslation";
import WaitlistPopup from "./components/popup/waitlistPopup";
import { SuccessPopup } from "./components/popup/SuccessPopup";

export default function BenefitSection() {
  // const { t } = useTranslation();
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // const handleWaitlistSuccess = () => {
  //   setShowWaitlistPopup(false);
  //   setShowSuccessPopup(true);
  // };

  return (
    <>
      <section className="relative bg-[#DFF9D7] py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center rounded-b-2xl">
        {/* === GRID BACKGROUND === */}
        <div className="absolute inset-0 bg-[url('/Maskgroupbenefit.svg')] bg-cover bg-no-repeat opacity-90"></div>
        <div className="absolute top-4 sm:top-6 flex justify-center w-full z-20 mt-8">
          <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border !border-black !text-black font-semibold text-2xl inline-block">
            Benefits
          </div>
        </div>

        {/* === CONTENT WRAPPER === */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-[95%] sm:w-[90%] max-w-[1200px] gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-14 lg:mt-16">

          {/* === LEFT CONTENT === */}
          <div className="flex flex-col justify-center lg:justify-start flex-1 text-center lg:text-left lg:pl-4 mt-0 lg:mt-36">
            <h3 className="!font-bold !text-5xl sm:text-4xl lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] mb-5 text-[#012219]">
              Why Business<br className="hidden sm:block" /> Owners Love<br className="hidden sm:block" /> Beres
            </h3>

            <p className="!text-[#012219] text-base sm:text-lg lg:text-[1.3rem] xl:text-[1.5rem] leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 text-justify lg:text-left font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              Manage your business with less effort, fewer mistakes, and more time to focus on growth.
            </p>

            <button
              onClick={() => setShowWaitlistPopup(true)}
              className="bg-[#012219] text-[#AFEB2B] font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full shadow-lg hover:bg-[#023524] transition-all w-fit mx-auto lg:mx-0 text-base sm:text-lg"
            >
              Join the waitlist
            </button>
          </div>

          {/* === RIGHT CARDS GRID === */}
          <div className="flex-1 flex justify-center lg:justify-end w-full mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 !gap-4 !sm:gap-6 !lg:gap-8 !xl:gap-10 w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[980px]">
              {[
                { title: "Save Time, Sell Faster", img: "/save.svg" },
                { title: "Run Your Business 24/7", img: "/runbusiness.svg" },
                { title: "Improve Customer Experience", img: "/improvecustomer.svg" },
                { title: "Simplify Your Operations", img: "/simplifyoperation.svg" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white relative rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex flex-col items-center text-center py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-7"
                >
                  {/* Red Grid Overlay */}
                  <div className="absolute inset-0 bg-[url('/red-grid-bg.svg')] bg-[length:16px_16px] sm:bg-[length:20px_20px] lg:bg-[length:24px_24px] opacity-25 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none"></div>

                  <h3 className="font-semibold text-[#0B1E18] !text-lg !sm:text-xl !lg:text-xl mb-4 sm:mb-5 lg:mb-6 relative z-10 leading-snug">
                    {card.title}
                  </h3>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[360px] object-contain relative z-10"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Waitlist Popup */}
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
