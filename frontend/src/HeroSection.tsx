// components/HeroSection.tsx
import MainButton from './components/button/MainButton';

const HeroSection = () => {
  return (
    <section id="home" className="text-white w-full py-20 bg-[#012219]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8 mt-4">

        {/* Left Content - smaller */}
        <div className="md:w-5/12 w-full mb-12 md:mb-0" data-aos="fade-right">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 ml-52" >
            <img
              src={'/deal.svg'}
              alt="Deal"
              className="w-[413.53px] h-[300.55px] object-contain"
            />
          </h1>

          {/* Paragraph */}
          <p className="text-lg !text-white mb-8 max-w-md text-justify ml-52">
            From product listing to payment gateway, we simplify the entire
            selling process so you can act like a boss.
          </p>

          {/* Email Input + Button */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow w-full max-w-md ml-52">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#AEEA30] text-black font-medium px-6 py-2 mr-2 rounded-full hover:bg-[#9cd426] transition">
              Join Us
            </button>
          </div>
        </div>

        {/* Right Illustration - bigger */}
        <div className="md:w-7/12 w-full flex justify-center" data-aos="fade-left">
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
