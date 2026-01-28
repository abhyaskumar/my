import React from "react";
import { motion } from "framer-motion";

export default function Faculty() {
  const facultyImages = [
    "/faculty.webp",
    "/faculty2.webp",
    "/faculty3.webp",
 
  ];

  return (
    <div className="w-full pt-16 md:pt-20 overflow-hidden">

      {/* ===== BANNER SAME AS BEFORE ===== */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-36 sm:h-48 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 right-0 h-full w-[35%] bg-blue-500/60 flex items-center justify-center text-white [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
        >
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-center px-2">
            About / Faculty
          </h1>
        </motion.div>
      </motion.div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 text-center"
        >
          Our Faculty Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-10 text-sm sm:text-base md:text-lg text-center leading-relaxed"
        >
          Our school is proud to have a team of dedicated, experienced, and highly qualified faculty members who work with passion and commitment. Our teachers focus not only on academic excellence but also on the overall personality development of every student. With continuous guidance, teamwork, and a positive learning environment, our faculty inspires students to think creatively, act confidently, and achieve success in every field. <br /> <br />
          Here is a glimpse of the collective strength of our teaching team, united with one mission — to build a bright future for every child.
        </motion.p>

        {/* ===== BIG RESPONSIVE IMAGE GALLERY ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {facultyImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400 hover:border-blue-700 hover:shadow-blue-300 cursor-pointer transition-all"
            >
              <motion.img
                src={image}
                alt="Faculty Group"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px] object-fit"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
