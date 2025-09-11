import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({ targetId = 'features', className = '' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true); // Always show for testing

  const handleScrollToNext = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-white text-sm font-medium animate-pulse">
          Scroll down
        </span>
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center space-y-1 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
          </div>
          <svg 
            className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" 
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
