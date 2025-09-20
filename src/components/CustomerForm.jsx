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

    // 🔹 Keys must exactly match your Google Sheet headers
    const formDataToSend = new FormData();
    formDataToSend.append("Date", new Date().toISOString()); // Sheet auto-fills date
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("destination", formData.destination);
    formDataToSend.append("requirement", formData.requirement);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwu2jAEg9Ns1ZmkIyc60DGHq0Mrgv1CBjAubV_dQ9GgHN7LyADwqyE-0BX44KpVX5PwtQ/exec", // replace with your own deployed web app URL
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      setSubmitStatus("success");

      // Reset form after success
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
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md mx-auto">
      <h2 className="text-4xl flex justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
        Contact Form 
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Destination"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          placeholder="Your Requirement"
          className="w-full border p-2 rounded"
          rows="3"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-md text-white py-2 px-4 rounded hover:bg-indigo-700 transition cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {submitStatus === "success" && (
        <p className="text-green-600 mt-4">✅ Form submitted successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-600 mt-4">
          ❌ Something went wrong. Try again later.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
