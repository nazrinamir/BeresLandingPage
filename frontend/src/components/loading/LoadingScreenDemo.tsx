import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

// Demo component to test the loading screen
const LoadingScreenDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const triggerLoading = () => {
    setIsLoading(true);
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Loading Screen Demo</h2>
      <button
        onClick={triggerLoading}
        className="bg-[#A7E34A] text-[#0B1E18] px-6 py-3 rounded-lg font-semibold hover:bg-[#82C341] transition-colors"
      >
        Test Loading Screen
      </button>
      
      <LoadingScreen isLoading={isLoading} />
    </div>
  );
};

export default LoadingScreenDemo;
