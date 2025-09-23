import { FaInstagram, FaFacebook } from 'react-icons/fa';
import TermPopup from './components/popup/termPopup';
import PrivacyPopup from './components/popup/privacyPopup';
import ImprintPopup from './components/popup/ImprintPopup';
import WaitlistPopup from './components/popup/waitlistPopup';
import { useEffect, useState } from 'react';

const FooterSection = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImprint, setShowImprint] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Auto-open if URL has #waitlist or ?waitlist=1
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.hash === '#waitlist' || url.searchParams.get('waitlist') === '1') {
      setShowWaitlist(true);
    }
  }, []);

  const openWaitlist = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowWaitlist(true);
  };

  return (
    <footer className="bg-[#032016] text-gray-300 py-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center justify-start md:justify-start space-x-3 mb-10">
          <img src="/bereslogo.svg" alt="Beres Logo" className="h-full w-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr_auto] gap-10 md:gap-12 text-center md:text-left md:items-start">
          {/* Left: Description */}
          <div className="w-full">
            <p className="leading-relaxed text-left !text-white mx-auto md:mx-0 max-w-lg md:max-w-md lg:max-w-lg text-sm md:text-base md:pr-8">
              We're a remote software company. Care for joy as much as process.
              See details as the baseline of quality. And we help people focus
              on what matters.
            </p>
          </div>

          {/* Middle: About */}
          <div className="flex flex-col w-full items-center md:items-center">
            <h4 className="text-lg md:text-xl font-semibold mb-4 !text-white">About</h4>
            <ul className="space-y-2 text-sm text-center md:text-base">
              <li><a href="#features" className="!text-white hover:text-[#AEEA30] transition-colors">Features</a></li>
              <li><a href="#benefits" className="!text-white hover:text-[#AEEA30] transition-colors">Benefits</a></li>
              {/* <li><a href="#" className="!text-white hover:text-[#AEEA30] transition-colors">Prize</a></li> */}
              <li><a href="#steps" className="!text-white hover:text-[#AEEA30] transition-colors">Steps</a></li>
              <li>
                <button
                  onClick={openWaitlist}
                  className="!text-white hover:text-[#AEEA30] transition-colors"
                  aria-haspopup="dialog"
                  aria-controls="waitlist-popup"
                >
                  Join our waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center md:items-end md:pr-2">
            <h4 className="text-lg md:text-xl font-semibold mb-4 !text-white">Social</h4>
            {/* Row on mobile (smaller icons), column on desktop */}
            <div className="flex items-center gap-6 md:flex-col md:gap-0 md:space-y-4">
              <a
                href="https://www.instagram.com/beres.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white hover:text-[#E4405F] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://www.instagram.com/beresmy/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white hover:text-[#1877F2] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row (same alignment; smaller on mobile) */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between items-center gap-4 md:gap-0 text-xs md:text-sm">
          <p className="!text-[#AEEA30] font-semibold">Designed by Beres</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <button onClick={() => setShowPrivacy(true)} className="!text-[#AEEA30]">Privacy policy</button>
            <button onClick={() => setShowTerms(true)} className="!text-[#AEEA30]">Terms of use</button>
            <span className="!text-[#AEEA30]">© 2025 Beres. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Popups */}
      <TermPopup isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPopup isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <ImprintPopup isOpen={showImprint} onClose={() => setShowImprint(false)} />
      <WaitlistPopup isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </footer>
  );
};

export default FooterSection;
