import React from 'react';
import BaseModal from './BaseModal';

interface PrivacyPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

// Color constant for easy future changes
const BRAND_COLOR = '#AEEA64';

const PrivacyPopup: React.FC<PrivacyPopupProps> = ({ isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Privacy Policy"
            subtitle="Last updated: September 2025"
        >
            <div className="prose prose-gray max-w-none">
                {/* Header Section */}
                <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                </div>

                {/* Interpretation and Definitions Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-green-500 pl-3 sm:pl-4 mb-4 sm:mb-6">Interpretation and Definitions</h2>
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">Interpretation</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Definitions</h3>
                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">For the purposes of this Privacy Policy:</p>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                            <ul className="space-y-3 sm:space-y-4">
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to <span className={`text-[${BRAND_COLOR}] font-semibold`}>Beres</span> , 5-G &amp; 5-1, Jalan Sierra 10/2, Bandar 16 Sierra, 47120 Puchong, Selangor.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Country</strong> refers to:  Malaysia</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Service</strong> refers to the Website.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">Website</strong> refers to <span className={`!text-[${BRAND_COLOR}] font-semibold`}>Beres</span>, accessible from <a href="https://beres.com.my/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline break-all">https://beres.com.my/</a></p>
                                </li>
                                <li className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed"><strong className="text-gray-900">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Collecting and Using Personal Data Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 sm:pl-4 mb-4 sm:mb-6">Collecting and Using Your Personal Data</h2>
                    <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Types of Data Collected</h3>

                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h4 className="text-sm sm:text-md font-medium text-blue-800 mb-2 sm:mb-3">Personal Data</h4>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Usage Data</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h4 className="text-sm sm:text-md font-medium text-green-800 mb-2 sm:mb-3">Usage Data</h4>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">Usage Data is collected automatically when using the Service.</p>
                        <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                            <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                            <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                        </div>
                    </div>
                    <div className="bg-purple-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h4 className="text-sm sm:text-md font-medium text-purple-800 mb-2 sm:mb-3">Information from Third-Party Social Media Services</h4>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <div className="bg-white p-2 sm:p-3 rounded-md text-center border border-purple-200">
                                <span className="text-purple-700 font-medium text-xs sm:text-sm">Google</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-md text-center border border-purple-200">
                                <span className="text-purple-700 font-medium text-xs sm:text-sm">Facebook</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-md text-center border border-purple-200">
                                <span className="text-purple-700 font-medium text-xs sm:text-sm">Instagram</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-md text-center border border-purple-200">
                                <span className="text-purple-700 font-medium text-xs sm:text-sm">Twitter</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-md text-center border border-purple-200 col-span-2 sm:col-span-1">
                                <span className="text-purple-700 font-medium text-xs sm:text-sm">LinkedIn</span>
                            </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                            <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
                        </div>
                    </div>
                    <div className="bg-orange-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h4 className="text-sm sm:text-md font-medium text-orange-800 mb-2 sm:mb-3">Tracking Technologies and Cookies</h4>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-white p-3 sm:p-4 rounded-md border border-orange-200">
                                <h5 className="font-semibold text-orange-800 mb-1 sm:mb-2 text-sm sm:text-base">🍪 Cookies or Browser Cookies</h5>
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-md border border-orange-200">
                                <h5 className="font-semibold text-orange-800 mb-1 sm:mb-2 text-sm sm:text-base">📡 Web Beacons</h5>
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank" className="text-blue-600 hover:text-blue-800 underline break-all">Free Privacy Policy website</a> article.</p>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">We use both Session and Persistent Cookies for the purposes set out below:</p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <div className="bg-white p-4 sm:p-5 rounded-lg border border-orange-200">
                            <h5 className="font-semibold text-orange-800 mb-2 sm:mb-3 text-sm sm:text-base">🔒 Necessary / Essential Cookies</h5>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                <p><span className="font-medium">Type:</span> Session Cookies</p>
                                <p><span className="font-medium">Administered by:</span> Us</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><span className="font-medium">Purpose:</span> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                        </div>

                        <div className="bg-white p-4 sm:p-5 rounded-lg border border-orange-200">
                            <h5 className="font-semibold text-orange-800 mb-2 sm:mb-3 text-sm sm:text-base">✅ Cookies Policy / Notice Acceptance Cookies</h5>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                <p><span className="font-medium">Type:</span> Persistent Cookies</p>
                                <p><span className="font-medium">Administered by:</span> Us</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><span className="font-medium">Purpose:</span> These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        </div>

                        <div className="bg-white p-4 sm:p-5 rounded-lg border border-orange-200">
                            <h5 className="font-semibold text-orange-800 mb-2 sm:mb-3 text-sm sm:text-base">⚙️ Functionality Cookies</h5>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                <p><span className="font-medium">Type:</span> Persistent Cookies</p>
                                <p><span className="font-medium">Administered by:</span> Us</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><span className="font-medium">Purpose:</span> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                        </div>
                    </div>

                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-orange-100 rounded-lg">
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                    </div>
                </section>

                {/* Use of Personal Data Section */}
                <section className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-l-4 border-indigo-500 pl-3 sm:pl-4 mb-3 sm:mb-4">Use of Your Personal Data</h3>
                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">The Company may use Personal Data for the following purposes:</p>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                            </li>
                            <li className="bg-white p-3 sm:p-4 rounded-md border border-indigo-200">
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"><strong className="text-indigo-800">For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg mt-4 sm:mt-6">
                        <h4 className="text-base sm:text-lg font-medium text-indigo-800 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2">🔄</span>
                            Information Sharing
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">We may share Your personal information in the following situations:</p>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🤝</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">With Service Providers</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">💼</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">For Business Transfers</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🏢</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">With Affiliates</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🤝</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">With Business Partners</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">We may share Your information with Our business partners to offer You certain products, services or promotions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">👥</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">With Other Users</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-indigo-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">✅</span>
                                    <div>
                                        <h5 className="font-semibold text-indigo-800 mb-1 sm:mb-2 text-sm sm:text-base">With Your Consent</h5>
                                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">We may disclose Your personal information for any other purpose with Your consent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Management Sections */}
                    <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                        <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg border border-yellow-200">
                            <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-3 sm:mb-4 flex items-center">
                                <span className="mr-2">🗃️</span>
                                <span className="text-sm sm:text-base">Retention of Your Personal Data</span>
                            </h3>
                            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3 sm:mb-4 flex items-center">
                                <span className="mr-2">🌐</span>
                                <span className="text-sm sm:text-base">Transfer of Your Personal Data</span>
                            </h3>
                            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-4 sm:p-6 rounded-lg border border-red-200">
                            <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-3 sm:mb-4 flex items-center">
                                <span className="mr-2">🗑️</span>
                                <span className="text-sm sm:text-base">Delete Your Personal Data</span>
                            </h3>
                            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                                <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                                <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                                <div className="bg-red-100 p-2 sm:p-3 rounded-md mt-2 sm:mt-3">
                                    <p className="text-red-800 font-medium text-xs sm:text-sm">⚠️ Important Note:</p>
                                    <p className="text-red-700 text-xs sm:text-sm">Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclosure Section */}
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 mt-4 sm:mt-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 flex items-center">
                            <span className="mr-2">⚖️</span>
                            <span className="text-sm sm:text-base">Disclosure of Your Personal Data</span>
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-300">
                                <h4 className="text-sm sm:text-md font-medium text-gray-800 mb-2 sm:mb-3 flex items-center">
                                    <span className="mr-2">💼</span>
                                    <span className="text-sm sm:text-base">Business Transactions</span>
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                            </div>

                            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-300">
                                <h4 className="text-sm sm:text-md font-medium text-gray-800 mb-2 sm:mb-3 flex items-center">
                                    <span className="mr-2">👮</span>
                                    <span className="text-sm sm:text-base">Law Enforcement</span>
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                            </div>

                            <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-300">
                                <h4 className="text-sm sm:text-md font-medium text-gray-800 mb-2 sm:mb-3 flex items-center">
                                    <span className="mr-2">📋</span>
                                    <span className="text-sm sm:text-base">Other Legal Requirements</span>
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                                <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                                    <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>Comply with a legal obligation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>Protect and defend the rights or property of the Company</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>Prevent or investigate possible wrongdoing in connection with the Service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>Protect the personal safety of Users of the Service or the public</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>Protect against legal liability</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200 mt-4 sm:mt-6">
                        <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2">🔒</span>
                            <span className="text-sm sm:text-base">Security of Your Personal Data</span>
                        </h3>
                        <div className="bg-white p-3 sm:p-4 rounded-lg border border-green-300">
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                        </div>
                    </div>
                </section>

                {/* Additional Sections */}
                <section className="space-y-6 sm:space-y-8">
                    {/* Children's Privacy */}
                    <div className="bg-pink-50 p-4 sm:p-6 rounded-lg border border-pink-200">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-pink-500 pl-3 sm:pl-4 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2 sm:mr-3">👶</span>
                            <span className="text-base sm:text-xl">Children's Privacy</span>
                        </h2>
                        <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
                            <p>If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                            <div className="bg-pink-100 p-3 sm:p-4 rounded-lg">
                                <p className="text-pink-800 font-medium text-xs sm:text-sm">📝 Parental Consent:</p>
                                <p className="text-pink-700 text-xs sm:text-sm">If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                            </div>
                        </div>
                    </div>

                    {/* Links to Other Websites */}
                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 sm:pl-4 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2 sm:mr-3">🔗</span>
                            <span className="text-base sm:text-xl">Links to Other Websites</span>
                        </h2>
                        <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-lg">
                                <p className="text-blue-800 font-medium text-xs sm:text-sm">⚠️ Disclaimer:</p>
                                <p className="text-blue-700 text-xs sm:text-sm">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                            </div>
                        </div>
                    </div>

                    {/* Changes to Privacy Policy */}
                    <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-amber-500 pl-3 sm:pl-4 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2 sm:mr-3">📋</span>
                            <span className="text-base sm:text-xl">Changes to this Privacy Policy</span>
                        </h2>
                        <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                            <div className="bg-amber-100 p-3 sm:p-4 rounded-lg">
                                <p className="text-amber-800 font-medium text-xs sm:text-sm">🔄 Regular Review:</p>
                                <p className="text-amber-700 text-xs sm:text-sm">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 border-l-4 border-green-500 pl-3 sm:pl-4 mb-3 sm:mb-4 flex items-center">
                            <span className="mr-2 sm:mr-3">📞</span>
                            <span className="text-base sm:text-xl">Contact Us</span>
                        </h2>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">If you have any questions about this Privacy Policy, You can contact us:</p>
                        <div className="space-y-3 sm:space-y-0 sm:grid sm:gap-4 sm:grid-cols-1 md:grid-cols-2">
                            <div className="bg-white p-4 sm:p-5 rounded-lg border border-green-300 hover:shadow-lg transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 sm:mr-3 text-xl sm:text-2xl">📧</span>
                                    <div>
                                        <h4 className="font-medium text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Email Support</h4>
                                        <p className="text-gray-700 text-xs sm:text-sm">
                                            <a href="mailto:contact@beres.com.my" className="text-blue-600 hover:text-blue-800 underline font-medium break-all">
                                                contact@<span className={`!text-[${BRAND_COLOR}] font-semibold`}>beres</span>.com.my
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 sm:p-5 rounded-lg border border-green-300 hover:shadow-lg transition-shadow">
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 sm:mr-3 text-xl sm:text-2xl">🌐</span>
                                    <div>
                                        <h4 className="font-medium text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Visit Our Website</h4>
                                        <p className="text-gray-700 text-xs sm:text-sm">
                                            <a href="https://beres.com.my/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline font-medium break-all">
                                                https://<span className={`!text-[${BRAND_COLOR}] font-semibold`}>beres</span>.com.my/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </BaseModal >
    );
};

export default PrivacyPopup;