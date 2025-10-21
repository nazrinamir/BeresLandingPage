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
    image: "/intentsignal.gif",
  },
  {
    id: 1,
    title: "Live Stock Confirmation (Zero Waiting)",
    color: "#AFEB2B",
    text: "The moment an item is added, Beres automatically performs a real-time stock check. No manual checks, no delays, and no 'wait, let me check' messages.",
    image: "/livestock.svg",
  },
  {
    id: 2,
    title: "Secure, In-Chat Payment Link",
    color: "#65D546",
    text: "If stock is available, a secure, customized payment link is instantly generated and delivered directly within the WhatsApp chat. Customers can review, click, and pay on the spot—guaranteeing the sale.",
    image: "/payment.svg",
  },
  {
    id: 3,
    title: "Instant E-Receipts",
    color: "#012219",
    text: "After checkout, Beres instantly shares an official e-receipt in WhatsApp, confirming that the order is complete. Customers enjoy a smooth, reassuring experience knowing every payment is tracked, verified, and acknowledged in seconds.",
    image: "/outofstock.svg",
  },
];

export default function CustomerExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-[#DFF9D7]">
      <div className="px-2">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl !font-bold leading-tight mb-8 text-[#012219]">
          For Customers: <br />
          <span className="text-[#012219]">
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
              className={`relative transition-all duration-300 px-3 py-1 ${activeTab === i
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-700"
                }`}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-[4px] bottom-0 bg-[#AFEB2B] rounded-sm rotate-[-2deg] z-0 block animate-[markerSwipe_0.3s_ease]" />
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
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
            spaceBetween={32}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.6 },
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
                  className={`rounded-[2rem] shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 h-[520px] md:h-[480px] transition-all duration-300 cursor-pointer ${activeTab === idx
                    ? "scale-[1.02]"
                    : "hover:scale-[1.01]"
                    }`}
                  style={{ backgroundColor: card.color }}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 h-[200px] md:h-full">
                    <img
                      src={card.image}
                      alt={card.text}
                      className="h-[180px] md:h-[300px] w-auto object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 flex flex-col justify-center h-[280px] md:h-full">
                    <h3
                      className={`text-xl md:text-4xl font-extrabold mb-2 md:mb-3 ${card.color === "#012219"
                        ? "!text-[#AFEB2B]"
                        : "!text-[#012219]"
                        }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-sm md:text-lg mb-3 font-inter ${card.color === "#012219"
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

          {/* Bullet Indicators - REPLACED ARROWS WITH BULLETS */}
          <div className="flex justify-center mt-10 gap-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  swiperRef.current?.slideTo(idx, 300);
                }}
                className={`h-2 rounded-full transition-all ${activeTab === idx
                  ? "w-5 bg-[#0B1E18]"
                  : "w-2 bg-[#C9D1D9]"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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
