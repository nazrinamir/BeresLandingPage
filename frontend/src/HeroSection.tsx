// components/HeroSection.tsx
import { useState } from 'react';
import { WaitlistHelper } from './helper/waitlistHelper/waitlistHelper';
import { useTranslation } from './lang/useTranslation';
import { SuccessPopup } from './components/popup/SuccessPopup';
import { useToast } from './components/toast';
import ScrollIndicator from './components/button/ScrollIndicator';

interface HeroSectionProps {
  isLoading?: boolean;
}

const HeroSection = ({ isLoading = false }: HeroSectionProps) => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setEmail('');
    setShowPopup(false);
    setIsJoined(false);
    setIsSubmitting(false);
  }

  const handleSubmitWaitlist = async () => {
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    setIsJoined(true);

    try {
      const waitlistHelper = new WaitlistHelper();
      const response = await waitlistHelper.submit({
        email: email,
      });

      if (response.success) {
        setShowPopup(true);
        addToast({
          type: 'success',
          message: response.message,
          duration: 5000
        });

      } else {
        addToast({
          type: 'error',
          message: response.message,
          duration: 5000
        });
      }
    } catch (error) {
      addToast({
        type: 'error',
        message: 'An error occurred. Please try again.',
        duration: 5000
      });
    } finally {
      resetForm();
    }
  }

  return (
    <section id="home" className="text-white w-full py-20 bg-[#012219] relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-3 mt-4 w-full">
        {/* Left Content - smaller */}
        <div className="md:w-5/12 w-full mb-12 md:mb-0 md:ml-12 " data-aos="fade-right">
          <div className="max-w-md mx-auto w-full">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <img
                src={'/deal.svg'}
                alt="Deal"
                className="w-[413.53px] h-[300.55px] object-contain p-6 md:p-0"
              />
            </h1>

            {/* Paragraph */}
            <p className="text-sm md:text-lg !text-white mb-8 
               text-justify 
               max-w-xs mx-auto md:max-w-none">
              {t('hero.description')}
            </p>
            {/* Email Input + Button */}
            <div className="w-full mx-auto max-w-xl">
              <div className="flex items-center bg-white rounded-full overflow-hidden shadow w-full">
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder={t('hero.emailPlaceholder')}
                  className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubmitWaitlist}
                  disabled={isSubmitting}
                  className={`font-medium px-4 py-2 mr-1 rounded-full transition text-nowrap flex items-center justify-center gap-2 ${isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-wait'
                    : 'bg-[#AEEA30] text-black hover:bg-[#9cd426]'
                    }`}
                >
                  {isSubmitting && (
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Joining...' : (isJoined ? <></> : t('hero.joinUs'))}
                </button>
              </div>

              {/* Sentence row */}
              <div className="mt-3 w-full flex justify-center">
                <div className="flex items-center gap-x-2">
                  <img src="/Star1.png" alt="" className="w-4 h-4" />
                  <p className="text-base !text-[#FFBB00]">
                    Our system will launch soon!
                  </p>
                  <img src="/Star2.png" alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration - bigger */}
        <div className="md:w-7/12 w-full md:flex justify-start hidden " data-aos="fade-left">
          <div className="overflow-hidden w-full h-full flex items-center justify-start">
            <img
              src={'/hero1.png'}
              alt="Hero"
              className="w-full max-w-[680px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - only show when not loading */}
      <ScrollIndicator targetId="features" isVisible={!isLoading} />

      {showPopup && <SuccessPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
      {/* <button
        className="fixed bottom-20 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowPopup(true)}
      >
        Test Popup Success
      </button> */}
    </section>
  );
};

export default HeroSection;
