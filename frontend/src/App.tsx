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
import BenefitSectionMobile from './BenefitSectionMobile';
import LoadingScreen from './components/loading/LoadingScreen';


function AppContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();

  // Loading screen logic
  useEffect(() => {
    const loadApp = async () => {
      // Minimum loading time for better UX
      const minLoadingTime = 2000; // 2 seconds
      const startTime = Date.now();

      // Wait for all images to load
      const imagePromises = Array.from(document.querySelectorAll('img'))
        .map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Continue even if image fails to load
          });
        });

      // Wait for minimum time and all images
      await Promise.all([
        new Promise(resolve => setTimeout(resolve, minLoadingTime)),
        Promise.all(imagePromises)
      ]);

      // Ensure minimum loading time has passed
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      setIsLoading(false);
    };

    loadApp();
  }, []);

  useEffect(() => {
    // Only start popup logic after loading is complete
    if (isLoading) return;

    let timer: ReturnType<typeof setTimeout>;
    let triggered = false;

    // Start 30-second timer immediately after loading finishes
    timer = setTimeout(() => {
      if (!triggered) {
        setShowPopup(true);
        triggered = true;
      }
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]); // Add isLoading as dependency


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
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />
      
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
      <div className='md:block hidden bg-[#EFEFEF]'>
        <BenefitSection />
      </div>

      <div className='md:hidden block'>
        <BenefitSectionMobile />
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
