import React from 'react';
import BaseModal from './BaseModal';

interface PrivacyPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

// Color constant for easy future changes
const BRAND_COLOR = '#AEEA30';

const PrivacyPopup: React.FC<PrivacyPopupProps> = ({ isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Privacy Policy"
            subtitle="Last updated: September 2025"
        >
            {/* Introduction */}
            <section className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    At <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>, we are committed to protecting your privacy and ensuring the security of your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">1. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.
                </p>

                <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">Personal Information:</h4>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Name, email address, and contact information</li>
                    <li>Business information and company details</li>
                    <li>Account credentials and authentication data</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                </ul>

                <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">Usage Information:</h4>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Device information and IP addresses</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our platform</li>
                    <li>Feature usage and interaction patterns</li>
                    <li>Error logs and performance data</li>
                </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">2. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> uses your information to provide, maintain, and improve our services. Specifically, we use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>Provide and operate our business management platform</li>
                    <li>Process transactions and manage your account</li>
                    <li>Send important updates and notifications</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                </ul>
            </section>

            {/* 3. Information Sharing and Disclosure */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">3. Information Sharing and Disclosure</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                </ul>
            </section>

            {/* 4. Data Security */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">4. Data Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> implements robust security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Secure data storage with industry-standard protocols</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection practices</li>
                </ul>
            </section>

            {/* 5. Data Retention */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">5. Data Retention</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.
                    We may retain certain information for longer periods when required by law or for legitimate business purposes.
                </p>
            </section>

            {/* 6. Your Rights and Choices */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">6. Your Rights and Choices</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
            </section>

            {/* 7. Cookies and Tracking Technologies */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">7. Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We use cookies and similar technologies to enhance your experience on our platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-left">
                    <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                </ul>
            </section>

            {/* 8. Third-Party Integrations */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">8. Third-Party Integrations</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    Our platform integrates with various third-party services (such as WhatsApp Business API, payment processors, and analytics tools).
                    These integrations are governed by the respective privacy policies of those services.
                </p>
            </section>

            {/* 9. International Data Transfers */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">9. International Data Transfers</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place
                    to protect your information in accordance with applicable data protection laws.
                </p>
            </section>

            {/* 10. Children's Privacy */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">10. Children's Privacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> is not intended for use by children under 16 years of age. We do not knowingly collect personal information from children under 16.
                    If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">11. Changes to This Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our platform
                    and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
                </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Contact Us</h3>
                <p className="text-gray-700 leading-relaxed mb-2 text-left">
                    If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <div className="text-gray-700 text-left">
                    <p>Email: privacy@beres.com</p>
                    <p>Data Protection Officer: dpo@beres.com</p>
                    <p>Address: <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> Software Solutions</p>
                    <p className="text-sm text-gray-600 mt-4">
                        This privacy policy is effective as of September 1, 2025.
                    </p>
                </div>
            </section>
        </BaseModal>
    );
};

export default PrivacyPopup;