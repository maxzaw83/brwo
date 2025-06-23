import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add fetch/axios logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.firstName}
              onChange={handleChange}
            />
            <small className="text-gray-500">First</small>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.lastName}
              onChange={handleChange}
            />
            <small className="text-gray-500">Last</small>
          </div>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded px-3 py-2"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Comment or Message
        </label>
        <textarea
          name="message"
          rows={6}
          className="w-full border rounded px-3 py-2"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
