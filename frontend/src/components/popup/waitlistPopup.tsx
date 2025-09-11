import React, { useState } from 'react';
import { WaitlistSubmitUseCase } from '../../useCase/waitlist/WaitlistSubmitUseCase';
import { useToast } from '../toast/ToastContext';
import { WaitlistHelper } from '../../helper/waitlistHelper/waitlistHelper';

interface WaitlistPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        business: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { addToast } = useToast();

    const waitlistUseCase = new WaitlistSubmitUseCase();

    // Close modal on Escape key press
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const waitlistHelper = new WaitlistHelper();
            const response = await waitlistHelper.submit(formData);

            if (response.success) {
                addToast({
                    type: 'success',
                    message: '🎉 Successfully joined the waitlist! We\'ll notify you soon.',
                    duration: 5000
                });

                // Reset form
                setFormData({
                    email: '',
                    first_name: '',
                    last_name: '',
                    phone: '',
                    business: ''
                });

                onClose();
            } else {
                addToast({
                    type: 'error',
                    message: response.message || 'Failed to join waitlist. Please try again.',
                    duration: 5000
                });
            }
        } catch (error) {
            addToast({
                type: 'error',
                message: 'Something went wrong. Please try again later.',
                duration: 5000
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-[#012219] to-[#0B1E18] p-6 text-white relative">
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            aria-label="Close waitlist popup"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#AEEA30]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[#AEEA30]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <h2 className="!text-[#AEEA30] text-xl font-bold mb-2">Join Our Waitlist</h2>
                        <p className="!text-[#ffffff] text-sm">
                            Be the first to know when we launch! Get exclusive early access.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 text-black">
                    {/* Email Field - Required */}
                    <div className='mb-4'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#AEEA30] focus:border-[#AEEA30] transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your email address"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Name Fields - Optional */}
                    {/* <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Doe"
                            />
                        </div>
                    </div> */}

                    {/* Phone Field - Optional */}
                    {/* <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div> */}

                    {/* Business Field - Optional */}
                    {/* <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                            Business/Company
                        </label>
                        <input
                            type="text"
                            id="business"
                            name="business"
                            value={formData.business}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your company name"
                        />
                    </div> */}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-6 rounded-xl font-medium text-black transition-all duration-200 ${isLoading
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-gradient-to-r from-[#AEEA30] to-[#A7E34A] hover:from-[#9cd426] hover:to-[#82C341] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                            }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Joining Waitlist...
                            </div>
                        ) : (
                            'Let’s Beres This!'
                        )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center mt-4">
                        By joining, you agree to receive updates about our launch. We respect your privacy and won't spam you.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default WaitlistPopup;