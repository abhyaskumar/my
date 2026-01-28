import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const count = localStorage.getItem("visitorCount") || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem("visitorCount", newCount);
    setVisitorCount(newCount);

    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-blue-700 text-white pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between gap-6">
        
        {/* Quick Links */}
        <div className="flex-1 min-w-[140px]">
          <h3 className="text-md sm:text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about/introduction" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/admissions" className="hover:text-orange-500">Admissions</Link></li>
            <li><Link to="/events" className="hover:text-orange-500">Events</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="text-md sm:text-lg font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-sm"><FaMapMarkerAlt className="text-orange-500" /> <span>Vidya Sagar Public School, Bero</span></div>
          <div className="flex items-center gap-2 text-sm"><FaPhone className="text-orange-500" /> <span>+91 9534124780</span></div>
          <div className="flex items-center gap-2 text-sm"><FaEnvelope className="text-orange-500" /> <span>vps2410bero@gmail.com</span></div>
          <div className="flex gap-3 mt-2 text-sm">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
          </div>
        </div>

        {/* Visitor Info */}
        <div className="flex-1 min-w-[140px]">
          <h3 className="text-md sm:text-lg font-semibold mb-2">Visitor Info</h3>
          <p className="text-sm">👥 Visitors: <span className="font-semibold">{visitorCount}</span></p>
          <p className="text-sm">🕒 Time: <span className="font-semibold">{currentTime.toLocaleTimeString()}</span></p>
          <p className="text-sm">📅 Date: <span className="font-semibold">{currentTime.toLocaleDateString()}</span></p>
        </div>

        {/* Mini Map */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="text-md sm:text-lg font-semibold mb-2">Location</h3>
          <div className="w-full h-24 rounded-lg overflow-hidden shadow-lg">
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

      <div className="mt-4 text-center text-xs sm:text-sm text-gray-200 border-t border-gray-700 pt-2">
        © 2025 Vidya Sagar Public School, Bero. All rights reserved.
      </div>
    </footer>
  );
}
