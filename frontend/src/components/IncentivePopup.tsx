import React from 'react';

const IncentivePopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    {/* Firework container */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="firework firework1"></div>
      <div className="firework firework2"></div>
      <div className="firework firework3"></div>
    </div>
    {/* Gradient border wrapper */}
    <div className="p-1 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-2xl">
      <div className="bg-white text-black p-8 rounded-2xl relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🎉</span>
          <h2 className="text-3xl font-extrabold mb-2 text-yellow-600 text-center drop-shadow">Special Incentive!</h2>
          <p className="mb-4 text-center text-lg">
            Fill in your details and get a <span className="font-bold text-pink-600">special reward</span>!<br />
            Don’t miss out on this exclusive offer.
          </p>
          <button
            className="btn-primary w-full mt-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
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
