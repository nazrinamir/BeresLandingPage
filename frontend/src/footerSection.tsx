import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import TermPopup from './components/popup/termPopup';
import PrivacyPopup from './components/popup/privacyPopup';
import ImprintPopup from './components/popup/ImprintPopup';
import WaitlistPopup from './components/popup/waitlistPopup';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const FooterSection = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImprint, setShowImprint] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Local email state for the header form (purely visual; join opens popup)
  // const [email, setEmail] = useState('');

  // Auto-open if URL has #waitlist, #privacy-policy, or ?waitlist=1
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.hash === '#waitlist' || url.searchParams.get('waitlist') === '1') {
      setShowWaitlist(true);
    }
    if (url.hash === '#privacy-policy') {
      setShowPrivacy(true);
    }
  }, []);

  const openWaitlist = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowWaitlist(true);
  };

  const openPrivacyPolicy = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowPrivacy(true);
    // Update URL to reflect the open state
    window.history.pushState(null, '', '#privacy-policy');
  };

  const closePrivacyPolicy = () => {
    setShowPrivacy(false);
    // Remove hash from URL when closing
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <footer className="bg-[#032016] text-gray-300 py-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row: Logo (left) + Email Join (right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center justify-start space-x-3">
            <img src="/bereslogo.svg" alt="Beres Logo" className="h-full w-40" />
          </div>

          {/* Join Waitlist Button */}
          {/* <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <button
              onClick={openWaitlist}
              className="bg-[#AEEA30] hover:bg-[#9cd426] text-black font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg transition-all duration-200"
              aria-haspopup="dialog"
              aria-controls="waitlist-popup"
            >
              Join the waitlist
            </button>
            <p className="text-xs text-white/80 mt-3">
              Join the waitlist today and be among the first to experience our exclusive early access.
            </p>
          </div> */}
        </div>

        {/* Middle grid: Description / About / Social */}
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
              <li>
                <a
                  href="https://forms.office.com/r/v27frh4uhR"
                  className="!text-white hover:text-[#AEEA30] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Survey
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center md:items-end md:pr-2">
            <h4 className="text-lg md:text-xl font-semibold mb-4 !text-white">Social</h4>
            {/* Row on mobile (smaller icons), column on desktop */}
            <div className="flex items-center gap-6 md:flex-col md:gap-0 md:space-y-4">
              <a
                href="https://www.instagram.com/beresmy/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white hover:text-[#E4405F] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581070502587"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white hover:text-[#1877F2] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/beres-my/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white hover:text-[#1877F2] transition-colors duration-200"
                aria-label="Follow us on Linkedin"
              >
                <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row (same alignment; smaller on mobile) */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between items-center gap-4 md:gap-0 text-xs md:text-sm">
          <p className="!text-[#AEEA30] font-semibold">Designed by Beres</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <button onClick={openPrivacyPolicy} className="!text-[#AEEA30]">
              Privacy policy
            </button>
            <button onClick={() => setShowTerms(true)} className="!text-[#AEEA30]">Terms of use</button>
            <span className="!text-[#AEEA30]">© 2025 Beres. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Popups */}
      <TermPopup isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPopup isOpen={showPrivacy} onClose={closePrivacyPolicy} />
      <ImprintPopup isOpen={showImprint} onClose={() => setShowImprint(false)} />
      <WaitlistPopup isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </footer>
  );
};

export default FooterSection;