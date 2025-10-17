"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    id: 0,
    title: "The Intent Signal",
    color: "#012219",
    text: "Customers browse your WhatsApp catalog and tap Add to Cart. This instant action confirms their intent and immediately triggers the automated checkout flow.",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
  },
  {
    id: 1,
    title: "Live Stock Confirmation (Zero Waiting)",
    color: "#AFEB2B",
    text: "The moment an item is added, Beres automatically performs a real-time stock check. No manual checks, no delays, and 'no wait, let me check' messages.",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
  },
  {
    id: 2,
    title: "Secure In-Chat Payment Link",
    color: "#65D546",
    text: "If stock is available, a secure, customized payment link is instantly generated and delivered directly within the WhatsApp chat. Customers can review, click, and pay on the spot—guaranteeing the sale.",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
  },
  {
    id: 3,
    title: "Immediate Out-of-Stock Clarity",
    color: "#AFEB2B",
    text: "If the item is unavailable, the customer receives an immediate Out-of-Stock notification. This complete transparency prevents frustration, eliminates follow-up messages, and keeps customers happy.",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
  },
];

export default function CustomerExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-[#DFF9D7]">
      <div className="px-2">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          For Your Customers Experience: <br />
          <span className="text-[#6CC24A]">
            Smooth, Instant Shopping Experience
          </span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Beres turns your WhatsApp Business account into a high-converting,
          automated sales system eliminating manual inventory checks and payment
          follow-ups.
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-14 text-lg font-semibold">
          {cards.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                swiperRef.current?.slideTo(i, 400);
              }}
              className={`relative transition-all duration-300 px-3 py-1 ${
                activeTab === i
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

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)} // <– keeps tabs synced
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
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => {
                    setActiveTab(idx);
                    swiperRef.current?.slideTo(idx, 300);
                  }}
                  className={`rounded-[2rem] shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "scale-[1.02] ring-4 ring-[#d8ff35]"
                      : "hover:scale-[1.01]"
                  }`}
                  style={{ backgroundColor: card.color }}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <img
                      src={card.image}
                      alt={card.text}
                      className="max-h-[460px] w-auto object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
                    <h3
                      className={`text-2xl md:text-3xl font-extrabold mb-3 ${
                        card.color === "#012219"
                          ? "!text-[#90EE90]"
                          : "!text-[#012219]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-lg md:text-lg mb-3 font-inter ${
                        card.color === "#012219"
                          ? "!text-white"
                          : "!text-[#012219]"
                      }`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows (stay visible) */}
          <div className="flex justify-center mt-10 space-x-3">
            <button
              className="swiper-button-prev-custom bg-[#e5e7eb] hover:bg-[#d1d5db] text-black rounded-lg p-3 transition shadow-md"
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
              className="swiper-button-next-custom bg-[#d8ff35] hover:bg-[#cfff00] text-black rounded-lg p-3 transition shadow-md"
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

      {/* Marker animation */}
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
