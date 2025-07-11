// components/FeaturesCarousel.tsx
import React, { useEffect, useState } from 'react';

const features = [
  {
    icon: '📊',
    title: 'Product Analytic',
    desc: 'Track product performance in real time and monitor top-selling products and low-performing items.',
    color: 'bg-blue-500/60',
  },
  {
    icon: '🛒',
    title: 'Whatsapp Catalogue Sync',
    desc: 'Automatically sync uploaded products to WhatsApp Business Catalog via Meta WhatsApp Business API.',
    color: 'bg-blue-500/60',
  },
  {
    icon: '📈',
    title: 'Sales Tracker',
    desc: 'Monitor total sales, top-selling products and pending vs completed orders through visual dashboards.',
    color: 'bg-blue-500/60',
  },
  {
    icon: '⚡',
    title: 'Fast Auto Reply',
    desc: 'Instantly reply to customer messages which reduce response time',
    color: 'bg-blue-500/60',
  },
  {
    icon: '📝',
    title: 'Auto Reply Template',
    desc: 'Create and manage auto-reply templates such as Pre-build message templates for order confirmation and Use Meta-approved templates to reply in WhatsApp',
    color: 'bg-blue-500/60',
  },
  {
    icon: '⏰',
    title: '24/7 Assist & Transaction',
    desc: 'Customers can browse products and place orders anytime',
    color: 'bg-blue-500/60',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable Payment Transaction',
    desc: 'Safe and seamless payment within the system that integrated with payment gateways (FPX)',
    color: 'bg-green-500/60',
  },
  {
    icon: '💡',
    title: 'Invoice Generator',
    desc: 'Automatic invoice generation after payment',
    color: 'bg-purple-500/60',
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
        <h2 className="text-3xl font-bold mb-20 !text-[#65d546]">Features</h2>
        <div className="flex justify-center items-center gap-8 transition-all duration-700">
          {visibleFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="w-72 h-72 flex flex-col items-center justify-center text-center p-6 rounded-lg border border-gray-400 shadow-lg bg-gray-700 bg-opacity-50 transition-all duration-700"
            >
              <div className={`w-20 h-20 ${feature.color} rounded-full mb-4 flex items-center justify-center`}>
                <span className="text-5xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold !text-white">{feature.title}</h3>
              <p className="text-base !text-white">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
