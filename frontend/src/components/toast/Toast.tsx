import React, { useEffect, useState } from 'react';
import { useToast } from './ToastContext';
import type { ToastType } from '.';

interface ToastProps {
    toast: ToastType;
}

const Toast: React.FC<ToastProps> = ({ toast }) => {
    const { removeToast } = useToast();
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            removeToast(toast.id);
        }, 300); // Match animation duration
    };

    const getToastStyles = () => {
        // Glass-morphism base styles with responsive design
        const baseStyles = "backdrop-blur-lg bg-opacity-20 border border-opacity-30 shadow-2xl rounded-2xl mb-3 " +
            // Mobile styles
            "w-[calc(100vw-2rem)] max-w-sm p-4 mx-4 sm:mx-0 " +
            // Desktop styles  
            "sm:min-w-[320px] sm:max-w-md sm:p-5 sm:w-auto";

        switch (toast.type) {
            case 'success':
                return `${baseStyles} bg-[#AEEA30]/80 border-green-600 text-white shadow-green-500/25`;
            case 'error':
                return `${baseStyles} bg-red-500/80 border-red-600 text-white shadow-red-500/25`;
            case 'warning':
                return `${baseStyles} bg-yellow-500/80 border-yellow-600 text-white shadow-yellow-500/25`;
            case 'info':
                return `${baseStyles} bg-blue-500/80 border-blue-600 text-white shadow-blue-500/25`;
            default:
                return `${baseStyles} bg-gray-500/80 border-gray-600 text-white shadow-gray-500/25`;
        }
    };

    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            case 'error':
                return (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            case 'warning':
                return (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            case 'info':
                return (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className={`
                transform transition-all duration-300 ease-out  
                ${isVisible && !isLeaving
                    ? 'translate-x-0 opacity-100 scale-100'
                    : 'translate-x-full opacity-0 scale-95'
                }
                ${getToastStyles()}
            `}
        >
            <div className="flex items-center">
                {/* Re-enable icons for better UX */}
                {/* {getIcon()} */}
                <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium !text-white drop-shadow-sm break-words">
                        {toast.message}
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="ml-2 sm:ml-4 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-white bg-opacity-20 !text-black hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 text-xs sm:text-sm font-bold"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Toast;
