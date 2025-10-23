import React from "react";

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
    isOpen,
    onClose
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
            <div className="bg-[#012219] rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                    aria-label="Close success popup"
                >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Illustration Section - Using SVG */}
                <div className="relative px-4 pt-6 pb-2">
                    <div className="flex justify-center items-center">
                        <img
                            src="/popup.svg"
                            alt="Success illustration"
                            className="w-full h-auto max-h-64 object-contain"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="px-8 pb-8">
                    {/* Heading */}
                    <h2 className="!text-[#99FF33] text-2xl font-bold text-center mb-4">
                        You're part of our inner circle!
                    </h2>

                    <div className="text-sm leading-relaxed mb-6 space-y-2 ">
                        <p className="!text-white">You're officially one of the first to join Beres!</p>
                        <p className="!text-white">Beres is a tool that helps small entrepreneurs manage their business straight from WhatsApp.</p>
                        <p className="!text-white">We'll keep you updated with early access invites and exclusive sneak peeks before launch.</p>
                    </div>

                    {/* CTA Button - closes the popup */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full py-4 px-6 bg-[#99FF33] text-[#012219] font-bold text-lg rounded-xl hover:bg-[#88E62A] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Beres!
                    </button>
                </div>
            </div>
        </div>
    );
};