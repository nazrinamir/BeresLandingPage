// components/HeroSection.tsx
import MainButton from './components/button/MainButton';
import { useTranslation } from './lang/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="text-white w-full py-20 bg-[#012219]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 md:gap-5 mt-4 w-full">

        {/* Left Content - smaller */}
        <div className="md:w-5/12 w-full mb-12 md:mb-0 md:ml-12 " data-aos="fade-right">
          <div className="max-w-md mx-auto w-full">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <img
                src={'/deal.svg'}
                alt="Deal"
                className="w-[413.53px] h-[300.55px] object-contain"
              />
            </h1>

            {/* Paragraph */}
            <p className="text-lg !text-white mb-8 text-justify">
                {t('hero.description')}
            </p>

            {/* Email Input + Button */}
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow w-full">
              <input
                type="email"
                placeholder={t('hero.emailPlaceholder')}
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-[#AEEA30] text-black font-medium px-6 py-2 mr-1 rounded-full hover:bg-[#9cd426] transition">
                {t('hero.joinUs')}
              </button>
            </div>
          </div>
        </div>

        {/* Right Illustration - bigger */}
        <div className="md:w-7/12 w-full md:flex justify-center hidden " data-aos="fade-left">
          <div className="overflow-hidden w-full h-full flex items-center justify-center">
            <img
              src={'/hero.svg'}
              alt="Hero"
              className="w-[633px] h-[602px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
