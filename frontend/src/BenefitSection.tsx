import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

export default function BenefitSection() {
  const { t } = useTranslation();

  return (
    <section className="relative  overflow-hidden rounded-b-2xl flex justify-center py-14">
      {/* === GRID BACKGROUND === */}
      <div className="absolute inset-0 bg-[url('/Maskgroupbenefit.svg')] bg-cover bg-no-repeat opacity-90"></div>


      {/* === Top Badge === */}
      <div className="absolute top-6 flex justify-center w-full z-20">
        <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 !text-white font-semibold rounded-full text-lg shadow-sm">
          Benefits
        </div>
      </div>

      {/* === CONTENT WRAPPER === */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center xl:items-start justify-between w-[90%] max-w-[1200px] gap-10 mt-16">

        {/* === LEFT CONTENT === */}
        <div className="flex flex-col justify-center xl:justify-start flex-1 text-left xl:pl-4">
          <h3 className="!font-bold !text-5xl sm:text-5xl leading-[1.15] mb-4 text-[#012219]">
            Why Business<br className="hidden sm:block" /> Owners Love<br className="hidden sm:block" />
            <span className="text-white">Beres</span>
          </h3>

          <p className="!text-[#012219] text-base sm:text-lg leading-relaxed max-w-sm mb-8 text-justify">
            Manage your business with less effort, fewer mistakes, and more time to focus on growth.
          </p>

          <button className="bg-[#012219] text-[#AFEB2B] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#023524] transition-all w-fit">
            Join the waitlist now
          </button>
        </div>

        {/* === RIGHT CARDS GRID === */}
        <div className="flex-1 flex justify-end w-full translate-x-6 sm:translate-x-10 md:translate-x-14 lg:translate-x-16 xl:translate-x-20">
          <div className="grid grid-cols-2 gap-8 xl:gap-10 w-full max-w-[900px] xl:max-w-[980px]">
            {[
              { title: "Save Time, Sell Faster", img: "/savetime.svg" },
              { title: "Run Your Business 24/7", img: "/runbusiness.svg" },
              { title: "Improve Customer Experience", img: "/improvecustomer.svg" },
              { title: "Simplify Your Operations", img: "/simplifyoperation.svg" },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="bg-white relative rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center py-12 px-10 scale-x-110"
              >
                {/* Red Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/red-grid-bg.svg')] bg-[length:24px_24px] opacity-25 rounded-[2rem] pointer-events-none"></div>

                <h3 className="font-semibold text-[#0B1E18] text-xl md:text-2xl mb-6 relative z-10 leading-snug">
                  {card.title}
                </h3>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full max-w-[320px] sm:max-w-[360px] object-contain relative z-10"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
