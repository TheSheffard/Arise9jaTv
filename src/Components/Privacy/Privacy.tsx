'use client'
const privacyPolicyItems = [
    {
        title: "Information Collection",
        content: "We collect your browsing data to provide better services and improve your experience."
    },
    {
        title: "Usage of Information",
        content: "Your information helps us enhance our services, send relevant notifications, and personalize content to match your preferences."
    },
    {
        title: "Third-Party Sharing",
        content: "We maintain strict confidentiality and only share information with essential service providers when absolutely necessary."
    },
    {
        title: "Cookies",
        content: "Cookies help us optimize your experience. You can manage or disable them through your browser settings at any time."
    },
    {
        title: "Policy Updates",
        content: "We may update this policy periodically. We'll notify you of significant changes and always keep the current version available here."
    }
];

export const PrivacyPolicy = () => (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Our Privacy Commitment</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your trust is important to us. This policy explains how we protect and handle your information.
            </p>
        </div>
        
        <div className="space-y-6">
            {privacyPolicyItems.map((item, index) => (
                <div 
                    key={index} 
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-500"
                >
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                        <svg 
                            className="w-5 h-5 text-blue-500 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                            />
                        </svg>
                        {item.title}
                    </h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </p>
            <p className="mt-2 text-sm text-gray-600">
                Please review this policy periodically for updates.
            </p>
        </div>
    </div>
);