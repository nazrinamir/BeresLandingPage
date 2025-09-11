import React, { useState } from 'react'

interface OneToOnePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    business: string;
}

const OneToOnePopup: React.FC<OneToOnePopupProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        business: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    if (!isOpen) return null;

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.business.trim()) newErrors.business = 'Business is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Add your API call here
            console.log('Form submitted:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form and close modal on success
            setFormData({ name: '', phone: '', email: '', business: '' });
            onClose();

            // You might want to show a success message here
            alert('Meeting request submitted successfully!');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn p-4"
            onClick={handleBackdropClick}
        >
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-modalPop">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#012219] transition-colors focus:outline-none focus:ring-2 focus:ring-[#AEEA30]/30 rounded-full p-1"
                    onClick={onClose}
                    aria-label="Close contact form"
                    type="button"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex flex-col items-center mb-3 bg-gradient-to-r from-[#012219] to-[#0B1E18] text-white relative">
                    {/* Meeting Icon */}
                    <div className="mb-4 p-3 bg-[#AEEA30]/20 rounded-full">
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#AEEA30]">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    
                    <h2 className="text-2xl font-bold !text-[#ffffff] text-center mb-2">Schedule One-to-One Meeting</h2>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                        Let's discuss how we can help grow your business. Fill out the form below and we'll get back to you soon.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`w-full bg-gray-50 border rounded-xl px-4 py-3 shadow-sm transition placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.name
                                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                                : 'border-gray-200 focus:border-[#AEEA30] focus:ring-[#AEEA30]/20'
                                }`}
                            disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full bg-gray-50 border rounded-xl px-4 py-3 shadow-sm transition placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.phone
                                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                                : 'border-gray-200 focus:border-[#AEEA30] focus:ring-[#AEEA30]/20'
                                }`}
                            disabled={isSubmitting}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full bg-gray-50 border rounded-xl px-4 py-3 shadow-sm transition placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.email
                                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                                : 'border-gray-200 focus:border-[#AEEA30] focus:ring-[#AEEA30]/20'
                                }`}
                            disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Business Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Business/Company Name"
                            value={formData.business}
                            onChange={(e) => handleInputChange('business', e.target.value)}
                            className={`w-full bg-gray-50 border rounded-xl px-4 py-3 shadow-sm transition placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.business
                                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                                : 'border-gray-200 focus:border-[#AEEA30] focus:ring-[#AEEA30]/20'
                                }`}
                            disabled={isSubmitting}
                        />
                        {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-xl font-bold text-base shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-gradient-to-r from-[#AEEA30] to-[#A7E34A] hover:from-[#9cd426] hover:to-[#82C341] text-black focus:ring-[#AEEA30]/30 hover:shadow-xl transform hover:-translate-y-0.5'
                            }`}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>SUBMITTING...</span>
                            </div>
                        ) : (
                            'SCHEDULE MEETING'
                        )}
                    </button>
                </form>

                {/* Footer Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                    We'll contact you within 24 hours to schedule your meeting.
                </p>
            </div>
        </div>
    );
};

export default OneToOnePopup;