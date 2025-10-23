'use client';

import ScrollIndicator from './components/button/ScrollIndicator';

interface HeroSectionProps {
  isLoading?: boolean;
}

const HeroSection = ({ isLoading = false }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#DFF9D7] py-16 md:py-20 text-center overflow-hidden"
    >
      {/* === Bottom Gradient (smooth transition to next section) === */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-[#C8F2A6] to-[#65D546] pointer-events-none"></div>

      {/* === Floating sparkles (optional aesthetic particles) === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* === Content Wrapper === */}
      <div className="relative z-10 container mx-auto max-w-6xl flex flex-col items-center justify-center px-6 md:px-10">
        {/* === Hero Video === */}
        <div
          className="flex flex-col items-center justify-center mb-6 sm:mb-11"
          data-aos="fade-up"
        >
          <video
            src="/heropage.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-[1500px] md:w-[800px] max-w-full transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>

        {/* === Heading === */}
        <div data-aos-delay="100" className="w-full">
          {/* Mobile */}
          <h2 className="!text-[#012219] text-2xl sm:hidden leading-relaxed max-w-[98%] mx-auto mb-4 font-extrabold">
            Don’t Have Time To Reply Each Of Your Potential Sales?
          </h2>

          {/* Desktop */}
          <h1 className="hidden sm:block !text-[#012219] text-5xl md:text-6xl leading-tight max-w-3xl mx-auto mb-4 font-extrabold">
            Don’t Have Time To Reply Each Of Your Potential Sales?
          </h1>
        </div>

        {/* === Subtext === */}
        <p
          className="!text-black text-[0.8rem] sm:text-base md:text-lg leading-relaxed max-w-[92%] sm:max-w-xl md:max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We got you covered. Beres is a tool that simplifies your business
          through one smart dashboard, fully connected to WhatsApp for seamless
          orders, payments, and stock tracking.
        </p>
      </div>

      {/* === Scroll Indicator === */}
      <ScrollIndicator targetId="features" isVisible={!isLoading} />
    </section>
  );
};

export default HeroSection;
