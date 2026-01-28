import React from "react";
import { Link } from "react-router-dom";

export default function AdmissionSection() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-10">
      <hr className="border-t-2  my-4 text-gray-800" />
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
        Admissions Information
      </h2>

      {/* Eligibility */}
      <div className="mb-8 bg-yellow-200 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-950 mb-3">Eligibility</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Nursery: Age should be 3+ years as on 31st March of the admission year.</li>
          <li>Class I: Age should be 6+ years as on 31st March of the admission year.</li>
          <li>For higher classes, admission will be based on previous school report cards and entrance test.</li>
        </ul>
      </div>

      {/* Admission Process */}
      <div className="mb-8 bg-blue-300 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-950 mb-3">Admission Process</h3>
        <ol className="list-decimal list-inside text-gray-800 space-y-2">
          <li>Collect admission form from school office or download online.</li>
          <li>Fill in all required details and attach necessary documents.</li>
          <li>Submit the form along with registration fee at the school office.</li>
          <li>Eligible students may be called for interaction/entrance test.</li>
          <li>On selection, complete the admission formalities within given dates.</li>
        </ol>
      </div>

      {/* Important Dates */}
      <div className="mb-8 bg-yellow-200 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-950 mb-3">Important Dates</h3>
        <p className="text-gray-800 mb-2">⏳ Admission Forms Available: <span className="font-semibold">1st March</span></p>
        <p className="text-gray-800 mb-2">📝 Last Date to Submit Forms: <span className="font-semibold">20th March</span></p>
        <p className="text-gray-800 mb-2">📢 Entrance Test & Interaction: <span className="font-semibold">25th March</span></p>
        <p className="text-gray-800">✅ Final Admission List: <span className="font-semibold">30th March</span></p>
      </div>

      {/* Documents Required */}
      <div className="mb-8 bg-blue-300 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-950 mb-3">Documents Required</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Student name</li>
          <li>Date of birth</li>
          <li>Passport Size Photographs (2 copies)</li>
          <li>Name of Parents,Occupation,Address,Phone number</li>
          <li>Previous School Report Card (for higher classes)</li>
          <li>Transfer Certificate (if applicable)</li>
        </ul>
      </div>

      {/* Admission Form Button */}
<div className="text-center">
  <a
    href="https://forms.gle/WjTy8iux2H5dHMEa7"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200"
  >
    Apply for Admission
  </a>
</div>


      <div className="text-center mt-8">
        <a
          href="/Ad-bero.pdf"  // Place your PDF in the public folder
          download
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200"
        >
          Download Admission Form
        </a>
      </div>

    </div>
  );
}
