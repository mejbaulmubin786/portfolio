import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="text-white mx-10 md:mx-20 my-20 p-10 md:p-16 bg-gradient-to-r from-[#0f172a] to-[#1e2746] rounded-2xl shadow-2xl"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={AboutImg}
            alt="About"
            className="rounded-2xl shadow-xl shadow-black w-72 md:w-96 hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 space-y-8">
          <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
            I am a passionate <span className="text-[#465697] font-semibold">Full-Stack Developer</span> 
            with expertise in modern frontend & backend technologies. I love building 
            scalable applications, creating user-friendly designs, and solving 
            complex problems with efficient code.
          </p>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <IoArrowForward size={28} className="text-[#465697]" />
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-400 text-sm md:text-md">
                  Specialized in React, Tailwind CSS, and responsive design.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={28} className="text-[#465697]" />
              <div>
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-gray-400 text-sm md:text-md">
                  Experienced in Node.js, Express, REST APIs & authentication.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={28} className="text-[#465697]" />
              <div>
                <h3 className="text-xl font-semibold">Database Specialist</h3>
                <p className="text-gray-400 text-sm md:text-md">
                  Expertise in MongoDB, Redis, SQL with strong query optimization skills.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
