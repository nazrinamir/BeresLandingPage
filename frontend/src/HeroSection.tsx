'use client';

import { useState, useEffect } from 'react';
import ScrollIndicator from './components/button/ScrollIndicator';

interface HeroSectionProps {
  isLoading?: boolean;
}

const HeroSection = ({ isLoading = false }: HeroSectionProps) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full bg-[#DFF9D7] py-16 md:py-20 text-center"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `
      radial-gradient(
        500px at ${mousePos.x}% ${mousePos.y}%,
        rgba(255, 255, 150, 0.45) 0%,
        rgba(201, 255, 100, 0.35) 25%,
        rgba(155, 255, 130, 0.25) 50%,
        rgba(120, 240, 100, 0.10) 80%,
        rgba(255,255,255,0) 100%
      )
    `,
          transition: 'background-position 0.2s ease-out',
        }}
      ></div>

      {/* Floating sparkles (optional) */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl flex flex-col items-center justify-center px-6 md:px-10">
        {/* WhatsApp Mock Messages */}
        <div
          className="flex flex-col items-center justify-center mb-6 sm:mb-11"
          data-aos="fade-up"
        >
          <img
            src="/Heropage.gif"
            alt="Join the waitlist"
            className="w-[1500px] md:w-[800px] max-w-full drop-shadow-[0_12px_36px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        {/* Heading — Responsive H1/H2 */}
        <div data-aos-delay="100" className="w-full">
          {/* Mobile */}
          <h2 className="!text-[#012219] text-2xl sm:hidden leading-relaxed max-w-[98%] mx-auto mb-4 font-extrabold">
            Don't have time to reply each of your potential sales?
          </h2>

          {/* Desktop */}
          <h1 className="hidden sm:block !text-[#012219] text-5xl md:text-6xl leading-tight max-w-3xl mx-auto mb-4 font-extrabold">
            Don't have time to reply each of your potential sales?
          </h1>
        </div>

        {/* Subtext */}
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

      <ScrollIndicator targetId="features" isVisible={!isLoading} />
    </section>
  );
};

export default HeroSection;
