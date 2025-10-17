"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 0,
    title: "Animals and superpowers",
    gradient: "from-blue-300 to-sky-200",
    cards: [
      {
        text: "Choose your spirit animal.",
        image:
          "",
      },
      {
        text: "Find your mood for today.",
        image:
          "",
      },
      {
        text: "Pick a superpower that fits.",
        image:
          "",
      },
      {
        text: "Combine to reveal your energy!",
        image:
          "",
      },
    ],
  },
  {
    id: 1,
    title: "Chat Cards",
    gradient: "from-cyan-300 to-sky-200",
    cards: [
      {
        text: "Start a chat about feelings.",
        image:
          "",
      },
      {
        text: "Discover fun question cards.",
        image:
          "",
      },
      {
        text: "Share your thoughts freely.",
        image:
          "",
      },
      {
        text: "Learn to express emotions.",
        image:
          "",
      },
    ],
  },
  {
    id: 2,
    title: "Listen and relax",
    gradient: "from-pink-300 to-pink-200",
    cards: [
      {
        text: "Close your eyes and listen.",
        image:
          "",
      },
      {
        text: "Breathe in, breathe out.",
        image:
          "",
      },
      {
        text: "Focus on calm moments.",
        image:
          "",
      },
      {
        text: "Feel peaceful energy flow.",
        image:
          "",
      },
    ],
  },
  {
    id: 3,
    title: "Backed by science",
    gradient: "from-green-300 to-green-200",
    cards: [
      {
        text: "Mindfulness research backed.",
        image:
          "",
      },
      {
        text: "Built with neuroscience input.",
        image:
          "",
      },
      {
        text: "Trusted by experts globally.",
        image:
          "",
      },
      {
        text: "Proven to improve focus.",
        image:
          "",
      },
    ],
  },
];

export default function SuperChillSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCardIndices, setActiveCardIndices] = useState([0, 0, 0, 0]); // Track card index for each tab
  const swiperRef = useRef<any>(null);

  const handleCardNavigation = (tabIndex: number, direction: 'prev' | 'next') => {
    setActiveCardIndices(prev => {
      const newIndices = [...prev];
      const currentSlide = slides[tabIndex];
      
      if (direction === 'prev') {
        newIndices[tabIndex] = newIndices[tabIndex] === 0 
          ? currentSlide.cards.length - 1 
          : newIndices[tabIndex] - 1;
      } else {
        newIndices[tabIndex] = newIndices[tabIndex] === currentSlide.cards.length - 1 
          ? 0 
          : newIndices[tabIndex] + 1;
      }
      
      return newIndices;
    });
  };

  return (
    <section className="py-20 bg-[#DFF9D7]">
      <div className="px-2">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          Feature
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-14 text-lg font-semibold">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                swiperRef.current?.slideTo(i, 300);
              }}
              className={`relative transition-all duration-300 px-3 py-1 ${
                activeTab === i
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-[4px] bottom-0 bg-[#d8ff35] rounded-sm rotate-[-2deg] z-0 block" />
              )}
              <span className="relative z-[1]">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Slider with all 4 cards visible */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={32}
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            centeredSlides={true}
            className="overflow-visible"
          >
            {slides.map((slide, idx) => {
              const currentCardIndex = activeCardIndices[idx];
              const currentCard = slide.cards[currentCardIndex];
              
              return (
                <SwiperSlide key={idx}>
                  <div
                    onClick={() => {
                      setActiveTab(idx);
                      swiperRef.current?.slideTo(idx, 300);
                    }}
                    className={`rounded-[2rem] bg-gradient-to-br ${slide.gradient} shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 transition-all duration-300 cursor-pointer relative ${
                      activeTab === idx ? "scale-[1.02] ring-4 ring-[#d8ff35]" : "hover:scale-[1.01]"
                    }`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                      <img
                        src={currentCard.image}
                        alt={currentCard.text}
                        className="max-h-72 w-auto object-contain"
                      />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-3 font-inter">
                        {currentCard.text}
                      </p>
                    </div>

                    {/* Internal Navigation Arrows */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardNavigation(idx, 'prev');
                        }}
                        className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 transition shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a.75.75 0 0 1 .53 1.28L10.06 12l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 .53-.22z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardNavigation(idx, 'next');
                        }}
                        className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 transition shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.25 4.5a.75.75 0 0 0-.53 1.28L13.94 12l-6.22 6.22a.75.75 0 0 0 1.06 1.06l6.75-6.75a.75.75 0 0 0 0-1.06L8.78 4.72a.75.75 0 0 0-.53-.22z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Card Indicator */}
                    <div className="absolute top-4 right-4 bg-white/80 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                      {currentCardIndex + 1}/{slide.cards.length}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Main Navigation Arrows */}
          <div className="flex justify-center mt-10 space-x-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-black rounded-lg p-3 transition shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a.75.75 0 0 1 .53 1.28L10.06 12l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 .53-.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#d8ff35] hover:bg-[#cfff00] text-black rounded-lg p-3 transition shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 4.5a.75.75 0 0 0-.53 1.28L13.94 12l-6.22 6.22a.75.75 0 0 0 1.06 1.06l6.75-6.75a.75.75 0 0 0 0-1.06L8.78 4.72a.75.75 0 0 0-.53-.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Marker Animation */}
      <style jsx>{`
        @keyframes markerSwipe {
          from {
            transform: scaleX(0) rotate(-2deg);
            opacity: 0.4;
          }
          to {
            transform: scaleX(1) rotate(-2deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
