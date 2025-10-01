import React from 'react';
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from '../TextChange';

const Home = () => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row items-center justify-between w-full px-10 md:px-20 py-16">
      
      {/* Left Text */}
      <div className="md:w-2/4 space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
          Passionate frontend & backend developer creating modern web solutions with 
          React, Node.js, and database expertise.
        </p>
        <button className="mt-5 text-white py-2 px-6 text-lg font-semibold rounded-3xl bg-gradient-to-r from-[#465697] to-[#1f2b4d] hover:scale-105 transition duration-300">
          Contact Me
        </button>
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
