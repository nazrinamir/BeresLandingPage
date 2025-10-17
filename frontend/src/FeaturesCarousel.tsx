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
    gradient: "from-blue-400 to-sky-300",
    cards: [
      {
        text: "Choose your spirit animal.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
      },
      {
        text: "Find your mood for today.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
      },
      {
        text: "Pick a superpower that fits.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
      },
      {
        text: "Combine to reveal your energy!",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
      },
    ],
  },
  {
    id: 1,
    title: "Chat Cards",
    gradient: "from-cyan-400 to-sky-300",
    cards: [
      {
        text: "Start a chat about feelings.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
      },
      {
        text: "Discover fun question cards.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
      },
      {
        text: "Share your thoughts freely.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
      },
      {
        text: "Learn to express emotions.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
      },
    ],
  },
  {
    id: 2,
    title: "Listen and relax",
    gradient: "from-pink-400 to-pink-300",
    cards: [
      {
        text: "Close your eyes and listen.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
      },
      {
        text: "Breathe in, breathe out.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
      },
      {
        text: "Focus on calm moments.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
      },
      {
        text: "Feel peaceful energy flow.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
      },
    ],
  },
  {
    id: 3,
    title: "Backed by science",
    gradient: "from-orange-400 to-orange-300",
    cards: [
      {
        text: "Mindfulness research backed.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
      },
      {
        text: "Built with neuroscience input.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
      },
      {
        text: "Trusted by experts globally.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
      },
      {
        text: "Proven to improve focus.",
        image:
          "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
      },
    ],
  },
];

export default function SuperChillSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRefs = useRef<any[]>([]);

  return (
    <section className="py-20 bg-[#fff6e9]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Also waiting for you <br />
          in the <mark className="bg-yellow-300 px-2">app</mark>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-12 text-lg font-semibold">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative transition-all duration-300 px-3 py-1 ${activeTab === i
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-gray-700"
                }`}
            >
              {/* Neon highlighter background */}
              {activeTab === i && (
                <span className="absolute inset-0 bg-[#d8ff35] rounded-sm rotate-[-2deg] z-[-1]" />
              )}
              {s.title}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        {slides.map((slide, i) => (
          <div key={slide.id} className={`${activeTab === i ? "block" : "hidden"}`}>
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                onInit={(swiper) => (swiperRefs.current[i] = swiper)}
                spaceBetween={32}
                slidesPerView={1.1}
                breakpoints={{
                  768: { slidesPerView: 1.5 },
                  1024: { slidesPerView: 2.2 },
                }}
                centeredSlides={false}
                className="overflow-visible"
              >
                {slide.cards.map((card, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className={`rounded-3xl bg-gradient-to-br ${slide.gradient} shadow-md flex flex-row items-center h-[22rem]`}
                    >
                      {/* Image (Left) */}
                      <div className="w-1/2 flex justify-center items-center p-6">
                        <img
                          src={card.image}
                          alt={card.text}
                          className="max-h-56 object-contain"
                        />
                      </div>

                      {/* Text (Right) */}
                      <div className="w-1/2 pr-6 text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-base text-gray-800 leading-relaxed mb-2">
                          {card.text}
                        </p>
                        <a
                          href="#"
                          className="text-gray-900 font-semibold hover:underline"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Centered Arrows */}
              <div className="flex justify-center mt-8 space-x-3">
                <button
                  onClick={() => swiperRefs.current[i]?.slidePrev()}
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
                  onClick={() => swiperRefs.current[i]?.slideNext()}
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
        ))}
      </div>
    </section>
  );
}
