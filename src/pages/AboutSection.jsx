import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  const [readMoreText, setReadMoreText] = useState(false);
  const [readMoreMission, setReadMoreMission] = useState(false);
  const [readMoreVision, setReadMoreVision] = useState(false);

  const fullText = `Welcome to Vidya Sagar Public School Bero, a place where learning is fun and every student is valued. 
  Our school was founded in 2010 with a mission to provide quality education and help children grow in every way—academically, 
  socially, and personally.
We offer a strong academic program from early classes to higher grades, supported by experienced and caring teachers.
 Our curriculum is designed not only to teach subjects but also to encourage creativity, critical thinking, and problem-solving skills.
Beyond academics, we believe in the importance of sports, arts, and cultural activities. These help students build confidence,
 teamwork, and leadership skills. Our school has modern classrooms, science and computer labs, a library, and playgrounds to give 
 students the best environment for learning and growth.
Our principal, Mr Lalan Singh, leads the school with dedication and care. Under their guidance, we focus on creating a safe, 
friendly, and inspiring atmosphere where every child can succeed.
At Vidya Sagar Public School Bero, we aim to nurture responsible, confident, and talented students who are ready to face the challenges of the future.`;


  const missionText = `
  Our mission is to provide high-quality education and create a positive learning environment where every student can achieve success.
   We aim to build   strong academic skills, good values, confidence, and discipline in each child. We believe that every student is unique and has the 
  power to do great things.  Through experienced teachers, modern teaching methods, and a caring atmosphere, we guide students to learn 
  with interest and develop life skills that help them in the future. Our mission is to shape responsible, respectful, and confident 
  citizens who contribute positively to society.`;

  const visionText = `Our vision is to become a leading educational institution known for excellence in learning and character building.
   We dream of a school where every child has equal opportunities to explore their talents and reach their highest potential.
We aim to build a future where education is not only about marks, but about knowledge, creativity, discipline, and values.
 We want our students to become lifelong learners, future leaders, and caring individuals who bring change to the world with honesty,
  hard work, and kindness`;

  // Function to truncate text for mobile
  const truncate = (text, length = 950) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
    const truncatee = (text, length = 200) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
    const truncater = (text, length = 200) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  

  return (
    <div id="about" className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: Text */}
        <div>
          <h2 className="text-blue-700 font-semibold text-xl md:text-2xl mb-2">
            Warm Welcome To
          </h2>
          <h1 className="text-3xl md:text-[33px] font-bold text-yellow-400 mb-4">
            VIDYA SAGAR PUBLIC SCHOOL <span className="text-orange-500">BERO</span>
          </h1>
          <p className="text-gray-700 mb-2 ">
            {readMoreText || window.innerWidth >= 768 ? fullText : truncate(fullText)}
          </p>
          {window.innerWidth < 768 && (
            <button
              onClick={() => setReadMoreText(!readMoreText)}
              className="text-green-700 font-semibold text-sm mt-2"
            >
              {readMoreText ? "Read Less" : "Read More"}
            </button>
          )}

          {/* ⭐BUTTON TO BRANCH PAGE⭐ */}
          {/* ⭐BUTTON TO BRANCH PAGE⭐ */}
          <button
            onClick={() => navigate("/branch2")}
            className="
    mt-6
    bg-orange-500 hover:bg-orange-600 
    text-white font-semibold
    py-3 px-6
    rounded-xl shadow-lg
    transition duration-300
    w-full sm:w-auto
    text-center
    text-base sm:text-lg
    tracking-wide
  "
          >
            Visit Our Second Branch →
          </button>

        </div>
        {/* Right: Image */}
        <div className="hidden md:flex items-center justify-center ">
          <img
            src="/img2.webp"
            alt="Students"
            className="w-full max-w-md h-74 sm:h-80 md:h-[540px] object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
        <div className="bg-blue-300 p-4 sm:p-6 md:p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-black mb-3">Our Mission</h2>
          <p className="text-gray-900 mb-2">
            {readMoreMission || window.innerWidth >= 768 ? missionText : truncatee(missionText)}
          </p>
          {window.innerWidth < 768 && (
            <button
              onClick={() => setReadMoreMission(!readMoreMission)}
              className="text-green-700 font-semibold text-sm mt-2"
            >
              {readMoreMission ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="bg-yellow-200 p-4 sm:p-6 md:p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-black mb-3">Our Vision</h2>
          <p className="text-gray-900 mb-2">
            {readMoreVision || window.innerWidth >= 768 ? visionText : truncater(visionText)}
          </p>
          {window.innerWidth < 768 && (
            <button
              onClick={() => setReadMoreVision(!readMoreVision)}
              className="text-green-700 font-semibold text-sm mt-2"
            >
              {readMoreVision ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
        <div className="flex items-center justify-center  md:hidden">
          <img
            src="/img2.webp"
            alt="Students"
            className="w-full max-w-md h-74 sm:h-80 md:h-[540px] object-cover rounded-lg shadow"
          />
        </div>
      </div>

    </div>
  );
}
