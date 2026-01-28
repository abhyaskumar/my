import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdmissionsPage() {
  return (
    <div className="w-full pt-20 overflow-hidden">
      {/* Banner */}
      <motion.div
        className="relative w-full h-36 sm:h-48 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute right-0 top-0 h-full w-[35%] bg-blue-500/60 flex items-center justify-center text-white
          [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold px-4 py-2 text-center">
            Admissions
          </h1>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 py-10">
        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Admissions Information
        </motion.h2>

        {/* Eligibility */}
        <motion.div
          className="mb-6 sm:mb-8 bg-yellow-200 p-4 sm:p-6 rounded-lg shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-950 mb-3">
            Eligibility
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm sm:text-base">
            <li>Nursery: Age should be 3+ years as on 31st March of the admission year.</li>
            <li>Class I: Age should be 6+ years as on 31st March of the admission year.</li>
            <li>For higher classes, admission will be based on previous school report cards and entrance test.</li>
          </ul>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          className="mb-6 sm:mb-8 bg-blue-300 p-4 sm:p-6 rounded-lg shadow"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-950 mb-3">
            Admission Process
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2 text-sm sm:text-base">
            <li>Collect admission form from school office or download online.</li>
            <li>Fill in all required details and attach necessary documents.</li>
            <li>Submit the form along with Admission fee at the school office.</li>
            <li>Eligible students may be called for interaction/entrance test.</li>
            <li>On selection, complete the admission formalities within given dates.</li>
          </ol>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          className="mb-6 sm:mb-8 bg-yellow-200 p-4 sm:p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-950 mb-3">
            Important Dates
          </h3>
          <p className="text-gray-800 text-sm sm:text-base mb-1">
            ⏳ Admission Forms Available: <span className="font-semibold">1st March</span>
          </p>
          <p className="text-gray-800 text-sm sm:text-base mb-1">
            📝 Last Date to Submit Forms: <span className="font-semibold">20th March</span>
          </p>
          <p className="text-gray-800 text-sm sm:text-base">
            ✅ Final Admission List: <span className="font-semibold">30th March</span>
          </p>
        </motion.div>

        {/* Documents Required */}
        <motion.div
          className="mb-6 sm:mb-8 bg-blue-300 p-4 sm:p-6 rounded-lg shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-950 mb-3">
            Documents Required
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm sm:text-base">
            <li>Student name</li>
            <li>Date of birth</li>
            <li>Passport Size Photographs (2 copies)</li>
            <li>Name of Parents,Occupation,Address,Phone number</li>
            <li>Previous School Report Card (for higher classes)</li>
            <li>Transfer Certificate (if applicable)</li>
          </ul>
        </motion.div>

        {/* Admission Form Button */}
<motion.div
  className="text-center mt-6"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <a
    href="https://forms.gle/WjTy8iux2H5dHMEa7"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-md transition duration-200 text-sm sm:text-base"
  >
    Apply for Admission
  </a>
</motion.div>

        <motion.div
  className="text-center mt-8"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <a
    href="/Ad-bero.pdf" // Place your PDF in the public folder
    download
    className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-md transition duration-200 text-sm sm:text-base"
  >
    Download Admission Form
  </a>
</motion.div>

      </div>
    </div>
  );
}
