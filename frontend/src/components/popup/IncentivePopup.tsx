import React from "react";

const IncentivePopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="relative flex flex-col items-center">
      {/* Fireworks AROUND image */}
      <div className="absolute -inset-24 pointer-events-none z-30">
        <div className="firework f1 top-0 left-1/2" />
        <div className="firework f2 bottom-0 left-1/2" />
        <div className="firework f3 left-0 top-1/2" />
        <div className="firework f4 right-0 top-1/2" />
        <div className="firework f5 top-0 left-0" />
        <div className="firework f6 top-0 right-0" />
        <div className="firework f7 bottom-0 left-0" />
        <div className="firework f8 bottom-0 right-0" />
      </div>

      {/* Popup image */}
      <img
        src="/Group168.svg"
        alt="Special Incentive"
        className="relative w-[90vw] max-w-2xl rounded-2xl shadow-2xl z-10"
      />

      {/* Close button inside image */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-400 text-[64px] leading-none z-40 font-bold"
        aria-label="Close"
      >
        X
      </button>

      {/* Catch up now button overlapping bottom */}
      <button
        onClick={() => alert("Catch up now clicked!")}
        className="absolute -bottom-6 bg-lime-400 text-black font-bold py-4 px-8 rounded-full shadow-md hover:bg-lime-500 transition z-40"
      >
        Catch up now
      </button>
    </div>

    {/* Firework CSS */}
    <style>{`
      .firework {
        position: absolute;
        width: 12px; 
        height: 12px;
        background: transparent;
        border-radius: 50%;
        filter: drop-shadow(0 0 4px rgba(255,255,255,0.8));
        opacity: 0;
      }

      .f1 { animation: burst 1.5s linear infinite; }
      .f2 { animation: burst 1.5s linear 0.3s infinite; }
      .f3 { animation: burst 1.5s linear 0.6s infinite; }
      .f4 { animation: burst 1.5s linear 0.9s infinite; }
      .f5 { animation: burst 1.5s linear 1.2s infinite; }
      .f6 { animation: burst 1.5s linear 1.5s infinite; }
      .f7 { animation: burst 1.5s linear 1.8s infinite; }
      .f8 { animation: burst 1.5s linear 2.1s infinite; }

      @keyframes burst {
        0% {
          box-shadow:
            0 0 #fff,
            0 0 #fff,
            0 0 #fff,
            0 0 #fff;
          opacity: 1;
        }
        50% {
          box-shadow:
            0 -100px #ffea00,
            80px -80px #ff4d4f,
            100px 0 #40a9ff,
            -80px 80px #73d13d;
          opacity: 1;
        }
        100% {
          box-shadow:
            0 -140px #ffea00,
            120px -120px #ff4d4f,
            140px 0 #40a9ff,
            -120px 120px #73d13d;
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

export default IncentivePopup;
