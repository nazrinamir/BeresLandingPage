"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 4,
    title: "All-in-One Dashboard",
    color: "#FFBE55",
    cards: [
      {
        heading: "Performance Overview",
        text: "See your orders, payments, and stock levels update in real time, all in one place",
        image: "/dashboard.svg",
      },
      {
        heading: "Instant Transaction Alerts",
        text: "Stay informed the moment a sale happens Beres automatically updates your dashboard with every completed payment, eliminating the need for manual tracking",
        image: "/alert.svg",
      },
    ],
  },
  {
    id: 0,
    title: "Smart Product Management",
    color: "#BDCCFF",
    cards: [
      {
        heading: "Upload Products in Beres",
        text: "Add your products once, then easily update stock anytime even for multiple items at once. Your catalog stays up to date in minutes",
        image: "/addonetime.webm",
      },
      {
        heading: "WhatsApp Catalogue Mirrors Instantly",
        text: "Beres automatically keeps your WhatsApp Business Catalogue perfectly updated. Out of stock? Update Beres, and your WhatsApp catalogue reflects the change instantly",
        image: "/catalog.webm",
      },
    ],
  },
  {
    id: 1,
    title: "Payment Within WhatsApp",
    color: "#F86C51",
    cards: [
      {
        heading: "One Time Setup",
        text: "Activate your payment feature in Beres once it’s ready for every future order.",
        image: "/onetime.svg",
      },
      {
        heading: "Pay Directly in Chat",
        text: "Customers automatically receive a secure payment link right inside WhatsApp and can complete their purchase in seconds",
        image: "/payment.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Automatic E-receipt",
    color: "#6DD850",
    cards: [
      {
        heading: "E-Receipt Generated",
        text: `The e-receipt is sent directly to the customer’s WhatsApp chat in real time <span class='text-[#012219]'>after payment successful</span>, giving them immediate proof of purchase and enhancing your brand’s credibility.`,
        image: "/recipts.svg",
      },
    ],
  },
];

export default function SuperChillSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCardIndices, setActiveCardIndices] = useState(
    Array(slides.length).fill(0)
  );
  const swiperRef = useRef(null);
  const scrollRef = useRef(null);

  // 👉 Enable mouse drag scroll
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
    <section className="py-20 bg-[#DFF9D7]" id="features">
      <div className="px-2">
        {/* Small Badge Heading */}
        <div className="inline-block bg-[#E2FBD7] text-[#012219] px-5 py-2 rounded-full border border-[#012219]/20 font-semibold text-2xl mb-6">
          Features
        </div>

        {/* Title */}
        <h2 className="text-center !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-bold leading-snug mb-8 !text-[#012219]">
          <span className="relative inline-block">
            <span className="relative z-10">Move Like Never Before With</span>
          </span>
          <br />
          <span className="relative inline-block !text-[#012219] pb-1">
            <span className="relative z-10">For Business Owners Who Let Their Store Run 24/7</span>
            <span className="absolute left-0 bottom-0 w-90 h-[10px] bg-[#AEEA30] rounded-full opacity-70 z-0"></span>
          </span>
        </h2>

        {/* Tabs (scrollable) */}
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
                  <span className="absolute inset-x-0 top-[4px] bottom-0 bg-[#AFEB2B] rounded-sm rotate-[-2deg] z-0 block animate-[markerSwipe_0.3s_ease]" />
                )}
                <span className="relative z-[1]">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Swiper */}
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
                    className={`rounded-[2rem] shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 h-[520px] md:h-[480px] transition-all duration-300 cursor-pointer relative ${activeTab === idx
                      ? "scale-[1.02]"
                      : "hover:scale-[1.01]"
                      }`}
                    style={{ backgroundColor: slide.color }}
                  >
                    {/* Image/Video */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 h-[200px] md:h-full">
                      {currentCard.image.endsWith('.webm') ? (
                        <video
                          src={currentCard.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={`w-auto object-contain ${slide.id === 0
                            ? "h-[220px] md:h-[380px]"
                            : "h-[180px] md:h-[300px]"
                            }`}
                        />
                      ) : (
                        <img
                          src={currentCard.image || "https://via.placeholder.com/400x300?text=Feature"}
                          alt={currentCard.text}
                          className={`w-auto object-contain ${slide.id === 0
                            ? "h-[220px] md:h-[380px]"
                            : "h-[180px] md:h-[300px]"
                            }`}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 flex flex-col justify-center h-[280px] md:h-full">
                      <h3
                        className={`!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold mb-3 md:mb-4 ${slide.color === "#FFBE55"
                          ? "!text-white"
                          : slide.color === "#BDCCFF"
                            ? "!text-[#414B6E]"
                            : slide.color === "#F86C51"
                              ? "!text-white"
                              : "!text-[#125744]"
                          }`}
                      >
                        {currentCard.heading}
                      </h3>
                      <p
                        className={`text-[#012219] leading-relaxed text-sm md:text-lg mb-3 text-justify ${slide.color === "#FFBE55"
                          ? "!text-white"
                          : slide.color === "#BDCCFF"
                            ? " !text-[#414B6E]"
                            : slide.color === "#F86C51"
                              ? "!text-white"
                              : "!text-[#125744]"
                          }`}
                        style={{ fontFamily: "var(--font-inter)" }}
                        dangerouslySetInnerHTML={{ __html: currentCard.text }}
                      />
                    </div>

                    {/* Card Navigation Arrows */}
                    {slide.cards.length > 1 && (
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
                    )}

                    {/* Card Indicator */}
                    <div className="absolute top-4 right-4 bg-white/80 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                      {currentCardIndex + 1}/{slide.cards.length}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Main Navigation Bullets */}
          <div className="flex justify-center mt-10 gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  swiperRef.current?.slideTo(idx, 300);
                }}
                className={`h-2 rounded-full transition-all ${activeTab === idx ? "w-5 bg-[#0B1E18]" : "w-2 bg-[#C9D1D9]"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Marker Animation */}
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
