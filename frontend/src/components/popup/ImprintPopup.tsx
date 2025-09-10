import React from 'react';
import BaseModal from './BaseModal';

interface ImprintPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

// Color constant for easy future changes
const BRAND_COLOR = '#AEEA30';

const ImprintPopup: React.FC<ImprintPopupProps> = ({ isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Imprint"
            subtitle="Legal Information & Company Details"
        >
            {/* Company Information */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Company Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Company Name:</strong> <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> Software Solutions Ltd.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Legal Form:</strong> Private Limited Company
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Registration Number:</strong> 12345678
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>VAT ID:</strong> GB123456789
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Registered Office:</strong> 123 Business Street, Tech District, London, SW1A 1AA, United Kingdom
                    </p>
                </div>
            </section>

            {/* Contact Details */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">General Contact</h4>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Email:</strong> info@beres.com
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Phone:</strong> +44 20 7123 4567
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM GMT
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">Support Contact</h4>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Email:</strong> support@beres.com
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Phone:</strong> +44 20 7123 4568
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <strong>Support Hours:</strong> 24/7 Online Support
                        </p>
                    </div>
                </div>
            </section>

            {/* Management */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Management & Leadership</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Chief Executive Officer:</strong> John Smith
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Chief Technology Officer:</strong> Sarah Johnson
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2 text-left">
                        <strong>Data Protection Officer:</strong> Michael Brown
                    </p>
                    <p className="text-gray-700 leading-relaxed text-left">
                        <strong>Legal Representative:</strong> <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> Legal Department - legal@beres.com
                    </p>
                </div>
            </section>

            {/* Regulatory Information */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Regulatory Information</h3>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">Data Protection</h4>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> is committed to protecting your personal data in accordance with:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-left">
                            <li>General Data Protection Regulation (GDPR)</li>
                            <li>UK Data Protection Act 2018</li>
                            <li>California Consumer Privacy Act (CCPA)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 text-left">Industry Compliance</h4>
                        <p className="text-gray-700 leading-relaxed mb-2 text-left">
                            Our platform complies with industry standards including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-left">
                            <li>ISO 27001 Information Security Management</li>
                            <li>SOC 2 Type II Compliance</li>
                            <li>PCI DSS for Payment Processing</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Intellectual Property</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4 text-left">
                        All content, software, designs, text, graphics, and other materials on the <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> platform are the intellectual property of
                        <span className={`!text-[${BRAND_COLOR}] font-semibold`}> Beres</span> Software Solutions Ltd. and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-left">
                        <strong>Trademarks:</strong> <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>® and the <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> logo are registered trademarks of <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> Software Solutions Ltd.
                    </p>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Disclaimer</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4 text-left">
                        The information provided on the <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> platform is for general informational purposes only. While we strive to keep the information
                        up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
                        suitability, or availability of the information.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-left">
                        <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span> reserves the right to modify, update, or discontinue any aspect of the platform at any time without prior notice.
                    </p>
                </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Dispute Resolution</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4 text-left">
                        <strong>Governing Law:</strong> This imprint and any disputes arising from it shall be governed by and construed in accordance with the laws of England and Wales.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 text-left">
                        <strong>Jurisdiction:</strong> Any legal proceedings relating to our services shall be brought exclusively in the courts of England and Wales.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-left">
                        <strong>Alternative Dispute Resolution:</strong> We encourage resolving disputes through direct communication. For unresolved issues,
                        we participate in alternative dispute resolution procedures.
                    </p>
                </div>
            </section>

            {/* Contact for Legal Matters */}
            <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">Legal Inquiries</h3>
                <p className="text-gray-700 leading-relaxed mb-2 text-left">
                    For legal matters, compliance questions, or regulatory inquiries, please contact:
                </p>
                <div className="text-gray-700 text-left">
                    <p><strong>Legal Department:</strong> legal@beres.com</p>
                    <p><strong>Data Protection Officer:</strong> dpo@beres.com</p>
                    <p><strong>Compliance Officer:</strong> compliance@beres.com</p>
                    <p className="text-sm text-gray-600 mt-4">
                        This imprint was last updated on September 10, 2025.
                    </p>
                </div>
            </section>
        </BaseModal>
    );
};

export default ImprintPopup;