"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    id: 0,
    title: "The Intent Signal",
    color: "#FFBE55",
    text: "Customers browse your WhatsApp catalog and tap Add to Cart. This instant action confirms their intent and immediately triggers the automated checkout flow.",
    image: "/inten.webm",
  },
  {
    id: 1,
    title: "Live Stock Confirmation (Zero Waiting)",
    color: "#BDCCFF",
    text: "The moment an item is added, Beres automatically performs a real-time stock check. No manual checks, no delays, and no 'wait, let me check' messages.",
    image: "/livestock.svg",
  },
  {
    id: 2,
    title: "Secure, In-Chat Payment Link",
    color: "#F86C51",
    text: "If stock is available, a secure, customized payment link is instantly generated and delivered directly within the WhatsApp chat. Customers can review, click, and pay on the spot—guaranteeing the sale.",
    image: "/payment.svg",
  },
  {
    id: 3,
    title: "Proof Of Purchase",
    color: "#6DD850",
    text: "After checkout, Beres instantly shares an official e-receipt in WhatsApp, confirming that the order is complete. Customers enjoy a smooth, reassuring experience knowing every payment is tracked, verified, and acknowledged in seconds.",
    image: "/instant.svg",
  },
];

export default function CustomerExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);
  const scrollRef = useRef(null);

  // ✅ Enable mouse drag scroll for tabs
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      el.classList.add("dragging");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const stop = () => {
      isDown = false;
      el.classList.remove("dragging");
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", start);
    el.addEventListener("mouseleave", stop);
    el.addEventListener("mouseup", stop);
    el.addEventListener("mousemove", move);

    return () => {
      el.removeEventListener("mousedown", start);
      el.removeEventListener("mouseleave", stop);
      el.removeEventListener("mouseup", stop);
      el.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section className="py-20 bg-[#DFF9D7]">
      <div className="px-2">
        {/* Heading */}
        <h2 className="text-center !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-bold leading-snug mb-8 text-[#012219] relative inline-block">
          <span className="relative inline-block">
            <span
              className="
        relative z-10
      "
            >
              Your Customers Deserve This:
            </span>
            <span
              className="
        absolute left-0 bottom-1 w-70 h-[10px]
        bg-[#AEEA30] rounded-full opacity-70
        -z-0
      "
            ></span>
          </span>
          <br />
          <span className="text-[#012219]">Smooth, Instant Shopping Experience</span>
        </h2>

        {/* Tabs - scrollable */}
        <div className="mb-14 text-lg font-semibold">
          <div
            ref={scrollRef}
            className="
              flex gap-6 sm:gap-8 px-4 sm:px-0
              overflow-x-auto sm:overflow-visible
              no-scrollbar
              justify-start sm:justify-center
              whitespace-nowrap
              scroll-smooth
              cursor-grab active:cursor-grabbing select-none
            "
          >
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
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
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
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              boxSizing: "border-box",
            }}
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
                  {/* Image/Video */}
                  <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 h-[200px] md:h-full">
                    {card.image.endsWith('.webm') ? (
                      <video
                        src={card.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-auto object-contain ${card.id === 0
                          ? "h-[220px] md:h-[380px]"
                          : "h-[180px] md:h-[300px]"
                          }`}
                      />
                    ) : (
                      <img
                        src={card.image}
                        alt={card.text}
                        className={`w-auto object-contain ${card.id === 0
                          ? "h-[220px] md:h-[380px]"
                          : "h-[180px] md:h-[300px]"
                          }`}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 flex flex-col justify-center h-[280px] md:h-full">
                    <h3
                      className={`!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold mb-3 md:mb-4 ${card.color === "#FFBE55"
                        ? "!text-white"
                        : card.color === "#BDCCFF"
                          ? "!text-[#414B6E]"
                          : card.color === "#F86C51"
                            ? "!text-white"
                            : "!text-[#125744]"
                        }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[#012219] leading-relaxed text-sm md:text-lg mb-3 text-justify ${card.color === "#FFBE55"
                        ? "!text-white"
                        : card.color === "#BDCCFF"
                          ? " !text-[#414B6E]"
                          : card.color === "#F86C51"
                            ? "!text-white"
                            : "!text-[#125744]"
                        }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bullet Indicators */}
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

      {/* Marker + Drag CSS */}
      <style>{`
        @keyframes markerSwipe {
          from { transform: scaleX(0) rotate(-2deg); opacity: 0.4; }
          to { transform: scaleX(1) rotate(-2deg); opacity: 1; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .dragging { cursor: grabbing !important; user-select: none; }
      `}</style>
    </section>
  );
}
