
import React, { useState } from 'react';
import { ArrowRight, Download, Award, Target, Users, Shield, ChevronRight, X, Check, Lightbulb, Home, ChartBar } from 'lucide-react';

export default function SmartGenBetaLanding() {
    const [activeTab, setActiveTab] = useState('ios');
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleiOSDownload = () => {
        if (agreedToTerms) {
            window.open('https://testflight.apple.com/join/smartgen-beta', '_blank');
        } else {
            setShowTermsModal(true);
        }
    };

    const handleAndroidDownload = () => {
        if (agreedToTerms) {
            window.open('https://smartgenenergy.com/android-beta', '_blank');
        } else {
            setShowTermsModal(true);
        }
    };

    const openTermsModal = (e) => {
        e.preventDefault();
        setShowTermsModal(true);
    };

    const closeTermsModal = () => {
        setShowTermsModal(false);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src="/smartgen-logo.png"
                                alt="SmartGen Logo"
                                className="h-8 w-auto"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg items-center justify-center hidden">
                                <div className="text-white font-bold text-xs">S</div>
                            </div>
                        </div>
                        <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                            Beta Testing Programme
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-lg text-emerald-700 text-sm font-medium mb-8">
                                <Award className="w-4 h-4" />
                                Exclusive Beta Access • Limited to 300 Participants
                            </div>

                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Discover How Your Home's<br />
                                <span className="text-emerald-600">Energy Performance Stacks Up</span><br />
                                <span className="text-3xl">– Free Beta Access</span>
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                SmartGen analyses your home across 30+ key energy metrics and gives you AI-powered recommendations to improve. See your personalised score, compare against similar homes, and learn how to cut waste – all completely free during beta.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={handleiOSDownload}
                                    className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    <Download className="w-5 h-5" />
                                    TestFlight (iOS)
                                </button>
                                <button
                                    onClick={handleAndroidDownload}
                                    className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    <Download className="w-5 h-5" />
                                    APK Beta (Android)
                                </button>
                            </div>

                            <p className="text-sm text-emerald-700 font-medium mb-12">Free to download, free to use – no cost during beta.</p>

                        </div>

                        <div className="relative">
                            {/* Hero Image */}
                            <div className="relative mb-8">
                                <img
                                    src="/hero.png"
                                    alt="SmartGen Energy Analytics Dashboard"
                                    className="w-3/4 mx-auto h-auto object-contain"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center";
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                                    Beta Preview
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12">
                                        <img
                                            src="/exclusive-badge.png"
                                            alt="Beta Tester Badge"
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl items-center justify-center hidden">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Beta Tester Recognition</h3>
                                        <p className="text-gray-600">Lifetime profile badge</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 pt-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-600">Prize Draw Value</span>
                                        <span className="text-2xl font-bold text-emerald-600">£500</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Available Positions</span>
                                        <span className="text-lg font-semibold text-gray-900">300</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the App Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What is SmartGen?</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            SmartGen is a new UK energy insights app designed to help households understand and improve their energy efficiency. By analysing 30+ factors – from property size and insulation type to heating and usage habits – the app generates a unique energy score. But we don't stop there: SmartGen also uses AI to give you tailored recommendations on how to make your home more efficient.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Home,
                                title: '30+ Energy Metrics',
                                desc: 'Comprehensive analysis of your property including size, insulation, heating systems, and usage patterns to generate your unique energy score.',
                                color: 'from-emerald-400 to-teal-500'
                            },
                            {
                                icon: ChartBar,
                                title: 'Smart Comparisons',
                                desc: 'See how your home performs against similar properties in your area and understand where you stand in energy efficiency.',
                                color: 'from-teal-400 to-cyan-500'
                            },
                            {
                                icon: Lightbulb,
                                title: 'AI-Powered Insights',
                                desc: 'Get personalised recommendations tailored to your home to reduce costs and improve your energy performance score.',
                                color: 'from-cyan-400 to-emerald-500'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How Does Your Home Compare?</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Your energy score isn't just a number. SmartGen benchmarks your home against similar properties so you'll know if you're ahead of the curve or where you could save more.
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Recommendations Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Personalised Insights with AI</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Our AI engine turns complex energy data into simple, practical advice. From reducing heating costs to improving insulation and lighting, SmartGen gives you clear steps to save money and cut your carbon footprint.
                        </p>
                    </div>
                </div>
            </section>

            {/* Beta Tester Benefits Section */}
            <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join the Beta?</h2>
                        <p className="text-xl text-gray-700">Exclusive advantages for beta testing participants</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
                        <ul className="space-y-4">
                            {[
                                'Free access for all testers – no charges during beta',
                                'AI-powered recommendations to improve your home\'s energy score',
                                'Lifetime recognition badge as a founding contributor',
                                'Eligibility for a £500 Amazon voucher prize draw',
                                'Influence the final app with your feedback'
                            ].map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Installation Instructions */}
            {/* Installation Instructions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Installation Instructions</h2>
                        <p className="text-xl text-gray-700">Platform-specific setup procedures</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex border-b border-gray-200 mb-8">
                            <button
                                onClick={() => setActiveTab('ios')}
                                className={`px-8 py-4 font-semibold border-b-3 transition-colors rounded-t-lg ${activeTab === 'ios'
                                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                iOS (TestFlight)
                            </button>
                            <button
                                onClick={() => setActiveTab('android')}
                                className={`px-8 py-4 font-semibold border-b-3 transition-colors rounded-t-lg ${activeTab === 'android'
                                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Android (APK)
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-3xl p-8 shadow-inner">
                            {activeTab === 'ios' ? (
                                <div>
                                    <div className="mb-8">
                                        <img
                                            src="/ios.png" // Updated path for iOS-specific image
                                            alt="iOS TestFlight Installation"
                                            className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                                            onError={(e) => {
                                                console.error('iOS image failed to load');
                                                e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&crop=center';
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Install TestFlight</h3>
                                                <p className="text-gray-700">Download and install TestFlight from the App Store if not already present on your device.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Join Beta Programme</h3>
                                                <p className="text-gray-700">Access "Join Smartgen Beta on iOS (Build: 35)" through the provided TestFlight invitation link.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Complete Installation</h3>
                                                <p className="text-gray-700">Accept the TestFlight invitation and proceed with SmartGen application installation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-8">
                                        <img
                                            src="/andro.png" // Updated path for Android-specific image
                                            alt="Android APK Installation"
                                            className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                                            onError={(e) => {
                                                console.error('Android image failed to load');
                                                e.target.src = 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=400&fit=crop&crop=center';
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Download Beta APK</h3>
                                                <p className="text-gray-700">Access the SmartGen Beta APK through the provided download link for Android devices.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Enable Unknown Sources</h3>
                                                <p className="text-gray-700">If prompted, allow installation from unknown sources in your device security settings.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Install Application</h3>
                                                <p className="text-gray-700">Proceed with the SmartGen application installation and launch the beta version.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gray-900 py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-emerald-900/50 px-4 py-2 rounded-lg text-emerald-300 text-sm font-medium mb-6">
                            <Shield className="w-4 h-4" />
                            Limited Availability • 300 Positions Only
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            Secure Your Beta Testing Position
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join now to receive permanent recognition and prize draw eligibility.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleiOSDownload}
                            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Access iOS Beta
                        </button>
                        <button
                            onClick={handleAndroidDownload}
                            className="px-8 py-4 border-2 border-emerald-400 bg-emerald-400 text-gray-900 rounded-full font-semibold hover:bg-emerald-300 transition-colors flex items-center justify-center gap-3 shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Access Android Beta
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-12">
                <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
                    <p className="text-sm text-gray-700">
                        By participating, you agree to our Beta Testing Terms & Conditions.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-4 md:mb-0">
                            <img
                                src="/smartgen-logo.png"
                                alt="SmartGen Logo"
                                className="h-10 w-auto"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full items-center justify-center hidden">
                                <div className="text-white font-bold text-sm">S</div>
                            </div>
                            <div className="text-gray-900 font-semibold">SmartGen Technology Ltd</div>
                        </div>
                        <div className="text-sm text-gray-700 text-center md:text-right">
                            <p>Registered in England and Wales • Company No. 14816415</p>
                            {/* <p className="mt-2">
                                <a href="#" onClick={openTermsModal} className="text-emerald-600 hover:underline font-medium">
                                    Beta Testing Terms & Conditions
                                </a>
                                {' • '}
                                <a href="/privacy" className="text-emerald-600 hover:underline font-medium">
                                    Privacy Policy
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </footer>

            {/* Terms & Conditions Modal */}
            {showTermsModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-4xl max-h-[100vh] overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">SmartGen Beta Test – Terms and Conditions</h2>
                            <button
                                onClick={closeTermsModal}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] text-sm leading-relaxed text-gray-700">
                            <p className="mb-4 text-gray-600">Last updated: 13 August 2025</p>

                            <p className="mb-6">These Terms and Conditions ("Terms") govern your participation in the SmartGen beta testing programme ("Beta", "Programme") and the associated free prize draw ("Prize Draw"). By clicking a beta download link, installing or using the SmartGen beta app, you agree to these Terms and to our Privacy Policy at [link to privacy policy]. If you do not agree, do not install or use the beta app.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Who we are</h3>
                            <p className="mb-4">"SmartGen", "we", "us" and "our" means SMARTGEN TECHNOLOGY LTD, company number 14816415, registered in England and Wales.</p>
                            <p className="mb-4">Registered office: Direct Save House, Century Court, Tolpits Lane, Watford, United Kingdom, WD18 9RS.</p>
                            <p className="mb-6">Contact: [support@smartgenenergy.com].</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Summary of the Beta</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Pre-release software provided solely for testing and feedback.</li>
                                <li>Participation is free and voluntary.</li>
                                <li>Up to 300 participants ("Testers"); places may be withdrawn or re-allocated at our discretion.</li>
                                <li>Feedback should be posted in the in-app Beta Testing Forum.</li>
                                <li>Eligible Testers receive a unique "SmartGen Beta Tester" badge that will remain on their SmartGen profile after launch.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Eligibility</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>UK residents aged 18+ only. One Beta place and one Prize Draw entry per person.</li>
                                <li>Employees, officers, contractors and agents of SmartGen and their household members are not eligible for the Prize Draw.</li>
                                <li>We may require proof of age, identity, residence and eligibility.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Joining the Beta</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>iOS: Install Apple TestFlight and join via the TestFlight link we provide.</li>
                                <li>Android: Install via the Android beta link we provide.</li>
                                <li>Registration occurs when you follow a download link and install the app; no separate sign-up form is required.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Licence and acceptable use</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Licence: A personal, revocable, non-exclusive, non-transferable licence to install and use the Beta solely for testing during the Programme.</li>
                                <li>Restrictions: Do not copy, distribute, sublicense, sell, reverse engineer, decompile, modify or create derivative works of the Beta, except where this cannot be restricted by law.</li>
                                <li>Security/abuse: Do not attempt to bypass security or interfere with our systems or other users.</li>
                                <li>Availability: Features may change or be withdrawn; we may suspend or end the Beta at any time.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Confidentiality and publicity</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Confidentiality: The Beta may include non-public features. Unless we say otherwise, do not share screenshots, videos or details of unreleased features outside the channels we specify.</li>
                                <li>Winner publicity: If you win the Prize Draw, we may publish your first name and county unless you object (see section 11.8).</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Feedback</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Please provide feedback via the in-app Beta Testing Forum.</li>
                                <li>You grant SmartGen a worldwide, perpetual, irrevocable, royalty-free licence to use, reproduce, adapt, distribute and commercialise your feedback for any purpose.</li>
                                <li>We are not obliged to act on any feedback.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Data protection and privacy</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Controller: SMARTGEN TECHNOLOGY LTD is the data controller for personal data processed in connection with the Beta and the Prize Draw.</li>
                                <li>What we collect: Contact details you provide; technical/device data and diagnostics; in-app activity and crash logs; forum posts; limited tester metadata from Apple TestFlight/Google Play Console.</li>
                                <li>Purposes and lawful bases (UK GDPR): running the Beta and administering participation (legitimate interests); product improvement and analytics (legitimate interests); communicating with you about the Beta (legitimate interests/consent where required); administering the Prize Draw (legitimate interests/contract).</li>
                                <li>Sharing: With service providers (e.g., Apple, Google, analytics and cloud providers) under appropriate safeguards.</li>
                                <li>Retention: For the duration of the Beta and a reasonable period thereafter for audit and product improvement, unless law requires longer or you exercise applicable rights.</li>
                                <li>Your rights: You have rights under UK GDPR and the Data Protection Act 2018 (access, rectification, erasure, restriction, objection, portability). You may complain to the ICO. See our Privacy Policy for details.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Health, safety and usage</h3>
                            <p className="mb-6">The Beta is not guaranteed to be accurate or error-free and should not be relied upon as the sole basis for financial or safety-critical decisions. Please use your own judgement regarding your home and energy use.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Disclaimers and liability</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>The Beta is provided "as is" and "as available" without warranties, conditions or representations of any kind, whether express or implied (including non-infringement, satisfactory quality or fitness for a particular purpose), to the maximum extent permitted by law.</li>
                                <li>Nothing limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot lawfully be limited or excluded.</li>
                                <li>Subject to the above, we will not be liable for loss of profits, revenue, savings, data, goodwill, business interruption, or any indirect or consequential loss; and our total aggregate liability to you arising from or in connection with the Beta will not exceed £100.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">11. Free Prize Draw Terms</h3>
                            <p className="mb-2"><strong>11.1 Promoter:</strong> SMARTGEN TECHNOLOGY LTD, Direct Save House, Century Court, Tolpits Lane, Watford, WD18 9RS. The Prize Draw is not sponsored, endorsed, administered by or associated with Amazon, Apple or Google.</p>

                            <p className="mb-2"><strong>11.2 Eligibility:</strong> Open to UK residents aged 18+ who successfully install the Beta during the Programme period [insert start date] to [insert end date], excluding those listed in section 3.</p>

                            <p className="mb-2"><strong>11.3 How to enter:</strong> Install the Beta via the official links. No purchase necessary. One entry per person.</p>

                            <p className="mb-2"><strong>11.4 Prize:</strong> One £500 Amazon.co.uk e-gift card (or a reasonable equivalent if unavailable). Prize is non-transferable and no cash alternative.</p>

                            <p className="mb-2"><strong>11.5 Winner selection:</strong> One winner chosen at random from all eligible entries by a computer process that produces verifiably random results, supervised by an independent person, on or about [draw date].</p>

                            <p className="mb-2"><strong>11.6 Notification and claim:</strong> We will contact the winner via the contact details associated with their tester account within 7 days of the draw. The winner must respond within 14 days; otherwise we may award the prize to a reserve.</p>

                            <p className="mb-2"><strong>11.7 Delivery:</strong> The e-gift card will be sent electronically within 14 days of claim verification.</p>

                            <p className="mb-2"><strong>11.8 Publication:</strong> We may publish the winner's first name and county. If you object, email [support@smartgenenergy.com]. We will still provide winner details to the ASA on request.</p>

                            <p className="mb-2"><strong>11.9 Fairness and disqualification:</strong> We may disqualify entries that are late, incomplete, automated, or in breach of these Terms. Our decisions are final.</p>

                            <p className="mb-6"><strong>11.10 Tax:</strong> Any tax implications are the winner's responsibility.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">12. Third-party platforms</h3>
                            <p className="mb-6">Apple TestFlight and Google Play may collect data and apply their own terms. You must comply with any applicable Apple or Google terms and policies. Apple, Google and Amazon have no responsibility for the Beta or the Prize Draw.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">13. Changes, suspension and termination</h3>
                            <p className="mb-6">We may change these Terms, features or availability of the Beta at any time. Updates will be posted on this page and may be notified in-app. We may suspend or terminate your access for breach, misuse or operational reasons. You may leave the Beta at any time by uninstalling the app.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">14. Consumer rights</h3>
                            <p className="mb-6">Nothing in these Terms affects your statutory rights under the Consumer Rights Act 2015 or other applicable law.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">15. Governing law and jurisdiction</h3>
                            <p className="mb-6">These Terms and any dispute or claim (including non-contractual disputes or claims) are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">16. Contact</h3>
                            <p className="mb-2">Questions about these Terms, the Beta or the Prize Draw:</p>
                            <p className="mb-2">Email: [support@smartgenenergy.com]</p>
                            <p className="mb-6">Post: SMARTGEN TECHNOLOGY LTD, Direct Save House, Century Court, Tolpits Lane, Watford, United Kingdom, WD18 9RS</p>

                            <div className="bg-gray-50 p-4 rounded-lg mt-8">
                                <h4 className="font-semibold text-gray-900 mb-2">Privacy Notice</h4>
                                <p className="text-xs text-gray-600">SmartGen Technology Ltd (company no. 14816415) is the data controller for the Beta. We process limited personal data (e.g., device data, diagnostics, forum posts) to run the Beta, improve the app and administer the prize draw. For details, including your UK GDPR rights and how to contact us or the ICO, please see our Privacy Policy: privacy@smartgenenergy.com</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 bg-gray-50 p-4">
                            <div className="flex items-start gap-3 mb-4">
                                <input
                                    type="checkbox"
                                    id="modal-terms-checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                                />
                                <label htmlFor="modal-terms-checkbox" className="text-sm text-gray-700">
                                    I agree to the Beta Testing Terms & Conditions
                                </label>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={closeTermsModal}
                                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={closeTermsModal}
                                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                                    disabled={!agreedToTerms}
                                >
                                    Continue to Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
