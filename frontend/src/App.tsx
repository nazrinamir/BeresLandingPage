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
// import BenefitSectionMobile from './BenefitSectionMobile';
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
      const minLoadingTime = 1200; // tighten if you want snappier feel
      const startTime = Date.now();

      // Only wait for critical, above-the-fold images (exclude lazy)
      const criticalImages = Array.from(
        document.querySelectorAll<HTMLImageElement>('img:not([loading="lazy"])')
      );

      // Helper: wait for an image with a timeout cap
      const waitForImage = (img: HTMLImageElement, timeoutMs = 3000) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();

        return new Promise<void>((resolve) => {
          const done = () => {
            img.onload = null;
            img.onerror = null;
            resolve();
          };

          img.onload = done;
          img.onerror = done;

          // Cap the wait per image
          const t = setTimeout(() => {
            done();
          }, timeoutMs);

          // Clear timeout once done
          const wrap = (fn: any) => (...args: any[]) => {
            clearTimeout(t);
            fn?.(...args);
          };
          img.onload = wrap(img.onload);
          img.onerror = wrap(img.onerror);
        });
      };

      try {
        await Promise.all([
          new Promise((r) => setTimeout(r, minLoadingTime)),
          Promise.all(criticalImages.map((img) => waitForImage(img, 3000))),
        ]);
      } finally {
        // Ensure minimum time has passed
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minLoadingTime) {
          await new Promise((r) => setTimeout(r, minLoadingTime - elapsedTime));
        }
        setIsLoading(false);
      }
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
        <div>
          <BenefitSection />
        </div>

        {/* <div className="md:hidden block">
          <BenefitSectionMobile />
        </div> */}
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
