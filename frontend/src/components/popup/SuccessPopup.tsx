import React, { useEffect } from "react";

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
    isOpen,
    onClose
}) => {
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-xl p-8 mx-4 max-w-sm w-full text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-[64px] leading-none z-40 font-bold"
                >
                    x
                </button>
                {/* Success Icon */}
                <div className="mb-6">
                    <img src="/okaysign.svg" alt="Success" className="w-16 mx-auto" />
                </div>

                {/* Success Message */}
                <h2 className="!text-xl font-semibold text-gray-900 mb-3">
                    Done & <span className="text-[#62E053]">Beres</span> !<br /> We’ve got your email
                </h2>

                <p className="text-gray-600 mb-6">
                    You’re officially on the Beres waitlist!  Get ready.....you’ll be among the very first to experience our launch
                </p>
            </div>
        </div>
    );
};