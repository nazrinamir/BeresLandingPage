import { useState, useRef, useEffect } from 'react'
import './App.css'
import 'boxicons/css/boxicons.min.css';
import Navbar from "./components/nav/NaviBar";
import FloatingContactButton from './components/button/FloatingContactButton';
import IncentivePopup from './components/popup/IncentivePopup';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import FeaturesCarousel from './FeaturesCarousel';
import FeaturesCustomer from './FeaturesCustomer';
import Step from './Step';
import FooterSection from './footerSection';
import { ToastProvider } from './components/toast/ToastContext';
import ToastContainer from './components/toast/ToastContainer';
import BenefitSectionMobile from './BenefitSectionMobile';
import LoadingScreen from './components/loading/LoadingScreen';
import SectionDetails from "./Sectiondetails";
// Add this import for Rive
import { Rive } from '@rive-app/canvas';

function AppContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Replace the useRive hook with useRef and useEffect
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const rive = new Rive({
        src: '/loadingBeresRive.riv',
        canvas: canvasRef.current,
        autoplay: true,
      });

      return () => rive.cleanup();
    }
  }, []);

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

  return (
    <div className="relative min-h-screen text-white w-full">
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Navigation */}
      <Navbar />

      {/* Hero + Section Details on continuous green background */}
      <div className="bg-[#012219]">
        <div>
          <HeroSection isLoading={isLoading} />
        </div>
        <div>
        <SectionDetails />
        </div>
      </div>

      {/* Features Section */}
      <div >
        <FeaturesCarousel />
      </div>

      {/* Features Section */}
      <div >
        <FeaturesCustomer />
      </div>

      <section id="benefits" className="scroll-mt-52">
        <div className="md:block hidden bg-[#EFEFEF]">
          <BenefitSection />
        </div>

        <div className="md:hidden block">
          <BenefitSectionMobile />
        </div>
      </section>


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
