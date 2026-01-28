import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduction() {
  const [readMoreText, setReadMoreText] = useState(false);
  const [readMoreMission, setReadMoreMission] = useState(false);
  const [readMoreVision, setReadMoreVision] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const fullText = `Welcome to Vidya Sagar Public School Bero, a place where learning is fun and every student is valued.
  Our school was founded in 2010 with a mission to provide quality education and help children grow in every way—academically,
  socially, and personally. We offer a strong academic program from early classes to higher grades, supported by experienced and caring teachers.
  Our curriculum is designed not only to teach subjects but also to encourage creativity, critical thinking, and problem-solving skills.
  Beyond academics, we believe in the importance of sports, arts, and cultural activities. These help students build confidence,
  teamwork, and leadership skills. Our school has modern classrooms, science and computer labs, a library, and playgrounds to give
  students the best environment for learning and growth. Our principal, Mr Lalan Singh, leads the school with dedication and care. Under their guidance, we focus on creating a safe,
  friendly, and inspiring atmosphere where every child can succeed. At Vidya Sagar Public School Bero, we aim to nurture responsible, confident,
  and talented students who are ready to face the challenges of the future.`;

  const missionText = `Our mission is to provide high-quality education and create a positive learning environment where every student can achieve success.
  We aim to build strong academic skills, good values, confidence, and discipline in each child. We believe that every student is unique and has the
  power to do great things. Through experienced teachers, modern teaching methods, and a caring atmosphere, we guide students to learn
  with interest and develop life skills that help them in the future. Our mission is to shape responsible, respectful, and confident citizens
  who contribute positively to society.`;

  const visionText = `Our vision is to become a leading educational institution known for excellence in learning and character building.
  We dream of a school where every child has equal opportunities to explore their talents and reach their highest potential. We aim to build a future where education is not only about marks,
  but about knowledge, creativity, discipline, and values. We want our students to become lifelong learners, future leaders, and caring individuals
  who bring change to the world with honesty, hard work, and kindness.`;

  const truncate = (text, length = 200) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div className="w-full pt-20">
      {/* Banner Section */}
      <div
        className="relative w-full h-36 md:h-[250px] bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
        data-aos="fade-down"
      >
        <div
          className="absolute right-0 top-0 h-full w-[60%] md:w-[35%] bg-blue-500/60 
          flex items-center justify-center text-white
          [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]
          md:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
        >
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center px-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            About / Introduction
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6 p-4 sm:p-6 md:p-6 py-4"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <h2 className="text-blue-700 font-semibold text-xl md:text-2xl mb-2">
            Warm Welcome To
          </h2>

          <h1
            className="text-3xl md:text-[33px] font-bold text-yellow-400 mb-4"
            data-aos="zoom-in"
          >
            VIDYA SAGAR PUBLIC SCHOOL{" "}
            <span className="text-orange-500">BERO</span>
          </h1>

          <p className="mb-2 text-gray-700 leading-relaxed">
            {readMoreText || !isMobile ? fullText : truncate(fullText, 220)}
          </p>

          {isMobile && (
            <button
              onClick={() => setReadMoreText(!readMoreText)}
              className="text-green-700 font-semibold text-sm mt-2 hover:underline"
            >
              {readMoreText ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div
          className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0"
          data-aos="fade-left"
        >
          <img
            src="/img2.webp"
            alt="Students"
            className="w-full h-74 sm:h-80 md:h-[540px] object-cover rounded-lg shadow-lg 
            transform hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Mission + Vision Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto p-4 sm:p-6 md:p-6"
        data-aos="fade-up"
      >
        {/* Mission */}
        <div
          className="bg-blue-300 p-4 sm:p-6 md:p-6 rounded-lg shadow-lg 
          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          data-aos="flip-left"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h2>

          <p className="text-gray-900 mb-2">
            {readMoreMission || !isMobile
              ? missionText
              : truncate(missionText, 200)}
          </p>

          {isMobile && (
            <button
              onClick={() => setReadMoreMission(!readMoreMission)}
              className="text-green-700 font-semibold text-sm mt-2 hover:underline"
            >
              {readMoreMission ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Vision */}
        <div
          className="bg-yellow-200 p-4 sm:p-6 md:p-6 rounded-lg shadow-lg 
          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          data-aos="flip-right"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Our Vision</h2>

          <p className="text-gray-900 mb-2">
            {readMoreVision || !isMobile
              ? visionText
              : truncate(visionText, 200)}
          </p>

          {isMobile && (
            <button
              onClick={() => setReadMoreVision(!readMoreVision)}
              className="text-green-700 font-semibold text-sm mt-2 hover:underline"
            >
              {readMoreVision ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
