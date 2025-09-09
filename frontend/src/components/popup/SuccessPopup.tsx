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
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="relative success-popup-bg rounded-lg flex items-end justify-center text-center">
                    <button  onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-400 text-3xl leading-none z-40 font-bold" >
                        
                    </button>
                </div>
            </div>

            <style>{`
                .success-popup-bg {
                    background-image: url('/successverification.svg');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    min-height: 500px;
                    min-width:  500px;
                }
            `}</style>
        </>
    );
};