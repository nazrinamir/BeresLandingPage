"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 0,
    title: "Sync Once. Stay Perfect. Forever.",
    gradient: "from-blue-300 to-sky-200",
    cards: [
      { text: "Choose your spirit animal.", image: "" },
      { text: "Find your mood for today.", image: "" },
      { text: "Pick a superpower that fits.", image: "" },
      { text: "Combine to reveal your energy!", image: "" },
    ],
  },
  {
    id: 1,
    title: "The Inventory Guarantee.",
    gradient: "from-cyan-300 to-sky-200",
    cards: [
      { text: "Start a chat about feelings.", image: "" },
      { text: "Discover fun question cards.", image: "" },
      { text: "Share your thoughts freely.", image: "" },
      { text: "Learn to express emotions.", image: "" },
    ],
  },
  {
    id: 2,
    title: "The Instant 'Paid' Notification You Love",
    gradient: "from-pink-300 to-pink-200",
    cards: [
      { text: "Close your eyes and listen.", image: "" },
      { text: "Breathe in, breathe out.", image: "" },
      { text: "Focus on calm moments.", image: "" },
      { text: "Feel peaceful energy flow.", image: "" },
    ],
  },
  {
    id: 3,
    title: "Real-Time Sales Notification",
    gradient: "from-green-300 to-green-200",
    cards: [
      { text: "Mindfulness research backed.", image: "" },
      { text: "Built with neuroscience input.", image: "" },
      { text: "Trusted by experts globally.", image: "" },
      { text: "Proven to improve focus.", image: "" },
    ],
  },
];

export default function SuperChillSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCardIndices, setActiveCardIndices] = useState([0, 0, 0, 0]);
  const swiperRef = useRef(null);

  const handleCardNavigation = (tabIndex, direction) => {
    setActiveCardIndices((prev) => {
      const newIndices = [...prev];
      const currentSlide = slides[tabIndex];

      if (direction === "prev") {
        newIndices[tabIndex] =
          newIndices[tabIndex] === 0
            ? currentSlide.cards.length - 1
            : newIndices[tabIndex] - 1;
      } else {
        newIndices[tabIndex] =
          newIndices[tabIndex] === currentSlide.cards.length - 1
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
        <div className="inline-block bg-[#E2FBD7] text-[#012219] px-5 py-2 rounded-full border border-[#012219]/20 font-semibold text-2xl mb-6">
          Features
        </div>
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl !font-bold leading-tight mb-8 !text-[#012219]">
          For Your Business : <br />
          <span className="text-[#012219]">
            UNLEASH YOUR SCALE: Automation That Runs Your Store While You Sleep.
          </span>
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
              className={`relative transition-all duration-300 px-3 py-1 ${activeTab === i
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-700"
                }`}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-[4px] bottom-0 bg-[#d8ff35] rounded-sm rotate-[-2deg] z-0 block animate-[markerSwipe_0.3s_ease]" />
              )}
              <span className="relative z-[1]">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)} // sync tabs
            spaceBetween={32}
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            centeredSlides
            grabCursor
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
                    className={`rounded-[2rem] bg-gradient-to-br ${slide.gradient} shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 transition-all duration-300 cursor-pointer relative ${activeTab === idx
                      ? "scale-[1.02] ring-4 ring-[#d8ff35]"
                      : "hover:scale-[1.01]"
                      }`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                      <img
                        src={currentCard.image || "https://via.placeholder.com/400x300"}
                        alt={currentCard.text}
                        className="max-h-[450px] w-auto object-contain"
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

                    {/* Card Navigation Arrows */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardNavigation(idx, "prev");
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
                          handleCardNavigation(idx, "next");
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
            <button className="swiper-prev-btn bg-[#e5e7eb] hover:bg-[#d1d5db] text-black rounded-lg p-3 transition shadow-md">
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

            <button className="swiper-next-btn bg-[#d8ff35] hover:bg-[#cfff00] text-black rounded-lg p-3 transition shadow-md">
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
