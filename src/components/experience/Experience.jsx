import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="Experience" className="px-10 md:px-20 py-20 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Experience</h1>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left: Skills */}
        <div className="flex flex-wrap gap-6 justify-center md:w-1/2">
          {[FaHtml5, FaCss3, FaReact, FaJs, FaFigma, SiMongodb, SiRedis].map((Icon, idx) => (
            <span key={idx} className="p-4 bg-[#0c0e19] rounded-2xl hover:scale-110 transition duration-300">
              <Icon size={50} />
            </span>
          ))}
        </div>

        {/* Right: Timeline */}
        <div className="space-y-6 md:w-1/2">
          <div className="p-6 bg-[#0c0e19] rounded-xl shadow-md flex gap-6 items-center">
            <FaGoogle size={50} color="#4285F4" />
            <div>
              <h2 className="font-bold text-xl">Software Engineer - Google</h2>
              <p className="text-sm text-gray-400">Sept 2023 - Present</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm mt-2">
                <li>Developed scalable web applications.</li>
                <li>Led frontend engineering team.</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-[#0c0e19] rounded-xl shadow-md flex gap-6 items-center">
            <RiNetflixFill size={50} color="#E50914" />
            <div>
              <h2 className="font-bold text-xl">Software Engineer - Netflix</h2>
              <p className="text-sm text-gray-400">Jan 2022 - Aug 2023</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm mt-2">
                <li>Built high-performance video streaming UI.</li>
                <li>Optimized backend APIs.</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-[#0c0e19] rounded-xl shadow-md flex gap-6 items-center">
            <FaAmazon size={50} color="#FF9900" />
            <div>
              <h2 className="font-bold text-xl">Software Engineer - Amazon</h2>
              <p className="text-sm text-gray-400">Jun 2020 - Dec 2021</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm mt-2">
                <li>Worked on large-scale e-commerce system.</li>
                <li>Implemented secure payment integration.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
