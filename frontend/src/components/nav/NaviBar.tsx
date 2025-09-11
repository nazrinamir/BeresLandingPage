// components/Navbar.tsx
import { useState } from "react";
import WaitlistPopup from "../popup/waitlistPopup";

const links = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Steps", href: "#steps" },
];
1
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (<>
    <WaitlistPopup
      isOpen={open}
      onClose={() => setOpen(false)}
    />
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto">

      <nav className={`mx-auto max-w-4xl  ${open ? 'rounded-3xl' : 'rounded-full'} border border-white/10 bg-black/30 backdrop-blur shadow-lg mt-4 h-full`}>
        <div className="flex items-center px-4 sm:px-5 py-1.5 gap-4 text-sm">
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
              onClick={() => setOpen(true)}
              className="hidden sm:inline-flex h-8 items-center rounded-full text-md bg-lime-400 px-3.5 font-semibold !text-black hover:bg-lime-300 transition"
            >
              Join our waitlist
            </button>



            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="sm:hidden h-8 w-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/90"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="sm:hidden border-t border-white/10 px-4 py-3 text-sm">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 !text-white hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[#AEEA30] px-4 py-2 text-center font-semibold !text-black hover:bg-[#9DD428]"
                >
                  Join our waitlist
                </a>
              </li>
            </ul>

          </div>
        )}
      </nav>
    </div>
  </>

  );
}
