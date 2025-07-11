// components/BenefitSection.tsx
import React from 'react';
import { motion } from 'framer-motion';


const benefits = [
  {
    icon: '📨',
    title: 'Fast Communication',
    desc: 'Reach your customers instantly through automated replies and notifications.',
  },
  {
    icon: '⚙️',
    title: 'Efficient Order Handling',
    desc: 'Easily manage incoming WhatsApp orders with streamlined tools.',
  },
  {
    icon: '🕒',
    title: 'Always Available',
    desc: 'Your business can respond 24/7, even when you’re away.',
  },
];

const BenefitSection = () => {
  return (
    <section
      id="benefit"
      className="py-20 !text-white  relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72  rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96   rounded-full blur-3xl -z-10" />

        {/* Section Title */}
        <h2 className="text-center text-4xl font-extrabold !text-[#65d546] mb-14 tracking-tight drop-shadow-lg" data-aos="fade-down">
          Benefit
        </h2>

        {/* Benefit Cards */}
        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 border-4 border-blue-300 rounded-full flex items-center justify-center mb-5 text-4xl bg-white text-blue-700 shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="font-bold !text-white text-xl mb-2 drop-shadow">{benefit.title}</h3>
              <p className="text-base text-gray-200 max-w-[240px]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>


        {/* Email Drop Section */}
        <motion.div
          className="mt-20 flex flex-col items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-center text-white mb-6 max-w-xl text-lg font-medium drop-shadow">
            Want to be among the first to experience our solution? Don’t wait — drop your email below for exclusive updates and early access!
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Drop your email"
              className="px-5 py-3 rounded-lg border-2 border-blue-300 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto transition"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              <span>Submit</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default BenefitSection;
