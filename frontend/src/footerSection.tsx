import { FaInstagram, FaFacebook } from 'react-icons/fa';
import TermPopup from './components/popup/termPopup';
import PrivacyPopup from './components/popup/privacyPopup';
import ImprintPopup from './components/popup/ImprintPopup';
import WaitlistPopup from './components/popup/WaitlistPopup'; // ⬅️ add this
import { useEffect, useState } from 'react';

const FooterSection = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImprint, setShowImprint] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false); // ⬅️ add this

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
        <div className="flex items-center space-x-3 mb-10">
          <img src="/bereslogo.svg" alt="Beres Logo" className="h-full w-40" />
        </div>

        <div className="flex flex-col md:flex-row gap-14 items-start">
          {/* Left: Description */}
          <div className="w-full">
            <p className="leading-relaxed text-justify max-w-sm !text-white">
              We're a remote software company. Care for joy as much as process.
              See details as the baseline of quality. And we help people focus
              on what matters.
            </p>
          </div>

          {/* Middle: About */}
          <div className="flex flex-col w-full items-center text-center">
            <h4 className="text-xl font-semibold mb-5 !text-white">About</h4>
            <ul className="space-y-1">
              <li><a href="#features" className="!text-white hover:text-[#AEEA30] transition-colors">Features</a></li>
              <li><a href="#benefits" className="!text-white hover:text-[#AEEA30] transition-colors">Benefits</a></li>
              <li><a href="#" className="!text-white hover:text-[#AEEA30] transition-colors">Prize</a></li>
              <li><a href="#steps" className="!text-white hover:text-[#AEEA30] transition-colors">Steps</a></li>

              {/* Make it open the popup */}
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

              {/* (Optional) Link version that also opens on direct load: */}
              {/* <li><a href="#waitlist" onClick={openWaitlist} className="!text-white hover:text-[#AEEA30] transition-colors">Join our waitlist</a></li> */}
            </ul>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-end">
            <h4 className="text-xl font-semibold mb-5 !text-white">Social</h4>
            <div className="flex flex-col space-y-4">
              <div className="rounded-md p-2">
                <a
                  href="https://www.instagram.com/beres.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white hover:text-[#E4405F] transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
              <div className="rounded-md p-2">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white hover:text-[#1877F2] transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center w-full justify-center md:flex-row md:items-center md:justify-between mt-16 pt-8 text-sm">
          <p className="!text-[#AEEA30] font-semibold">Designed by Beres</p>
          <div className="flex flex-wrap gap-8 mt-6 md:mt-0 text-gray-400">
            {/* Bonus: prominent CTA in footer */}
            <button
              onClick={openWaitlist}
              className="bg-[#AEEA30] text-black px-4 py-2 rounded-lg font-semibold hover:brightness-95 active:scale-[0.98] transition"
            >
              Join our waitlist
            </button>
            <button onClick={() => setShowPrivacy(true)} className="!text-[#AEEA30]">Privacy policy</button>
            <button onClick={() => setShowTerms(true)} className="!text-[#AEEA30]">Terms of use</button>
            <span className="!text-[#AEEA30]"> © 2025 Beres. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Popups */}
      <TermPopup isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPopup isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <ImprintPopup isOpen={showImprint} onClose={() => setShowImprint(false)} />
      <WaitlistPopup
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        // give it an id for aria-controls above
        // @ts-ignore – if your WaitlistPopup doesn't forward id, you can wrap its root div with id
        id="waitlist-popup"
      />
    </footer>
  );
};

export default FooterSection;
