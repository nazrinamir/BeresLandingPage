// components/HeroSection.tsx
import { useState } from 'react';
import { WaitlistHelper } from './helper/waitlistHelper/waitlistHelper';
import { useTranslation } from './lang/useTranslation';
import { SuccessPopup } from './components/popup/SuccessPopup';
import { useToast } from './components/toast';
import ScrollIndicator from './components/button/ScrollIndicator';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isLoading?: boolean;
}

const HeroSection = ({ isLoading = false }: HeroSectionProps) => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const resetForm = () => {
    setEmail('');
    setShowPopup(false);
  }

  const handleSubmitWaitlist = async () => {
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
    resetForm();
  }
  return (
    <section id="home" className="text-white w-full py-20 bg-[#012219] relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 md:gap-5 mt-4 w-full">

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
            <p className="text-lg !text-white mb-8 text-justify" >
              {t('hero.description')}
            </p>

            {/* Email Input + Button */}
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow w-full">
              <input
                id="waitlist-email"
                type="email"
                placeholder={t('hero.emailPlaceholder')}
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubmitWaitlist} className="bg-[#AEEA30] text-black font-medium px-4 py-2 mr-1 rounded-full hover:bg-[#9cd426] transition text-nowrap">
                {t('hero.joinUs')}
              </button>
            </div>
          </div>
        </div>

        {/* Right Illustration - bigger */}
        <div className="md:w-7/12 w-full md:flex justify-center hidden " data-aos="fade-left">
          <motion.div className="overflow-hidden w-full h-full flex items-center justify-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}>
            <img
              src={'/hero.svg'}
              alt="Hero"
              className="w-[633px] h-[602px] object-contain"
            />
          </motion.div>
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
