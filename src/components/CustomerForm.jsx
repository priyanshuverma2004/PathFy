import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    destination: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("Date", new Date().toISOString());
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("destination", formData.destination);
    formDataToSend.append("requirement", formData.requirement);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwu2jAEg9Ns1ZmkIyc60DGHq0Mrgv1CBjAubV_dQ9GgHN7LyADwqyE-0BX44KpVX5PwtQ/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        destination: "",
        requirement: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="bg-gray-100 shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Contact Form ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Your Requirement"
            rows="3"
            className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-bold bg-blue-600 shadow-lg text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {submitStatus === "success" && (
          <p className="text-green-600 mt-4 text-center">
            ✅ Form submitted successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 mt-4 text-center">
            ❌ Something went wrong. Try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
