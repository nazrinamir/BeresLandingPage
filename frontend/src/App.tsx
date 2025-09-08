import { useState } from 'react'
import './App.css'
import { Navibar } from './components/nav/NaviBar'
import FloatingContactButton from './components/FloatingContactButton';
import IncentivePopup from './components/IncentivePopup';
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import FeaturesCarousel from './FeaturesCarousel';
import Step from './Step';
import Feedback from './Feedback';

const features = [
  {
    icon: (
      <div className="w-16 h-16 bg-blue-500 bg-opacity-70 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
    title: "Lightning Fast",
    desc: "Experience blazing-fast performance with our optimized solutions that deliver results in real-time.",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-green-500 bg-opacity-70 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    title: "Secure & Reliable",
    desc: "Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee.",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-purple-500 bg-opacity-70 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    ),
    title: "User-Friendly",
    desc: "Intuitive interface designed with your users in mind, making complex tasks simple and enjoyable.",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let triggered = false;

    // Timer for 30 seconds
    timer = setTimeout(() => {
      if (!triggered) {
        setShowPopup(true);
        triggered = true;
        window.removeEventListener('scroll', onScroll);
      }
    }, 30000);

    // Scroll handler
    const onScroll = () => {
      if (!triggered && window.scrollY > 100) { // adjust scrollY threshold as needed
        setShowPopup(true);
        triggered = true;
        clearTimeout(timer);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Carousel state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // 2. Carousel animation state and effect
  const [angle, setAngle] = useState(0);
  const radius = 250; // More space between cards



  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 120); // 360/3 = 120deg per step
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Navigation */}
      {/* <Navibar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}



      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <HeroSection />
      </div>

      {/* Benefit Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <BenefitSection />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FeaturesCarousel />
      </div>

      {/* Step Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Step />
      </div>

      {/* Feedback Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Feedback />
      </div>



      {/* Footer */}
      <footer className="">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 !text-[#65d546] ">Beres</h3>
              <p className="text-gray-400 mb-4">
                Transforming businesses with innovative solutions and exceptional service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 !text-[#65d546] ">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 !text-[#65d546] ">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 !text-[#65d546] ">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Beres. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <FloatingContactButton />
      {showPopup && <IncentivePopup onClose={() => setShowPopup(false)} />}

      {/* Temporary test button, bottom left */}
      <button
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowPopup(true)}
      >
        Test Popup
      </button>
    </div>
  )
}

export default App
