import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/kumarabhyas529@gmail.com", {
      method: "POST",
      body: formData,
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto p-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Get in Touch</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* FormSubmit Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Contact Message" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows="5"
            name="message"
            required
            placeholder="Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Contact Details</h2>

          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-orange-500 text-xl" />
            <span className="text-gray-700 text-sm sm:text-base">+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-orange-500 text-xl" />
            <span className="text-gray-700 text-sm sm:text-base">info@vsps.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-500 text-xl" />
            <span className="text-gray-700 text-sm sm:text-base">
              Vidya Sagar Public School, Bero, Delhi, India
            </span>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl animate-pop">
            <h2 className="text-green-600 font-bold text-xl">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-700 mt-1 text-center">
              Thank you for contacting us.
            </p>
          </div>
          
        </div>
      )}

      <style>{`
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop { animation: pop 0.3s ease-out; }
      `}</style>
    </div>
  );
}
