import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6">
          We value your privacy and are committed to protecting your personal
          information. This policy explains how we collect, use, and safeguard
          your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p className="text-gray-600">
          We may collect your name, email, phone number, and payment details
          when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Use of Information</h2>
        <p className="text-gray-600">
          We use your information to process bookings, provide customer support,
          and improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Protection</h2>
        <p className="text-gray-600">
          We implement security measures to protect your personal data from
          unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Sharing of Information</h2>
        <p className="text-gray-600">
          We do not sell or rent your data. We may share limited information
          with trusted partners to deliver services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Cookies</h2>
        <p className="text-gray-600">
          Our website may use cookies to enhance user experience and track
          performance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or request deletion of your
          personal data by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Updates</h2>
        <p className="text-gray-600">
          This policy may be updated. Continued use of our services means you
          accept the latest version.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
