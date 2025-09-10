import React from 'react';
import BaseModal from './BaseModal';

interface TermPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

// Color constant for easy future changes
const BRAND_COLOR = '#AEEA30';

const TermPopup: React.FC<TermPopupProps> = ({ isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Terms of Use"
            subtitle="Last updated: September 2025"
        >
            {/* Introduction */}
            <section className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    Welcome to <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>! These Terms of Use ("Terms") govern your use of our platform and services.
                    By accessing or using <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>, you agree to be bound by these Terms. If you disagree with any part
                    of these terms, then you may not access the service.
                </p>
            </section>

            {/* 1. Acceptance of Terms */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">1. Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    By creating an account or using our services, you acknowledge that you have read, understood,
                    and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors,
                    users, and others who access or use our service.
                </p>
            </section>

            {/* 2. Description of Service */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">2. Description of Service</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> provides a comprehensive business management platform that helps streamline operations,
                    manage customer relationships, and automate business processes. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Customer relationship management tools</li>
                    <li>Order processing and management</li>
                    <li>WhatsApp business integration</li>
                    <li>Automated workflow solutions</li>
                    <li>Business analytics and reporting</li>
                </ul>
            </section>

            {/* 3. User Accounts */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">3. User Accounts</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    To access certain features of our service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Providing accurate, current, and complete information during registration</li>
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Immediately notifying us of any unauthorized use of your account</li>
                </ul>
            </section>

            {/* 4. Acceptable Use */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">4. Acceptable Use</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    You agree not to use our service to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Send spam, unsolicited messages, or engage in harassment</li>
                    <li>Upload malicious code, viruses, or harmful content</li>
                    <li>Interfere with or disrupt our services or servers</li>
                    <li>Access another user's account without permission</li>
                    <li>Use our service for any illegal or unauthorized purpose</li>
                </ul>
            </section>

            {/* 5. Data and Privacy */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">5. Data and Privacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We take your privacy seriously. Our collection, use, and protection of your personal information
                    is governed by our Privacy Policy. By using our service, you consent to the collection and use
                    of your information as outlined in our Privacy Policy.
                </p>
            </section>

            {/* 6. Subscription and Payment */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">6. Subscription and Payment</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    Some features of our service require a paid subscription. By subscribing, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Pay all applicable fees as described in your subscription plan</li>
                    <li>Automatic renewal unless cancelled before the renewal date</li>
                    <li>Our refund policy as stated in your subscription agreement</li>
                </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">7. Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    The service and its original content, features, and functionality are owned by <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">8. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    In no event shall <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>, its directors, employees, partners, agents, suppliers, or affiliates
                    be liable for any indirect, incidental, special, consequential, or punitive damages, including
                    without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
                    from your use of the service.
                </p>
            </section>

            {/* 9. Termination */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">9. Termination</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We may terminate or suspend your account and access to the service immediately, without prior
                    notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
            </section>

            {/* 10. Changes to Terms */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">10. Changes to Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material,
                    we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Contact Us</h3>
                <p className="text-gray-700 leading-relaxed mb-2 text-left">
                    If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="text-gray-700 text-left">
                    <p>Email: legal@beres.com</p>
                    <p>Address: <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> Software Solutions</p>
                    <p className="text-sm text-gray-600 mt-4">
                        These terms are effective as of January 1, 2025.
                    </p>
                </div>
            </section>
        </BaseModal>
    );
};

export default TermPopup;