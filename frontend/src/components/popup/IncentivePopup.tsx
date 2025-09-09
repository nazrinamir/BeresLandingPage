import React from "react";

const IncentivePopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="relative flex flex-col items-center">

      <div className="absolute -inset-16 pointer-events-none z-30">
        <div className="firework f1" />
        <div className="firework f2" />
        <div className="firework f3" />
      </div>

      <img
        src="/Group168.svg"
        alt="Special Incentive"
        className="relative w-[90vw] max-w-2xl rounded-2xl shadow-2xl z-10"
      />

      {/* Close button inside image */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-400 text-4xl z-40"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Catch up now button overlapping bottom */}
      <button
        onClick={() => alert("Catch up now clicked!")}
        className="absolute -bottom-4 bg-lime-400 text-black font-bold py-4 px-8 rounded-full shadow-md hover:bg-lime-500 transition z-40"
      >
        Catch up now
      </button>
    </div>

    {/* Firework CSS */}
    <style>{`
      .firework {
        position: absolute;
        width: 8px; height: 8px;
        background: transparent;
        border-radius: 50%;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
        opacity: 0;
      }
      /* three slightly different centers so bursts feel around the image */
      .f1 { animation: burst 1.4s linear infinite; }
      .f2 { animation: burst 1.4s linear 0.35s infinite; }
      .f3 { animation: burst 1.4s linear 0.7s infinite; }

      @keyframes burst {
        0% {
          box-shadow:
            0 0   #fff,
            0 0   #fff,
            0 0   #fff,
            0 0   #fff,
            0 0   #fff,
            0 0   #fff,
            0 0   #fff,
            0 0   #fff;
          opacity: 1;
        }
        55% {
          /* medium ring */
          box-shadow:
            0  -70px #ffea00,
            50px -50px #ff4d4f,
            70px   0  #40a9ff,
            50px  50px #73d13d,
            0    70px #ff85c0,
           -50px  50px #ffea00,
           -70px   0  #ff4d4f,
           -50px -50px #40a9ff;
          opacity: 1;
        }
        100% {
          /* outer ring */
          box-shadow:
            0  -95px #ffea00,
            68px -68px #ff4d4f,
            95px   0  #40a9ff,
            68px  68px #73d13d,
            0     95px #ff85c0,
           -68px  68px #ffea00,
           -95px   0  #ff4d4f,
           -68px -68px #40a9ff;
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

export default IncentivePopup;
