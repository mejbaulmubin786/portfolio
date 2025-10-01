import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="w-80 bg-[#0c0e19] rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <img className="rounded-t-2xl" src={bannerImg} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{main}</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-[#465697] rounded-3xl text-sm hover:bg-[#33407a] transition">Demo</button>
          <button className="px-4 py-2 bg-[#465697] rounded-3xl text-sm hover:bg-[#33407a] transition">Source Code</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
