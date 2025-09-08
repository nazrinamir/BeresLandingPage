// components/FeaturesCarousel.tsx
import React, { useEffect, useState } from 'react';

const features = [
  {
    title: 'All-in-One Dashboard',
    desc: 'Track orders, monitor payments, manage stock, and get analysis. All from one clean dashboard. No more manual checking or scattered info. Everything’s updated in real time so you stay in control, effortlessly.',
  },
  {
    title: 'Real-Time Stock Confirmation',
    desc: 'Our system will automated stock checks on WhatsApp orders. If items are available, customers instantly get a payment link. If not, they’re notified for follow-up.',
  },
  {
    title: 'Sales Tracker',
    desc: 'Monitor total sales, top-selling products and pending vs completed orders through visual dashboards.',
  },
  {
    title: 'Fast Auto Reply',
    desc: 'Instantly reply to customer messages which reduce response time',
  },
];

const FeaturesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3; // Show 3 cards at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Get the visible features, wrapping around the array
  const visibleFeatures = Array.from({ length: visibleCount }, (_, i) =>
    features[(current + i) % features.length]
  );

  return (
    <section id="features" className="py-24 !text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-20 !text-black">Beres has the features.</h2>
        <div className="flex justify-center items-center gap-8 transition-all duration-700">
          {visibleFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="w-72 h-72 flex flex-col items-center justify-center text-center p-6 rounded-lg  shadow-lg bg-[#F0F0F0] bg-opacity-50 transition-all duration-700"
            >
              {/* <div className={`w-20 h-20 ${feature.color} rounded-full mb-4 flex items-center justify-center`}>
              </div> */}
              <h3 className="text-xl font-semibold !text-black mb-4">{feature.title}</h3>
              <p className="text-base !text-[#7A7A82] text-justify">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
