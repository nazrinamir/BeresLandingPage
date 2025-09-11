// components/Navbar.tsx
import { useState } from "react";
import WaitlistPopup from "../popup/waitlistPopup";

const links = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Steps", href: "#steps" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);

  return (<>
    <WaitlistPopup
      isOpen={showWaitlistPopup}
      onClose={() => setShowWaitlistPopup(false)}
    />
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto drop-shadow-[0_0_10px_#012219] backdrop-blur-sm rounded-3xl ">

      <nav className={`mx-auto max-w-4xl transition-all duration-300 ease-in-out rounded-3xl border border-white/10 bg-[#012219]/50 py-1 shadow-lg h-full overflow-hidden`}>
        <div className="flex items-center px-4 sm:px-4 py-1.5 gap-4 text-sm">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/bereslogo.svg"
              alt="Beres Logo"
              className="h-5.5 w-full"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden sm:flex text-lg items-center gap-5 mx-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="!text-white/80 hover:text-white leading-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            {/* CTA */}
            <button
              onClick={() => setShowWaitlistPopup(true)}
              className="hidden sm:inline-flex h-8 items-center rounded-full text-md bg-lime-400 px-3.5 font-semibold !text-black hover:bg-lime-300 transition"
            >
              Join our waitlist
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="sm:hidden h-8 w-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/90 transition-transform duration-200 hover:scale-105"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
              >
                {open ? (
                  // X icon when open
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  // Hamburger icon when closed
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer with slide animation */}
        <div className={`sm:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${open
          ? 'max-h-96 opacity-100 translate-y-0'
          : 'max-h-0 opacity-0 -translate-y-2'
          }`}>
          <div className="px-4 py-3 text-sm">
            <ul className="flex flex-col gap-3">
              {links.map((l, index) => (
                <li
                  key={l.href}
                  className={`transition-all duration-300 ease-in-out ${open
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                    }`}
                  style={{
                    transitionDelay: open ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 !text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li
                className={`transition-all duration-300 ease-in-out ${open
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
                  }`}
                style={{
                  transitionDelay: open ? `${links.length * 50}ms` : '0ms'
                }}
              >
                <button
                  onClick={() => { setShowWaitlistPopup(true); setOpen(false); }}
                  className="w-full block rounded-full bg-[#AEEA30] px-4 py-2 text-center font-semibold !text-black hover:bg-[#9DD428] transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Join our waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>

  );
}
