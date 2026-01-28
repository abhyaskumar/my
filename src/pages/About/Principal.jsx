import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";


export default function Principal() {
  return (
    <div className="w-full pt-16 md:pt-20 overflow-hidden">
      {/* ===== Banner Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-36 sm:h-48 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute right-0 top-0 h-full w-[35%] bg-blue-500/60 flex items-center justify-center text-white [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
        >
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-center px-2">
            About / Principal
          </h1>
        </motion.div>
      </motion.div>

      {/* ===== Main Content ===== */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6">
        {/* ===== Principal Image with Animation ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <motion.img
            src="/principaal.webp"
            alt="Principal"
            className="w-full h-[400px] sm:h-[450px] md:h-[400px] object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Social Links (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mt-4 md:hidden"
          >
            <div className="flex gap-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition">
                <FaInstagram />
              </a>
<a
  href="https://wa.me/919876543210?text=Welcome%20to%20Vidyasagar%20Public%20School"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition"
>
  <FaWhatsapp />
</a>

<a
  href="https://www.youtube.com/@lalansingh3957"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition"
>
  <FaYoutube />
</a>

            </div>
            <div className="text-gray-700 text-center text-sm">
              <p>Phone: +91 9534124780 / 8292992996</p>
              <p>Email: vps2410bero@gmail.com</p>
              <p>Address: jamtoli road bero</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Text Section with Animations ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 flex flex-col gap-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-green-900 mb-2"
          >
            Message from the Principal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700"
          >
            At Vidya Sagar Public School, we believe that true education goes beyond textbooks. Our aim is to inspire students to dream big, think creatively, act with discipline, and grow with strong moral values. Every child has unlimited potential, 
            and our responsibility is to guide them with care, respect and opportunities that help them flourish.
          Together, let us build a future where learning is meaningful, character is strong, and success is a journey driven by 
          passion and purpose.

          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-700"
          >
            With the support of our skilled faculty and your cooperation, we
            aspire to create a future where every student grows into a confident
            and responsible individual. Together, let us make learning a joyful
            journey.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg font-semibold text-orange-600"
          >
            Lalan Singh, Principal
          </motion.h3>

          {/* ===== Desktop Social Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex md:items-center md:justify-between mt-6"
          >
            <div className="flex gap-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition">
                <FaInstagram />
              </a>
<a
  href="https://wa.me/9693040766?text=Welcome%20to%20Vidyasagar%20Public%20School"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition"
>
  <FaWhatsapp />
</a>

<a
  href="https://www.youtube.com/@lalansingh3957"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition"
>
  <FaYoutube />
</a>

            </div>
            <div className="text-gray-700 text-sm">
              <p>Phone: +91 98765 43210</p>
              <p>Email: principal@vsps.com</p>
              <p>Address: Vidya Sagar Public School, Delhi</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
