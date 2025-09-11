import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
  isVisible?: boolean; // Add this prop to control visibility
}

export default function ScrollIndicator({ 
  targetId = 'features', 
  className = '', 
  isVisible: externalVisible = true 
}: ScrollIndicatorProps) {
  const [isScrollVisible, setIsScrollVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator when user has scrolled more than 100px from the top
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollVisible(scrollTop < 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToNext = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Don't render if not visible (either externally controlled or scroll-based)
  if (!externalVisible || !isScrollVisible) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${className}`}>
      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
        <span className="text-white text-xs sm:text-sm font-medium animate-pulse">
          Scroll down
        </span>
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center space-y-0.5 sm:space-y-1 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1 sm:p-2"
          aria-label="Scroll to next section"
        >
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
            <div className="w-0.5 h-1.5 sm:w-1 sm:h-3 bg-white/80 rounded-full mt-1 sm:mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
          </div>
          <svg 
            className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
