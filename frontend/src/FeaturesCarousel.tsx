"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const slides = [
  {
    id: 0,
    title: "Animals and superpowers",
    text: "Choose an animal and superpower that feel right for today. What fits your mood? Something strong, something soft, something clever — or maybe something calm?",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-CheckIn-ENG-1024x815.png",
    gradient: "from-blue-400 to-sky-300",
  },
  {
    id: 1,
    title: "Chat Cards",
    text: "The Super Chill Chat Cards help to talk in a playful manner about everything that’s going on in that little noggin. Chatting about what you feel, what you think and how you deal with difficult things, helps to hold your noggin high.",
    image: "https://superchill.org/app/uploads/2025/07/Slider-image-Evenkletsen-ENG.png",
    gradient: "from-cyan-400 to-sky-300",
  },
  {
    id: 2,
    title: "Listen and relax",
    text: "You can do the ‘Calm’ and ‘Focused’ exercises with your eyes closed — just listening. And one day, you might not even need your phone anymore.. because the practice is already in your head, ready for whenever you need it.",
    image:
      "https://superchill.org/app/uploads/2025/07/Slider-image-Alleen-luisteren-1024x815.png",
    gradient: "from-pink-400 to-pink-300",
  },
  {
    id: 3,
    title: "Backed by science",
    text: "The exercises in Super Chill are rooted in established methods that have been thoroughly examined. From the very start, a solid scientific foundation has been prioritised, so you can trust that our exercises truly make a difference.",
    image: "https://superchill.org/app/uploads/2025/07/Slider-image-SCHUB-ENG.png",
    gradient: "from-orange-400 to-orange-300",
  },
];

export default function SuperChillSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 bg-[#fff6e9]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Also waiting for you <br />
          in the <mark className="bg-yellow-300 px-2">app</mark>
        </h2>

        {/* Slider Navigation Tabs */}
        <div className="flex justify-center space-x-6 text-gray-500 mb-10 text-lg font-medium">
          {slides.map((s, i) => (
            <span
              key={i}
              className={`cursor-pointer transition hover:text-black ${
                i === 2 ? "text-black border-b-2 border-yellow-300" : ""
              }`}
            >
              {s.title}
            </span>
          ))}
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={40}
            slidesPerView={1.2}
            centeredSlides
            className="overflow-visible"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className={`rounded-3xl flex flex-col md:flex-row justify-between items-center text-left shadow-md p-10 bg-gradient-to-br ${slide.gradient}`}
                >
                  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="max-h-96 object-contain"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-3xl font-extrabold uppercase text-gray-900 mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[-2rem] right-10 flex space-x-3">
            <button
              ref={prevRef}
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-md p-3 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-md p-3 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
