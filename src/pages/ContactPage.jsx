import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
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
    <div className="w-full pt-16 md:pt-20 overflow-hidden">

      {/* BANNER */}
      <motion.div
        className="relative w-full h-40 sm:h-48 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute right-0 top-0 h-full w-[35%] bg-blue-500/60 flex items-center justify-center text-white [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold px-4 py-2 text-center">
            Contact Us
          </h1>
        </motion.div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-green-900 mb-6">Get in Touch</h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_subject" value="New Contact Message" />

            <motion.input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              rows="5"
              name="message"
              required
              placeholder="Message"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE — CONTACT DETAILS + MAP */}
        <div className="flex flex-col gap-6">
          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Contact Details</h2>

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

          {/* Map */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-md sm:text-lg font-semibold mb-2">Location</h3>

            <div className="w-full h-40 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="school-location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14699.123456!2d85.02061436622357!3d23.295056743376424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjMuMjk1MDU2NzQzMzc2NDIsIDg1LjAyMDYxNDM2NjIyMzU3!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl animate-pop">
            <h2 className="text-green-600 font-bold text-xl text-center">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-700 mt-1 text-center">
              Thank you for contacting us.
            </p>
          </div>
        </div>
      )}

      {/* POPUP ANIMATION */}
      <style>
        {`
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop { animation: pop 0.3s ease-out; }
        `}
      </style>
    </div>
  );
}
