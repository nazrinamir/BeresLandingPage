// components/SuggestionsSection.tsx
import React from 'react';

const Feedback = () => {
  return (
    <section className="py-24">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-2xl font-semibold !text-white mb-4">
          Have any suggestions or feedback?
        </h3>
        <a
          href="https://your-feedback-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm md:text-base"
        >
          Let us know here
        </a>
      </div>
    </section>
  );
};

export default Feedback;
