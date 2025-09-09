import React from "react";

const IncentivePopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    {/* Firework container (optional, can remove if not needed) */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="firework firework1"></div>
      <div className="firework firework2"></div>
      <div className="firework firework3"></div>
    </div>

    {/* Image wrapper */}
    <div className="relative">
      {/* Your popup image */}
      <img
        src="/Incentive.svg" 
        alt="Special Incentive"
        className="rounded-2xl shadow-2xl max-w-sm w-full"
      />

      {/* Close button on top of the image */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 bg-white/80 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-white"
        aria-label="Close"
      >
        &times;
      </button>
    </div>

    {/* Firework CSS */}
    <style>
      {`
      .firework {
        position: absolute;
        width: 6px;
        height: 6px;
        background: transparent;
        border-radius: 50%;
        left: 50%;
        top: 60%;
        pointer-events: none;
        z-index: 60;
      }
      .firework1 {
        animation: firework 1.2s infinite linear;
      }
      .firework2 {
        animation: firework 1.2s infinite linear 0.4s;
      }
      .firework3 {
        animation: firework 1.2s infinite linear 0.8s;
      }
      @keyframes firework {
        0% {
          box-shadow:
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d,
            0 0 #ffec3d;
          opacity: 1;
        }
        60% {
          box-shadow:
            0 -40px #ffec3d,
            28px -28px #ff4d4f,
            40px 0 #40a9ff,
            28px 28px #73d13d,
            0 40px #ff85c0,
            -28px 28px #ffec3d,
            -40px 0 #ff4d4f,
            -28px -28px #40a9ff;
          opacity: 1;
        }
        100% {
          box-shadow:
            0 -60px #ffec3d,
            42px -42px #ff4d4f,
            60px 0 #40a9ff,
            42px 42px #73d13d,
            0 60px #ff85c0,
            -42px 42px #ffec3d,
            -60px 0 #ff4d4f,
            -42px -42px #40a9ff;
          opacity: 0;
        }
      }
      `}
    </style>
  </div>
);

export default IncentivePopup;
