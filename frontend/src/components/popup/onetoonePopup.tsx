import React, { useState } from 'react'
import { MeetingHelper } from '../../helper/meetingHelper/meetingHelper';
import { useToast } from '../toast';

interface OneToOnePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    full_name: string;
    phone: string;
    email: string;
    business: string;
}

const OneToOnePopup: React.FC<OneToOnePopupProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        full_name: '',
        phone: '',
        email: '',
        business: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const { addToast } = useToast();

    if (!isOpen) return null;

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.full_name.trim()) {
            newErrors.full_name = 'Name is required';
            addToast({
                type: 'warning',
                message: 'Name is required',
                duration: 5000
            });
        }

        // Phone validation - only digits allowed
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
            addToast({
                type: 'warning',
                message: 'Phone is required',
                duration: 5000
            });
        } else {
            // Regex to check if phone contains only digits (and optional + at the beginning)
            const phoneRegex = /^\+?[0-9]+$/;
            if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Phone number must contain only digits';
                addToast({
                    type: 'warning',
                    message: 'Phone number must contain only digits',
                    duration: 5000
                });
            } else if (formData.phone.replace(/^\+/, '').length < 8) {
                newErrors.phone = 'Phone number must be at least 8 digits';
                addToast({
                    type: 'error',
                    message: 'Phone number must be at least 8 digits',
                    duration: 5000
                });
            } else if (formData.phone.replace(/^\+/, '').length > 15) {
                newErrors.phone = 'Phone number must be at most 15 digits';
                addToast({
                    type: 'error',
                    message: 'Phone number must be at most 15 digits',
                    duration: 5000
                });
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            addToast({
                type: 'warning',
                message: 'Email is required',
                duration: 5000
            });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            addToast({
                type: 'error',
                message: 'Email is invalid',
                duration: 5000
            });
        }

        if (!formData.business.trim()) { newErrors.business = 'Business is required' 
            addToast({
                type: 'warning',
                message: 'Business is required',
                duration: 5000
            });
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Add your API call here
            const meetingHelper = new MeetingHelper();
            const response = await meetingHelper.submit(formData);

            console.log(response);

            // Reset form and close modal on success
            setFormData({ full_name: '', phone: '', email: '', business: '' });
            onClose();

            // You might want to show a success message here
            addToast({
                type: 'success',
                message: 'Meeting request submitted successfully!',
                duration: 5000
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            addToast({
                type: 'error',
                message: 'Error submitting form. Please try again.',
                duration: 5000
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        // Special handling for phone field - only allow digits and +
        if (field === 'phone') {
            // Remove any non-digit characters except + at the beginning
            const cleanedValue = value.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
            setFormData(prev => ({ ...prev, [field]: cleanedValue }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }

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

    // Form field configuration
    const formFields = [
        { key: 'full_name' as keyof FormData, type: 'text', placeholder: 'Your Full Name' },
        { key: 'phone' as keyof FormData, type: 'tel', placeholder: 'Phone Number' },
        { key: 'email' as keyof FormData, type: 'email', placeholder: 'Email Address' },
        { key: 'business' as keyof FormData, type: 'text', placeholder: 'Business/Company Name' }
    ];

    const getInputClassName = (fieldKey: keyof FormData) => {
        return `w-full bg-gray-50 border rounded-xl px-4 py-2 text-sm shadow-sm transition placeholder-gray-400 focus:outline-none focus:ring-2 ${errors[fieldKey]
            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
            : 'border-gray-200 focus:border-[#AEEA30] focus:ring-[#AEEA30]/20'
            }`;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn p-4"
            onClick={handleBackdropClick}
        >
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-modalPop overflow-hidden ">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white hover:text-[#AEEA30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#AEEA30]/30 rounded-full p-1 z-10"
                    onClick={onClose}
                    aria-label="Close contact form"
                    type="button"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex flex-col items-center py-8 px-8 bg-gradient-to-r from-[#012b20] to-[#0B1E18] text-white relative rounded-t-2xl">
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
                    <p className="text-gray-200 text-sm text-center leading-relaxed">
                        Let's discuss how we can help grow your business. Fill out the form below and we'll get back to you soon.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 p-8 text-black">
                    {formFields.map((field) => (
                        <div key={field.key}>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                value={formData[field.key]}
                                onChange={(e) => handleInputChange(field.key, e.target.value)}
                                className={getInputClassName(field.key)}
                                disabled={isSubmitting}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 md:text-[12px] text-[10px] mt-0.5">{errors[field.key]}</p>
                            )}
                        </div>
                    ))}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
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
                <p className="text-xs text-gray-500 text-center mt-1 p-2">
                    Beres team will contact you to schedule your meeting. <br />See you soon!
                </p>
            </div>
        </div>
    );
};

export default OneToOnePopup;