import { useState } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-7 right-5 z-50 bg-[#65d546] text-white p-3 rounded-full shadow-xl hover:bg-[#4bb12e] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#b6f5a7] animate-float"

        aria-label="Open contact form"
      >
        <div className="flex items-center justify-center">
          <i className="bx bxs-phone md:text-[50px] text-[30px]"></i>
        </div>

      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fadeIn">
          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-modalPop">
            {/* Close Button with SVG */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full p-1"
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <div className="flex flex-col items-center mb-6">
              {/* Optional: Add an icon */}
              <div className="mb-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600">
                  <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
              <p className="text-gray-500 text-sm mt-1 text-center">We'd love to hear from you! Fill out the form below.</p>
            </div>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400 resize-none"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-[#65d546] hover:bg-[#4bb12e] text-white py-3 rounded-xl font-bold text-base shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#b6f5a7]"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations (Tailwind CSS custom classes) */}
      <style>{`
        .animate-float {
          animation: float 2.5s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-modalPop {
          animation: modalPop 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
