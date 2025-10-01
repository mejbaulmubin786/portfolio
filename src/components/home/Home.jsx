import React from 'react';
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from '../TextChange';
import resumeData from "../../data/resumeData";

const Home = () => {
  const { personal } = resumeData;
  return (
    <section id="Home" className="text-white flex flex-col-reverse md:flex-row items-center justify-between w-full px-10 md:px-20 py-16">
      
      {/* Left Text */}
      <div className="md:w-2/4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block">Hello — I’m {personal.name}</span>
            <span className="block text-indigo-300 text-2xl md:text-3xl mt-2">
              <TextChange />
            </span>
          </h1>
        <p className="text-gray-300 max-w-xl">
            {personal.summary}
          </p>
        <div className="flex gap-4 items-center">
            <a
              href={`mailto:${personal.email}`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#465697] to-[#2b3f82] font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-gray-600 text-sm hover:bg-gray-800 transition"
            >
              LinkedIn
            </a>
          </div>
      </div>

      {/* Right Image */}
      <div className="md:w-2/5 flex justify-center">
        <img 
          className="rounded-full shadow-2xl border-4 border-[#465697] w-72 md:w-96"
          src={avatarImg} 
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default Home;