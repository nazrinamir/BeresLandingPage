import { useState } from 'react'
import './App.css'
import Navbar from "./components/nav/NaviBar";
import FloatingContactButton from './components/button/FloatingContactButton';
import IncentivePopup from './components/popup/IncentivePopup';
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import FeaturesCarousel from './FeaturesCarousel';
import Step from './Step';
import Feedback from './Feedback';
import FooterSection from './footerSection';

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
    <div className="relative min-h-screen text-white w-full">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <div  className="rounded-b-2xl overflow-hidden">
        <HeroSection />
      </div>

      {/* Features Section */}
      <div className=' bg-white'>
        <FeaturesCarousel />
      </div>

      {/* Benefit Section */}
      <div className=' bg-[#EFEFEF]'>
        <BenefitSection />
      </div>

      {/* Step Section */}
      <div >
        <Step />
      </div>

      {/* Footer */}
      <footer className="">
        <FooterSection />
      </footer>
      <FloatingContactButton />
      {showPopup && <IncentivePopup onClose={() => setShowPopup(false)} />}

      {/* Temporary test button, bottom left */}
      {/* <button
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowPopup(true)}
      >
        Test Popup
      </button> */}
    </div>
  )
}

export default App
