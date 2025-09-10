import { useState } from 'react'
import './App.css'
import 'boxicons/css/boxicons.min.css';
import Navbar from "./components/nav/NaviBar";
import FloatingContactButton from './components/button/FloatingContactButton';
import IncentivePopup from './components/popup/IncentivePopup';
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import FeaturesCarousel from './FeaturesCarousel';
import Step from './Step';
import FooterSection from './footerSection';
import { ToastProvider, useToast } from './components/toast/ToastContext';
import ToastContainer from './components/toast/ToastContainer';


function AppContent() {
  const [showPopup, setShowPopup] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
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


  // Toast test functions
  const showSuccessToast = () => {
    addToast({
      type: 'success',
      message: 'Success! Your action was completed successfully.',
      duration: 5000
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      message: 'Error! Something went wrong. Please try again.',
      duration: 5000
    });
  };

  const showWarningToast = () => {
    addToast({
      type: 'warning',
      message: 'Warning! Please check your input and try again.',
      duration: 5000
    });
  };

  const showInfoToast = () => {
    addToast({
      type: 'info',
      message: 'Info: Here\'s some helpful information for you.',
      duration: 5000
    });
  };

  return (
    <div className="relative min-h-screen text-white w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="rounded-b-3xl overflow-hidden">
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
      <footer className="rounded-t-2xl overflow-hidden bg-[#012219]">
        <FooterSection />
      </footer>
      <FloatingContactButton />
      {showPopup && <IncentivePopup onClose={() => setShowPopup(false)} />}

      {/* Toast Container */}
      <ToastContainer />

      {/* Toast Test Buttons */}
      {/* <div className="fixed bottom-50 left-4 z-50 flex flex-col gap-2">
        <button
          className="bg-green-600 text-white px-3 py-2 rounded text-sm"
          onClick={showSuccessToast}
        >
          Success Toast
        </button>
        <button
          className="bg-red-600 text-white px-3 py-2 rounded text-sm"
          onClick={showErrorToast}
        >
          Error Toast
        </button>
        <button
          className="bg-yellow-600 text-white px-3 py-2 rounded text-sm"
          onClick={showWarningToast}
        >
          Warning Toast
        </button>
        <button
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm"
          onClick={showInfoToast}
        >
          Info Toast
        </button>
        <button
          className="bg-purple-600 text-white px-3 py-2 rounded text-sm"
          onClick={() => setShowPopup(true)}
        >
          Test Popup
        </button>
      </div> */}
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App
