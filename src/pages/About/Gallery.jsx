import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/events-c3.webp",
    "/events-c4.webp",
    "/events-c5.webp",
    "/events-c6.webp",
    "/events-c7.webp",
    "/events-c8.webp",
    "/events-c9.webp",
    "/events-c1.webp",
    "/events-c2.webp",
    "/img2.webp",
    "/events-s1.webp",
    "/tour5.webp",
    "/events-s2.webp",
    "/tour3.webp",
    "/events-t1.webp",
    "/faculty.webp",
    "/tour4.webp",
    "/faculty2.webp",
    "/faculty3.webp",
    "/tour1.webp",
    "/faculty4.webp",
    "/tour2.webp",
    "/ganesh.webp",
    "/collage1.webp",
    "/tour8.webp",
    "/events1.webp",
    "/h1.webp",
    "/h3.webp",
    "/tour9.webp",
    "/h4.webp",
    "/students.webp",
    "/students1.webp",
    "/students2.webp",
    "/students3.webp",
    "/collage2.webp",
    "/rangoli.webp",
    "/rangoli1.webp",
    "/yogaa.webp",

  ];

  return (
    <div className="w-full pt-20 overflow-hidden">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-36 md:h-[250px] bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
      >
        <div className="absolute right-0 top-0 h-full w-[35%] bg-blue-500/60 flex items-center justify-center text-white [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold px-4 py-2 text-center">
        
            About / Gallery
          </motion.h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-700 mb-4 text-center md:text-left"
        >
          School Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-6 text-center md:text-left"
        >
          Our gallery showcases memorable moments, events, and activities at
          Vidya Sagar Public School. Each picture reflects the joy, energy, and
          enthusiasm of our students and staff.
        </motion.p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-56 md:h-64 object-cover rounded-lg transform group-hover:scale-110 transition duration-700"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center gap-3">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-blue-900 px-4 py-2 font-semibold rounded-lg"
                >
                  View Full Image
                </a>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
