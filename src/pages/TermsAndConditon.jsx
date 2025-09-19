import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our company. By accessing or using our services, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance</h2>
        <p className="text-gray-600">
          By using our services, you confirm that you are at least 18 years old
          and agree to these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Use of Services</h2>
        <p className="text-gray-600">
          You agree to use our services only for lawful purposes and not engage
          in any activity that could harm our reputation or operations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. Booking & Payments
        </h2>
        <p className="text-gray-600">
          All bookings are subject to availability. Payments must be made in
          full as per our payment policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Cancellations</h2>
        <p className="text-gray-600">
          Cancellation policies vary depending on the package. Please refer to
          your booking details for specific terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Liability</h2>
        <p className="text-gray-600">
          We are not responsible for delays, accidents, or damages beyond our
          control during travel.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes</h2>
        <p className="text-gray-600">
          We may update these terms from time to time. Continued use of our
          services means you accept the updated terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
