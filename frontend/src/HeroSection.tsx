// components/HeroSection.tsx
import React from 'react';
import MainButton from './components/button/MainButton'

const HeroSection = () => {
  return (
    <section id="home" className="text-white w-full py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Content */}
        <div className="md:w-1/2 w-full mb-12 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#65d546]">Beres</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover how our solution helps you grow faster and operate smarter — with style.
          </p>
          <div className="flex gap-4">
            {/* <MainButton text="Get Started Today" handleClick={() => {}} />
            <button className="text-white border border-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Right GIF or Image */}
        <div className="md:w-1/2 w-full flex justify-center" data-aos="fade-left">
          <div className="rounded-xl overflow-hidden shadow-lg w-[320px] h-[320px] bg-gray-800 flex items-center justify-center">
            <img
              src="/cartoon-dev.svg"
              alt="Cartoon Developer"
              className="w-full h-full object-cover animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
