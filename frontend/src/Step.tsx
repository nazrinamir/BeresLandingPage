import React, { useState } from 'react';

const steps = [
  {
    title: 'Step 1',
    description: "First, users interact with the landing page and get instant info. It's fast, seamless, and mobile-friendly.",
    image: '🖼️',
  },
  {
    title: 'Step 2',
    description: "Then, users receive an email or notification about the next steps — handled automatically behind the scenes.",
    image: '🖼️',
  },
  // Add more steps here if needed
];

const Step = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <button
                className={`flex flex-col items-center focus:outline-none transition-colors
                  ${idx === currentStep ? 'text-blue-400 font-bold' : 'text-gray-400'}
                `}
                onClick={() => setCurrentStep(idx)}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
                  ${idx === currentStep ? 'bg-blue-400 text-white' : 'bg-gray-700'}
                `}>
                  {idx + 1}
                </div>
                <span className="text-xs">{step.title}</span>
              </button>
              {idx < steps.length - 1 && (
                <div className="w-8 h-1 bg-gray-600 mx-2 rounded" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2 !text-white">{steps[currentStep].title}</h3>
            <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">{steps[currentStep].description}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-60 h-60 bg-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-4xl">{steps[currentStep].image}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
