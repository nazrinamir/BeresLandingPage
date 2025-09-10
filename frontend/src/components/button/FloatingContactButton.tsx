import { useState } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-7 right-5 z-50 bg-[#54b13b] text-white p-3 rounded-full shadow-xl hover:bg-[#4bb12e] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#b6f5a7] animate-float"

        aria-label="Open contact form"
      >
        <div className="flex items-center justify-center">

          <img src="/1to1.svg" alt="1to1" className="w-15 h-15" />
        </div>


      </button >

      {/* Modal Overlay */}
      {
        open && (<></>

        )
      }

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
