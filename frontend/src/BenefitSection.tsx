import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

export default function BenefitSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#DFF9D7] py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center rounded-b-2xl">
      {/* Floating Green Box */}
      <div className="relative flex flex-col xl:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-[#65D546] max-w-[1200px] w-[95%] md:min-h-[600px]">
        {/* Background tint layer */}
        <div className="absolute inset-0 -z-10 rounded-[1.5rem] sm:rounded-[2rem] bg-[#F4F6F3]" />

        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col justify-center flex-[0.9] xl:pr-6">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <h3 className="!text-3xl sm:text-4xl lg:text-5xl !font-bold !text-white leading-tight text-left">
              {t("benefits.title")}
            </h3>
            <p className="!text-white text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
              {t("benefits.subtitle")}
            </p>
          </div>
        </div>

        {/* RIGHT CARDS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-[1.5] h-full">
          {[
            { title: "Save Time, Sell Faster", img: "/savetime.svg" },
            { title: "Run Your Business 24/7", img: "/runbusiness.svg" },
            { title: "Improve Customer Experience", img: "/improvecustomer.svg" },
            { title: "Simplify Your Operations", img: "/simplifyoperation.svg" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[1rem] sm:rounded-[1.25rem] lg:rounded-[1.5rem] p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-5 lg:mb-6 text-[#0B1E18]">
                  {card.title}
                </h3>
                <img
                  src={card.img}
                  alt={card.title}
                  className="mt-2 w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[240px] object-contain"
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