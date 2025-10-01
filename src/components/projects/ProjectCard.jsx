import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-80 bg-[#071229] rounded-2xl shadow hover:scale-105 transition p-4">
      <div className="h-40 bg-gradient-to-tr from-[#1f2b4d] to-[#14203b] rounded-md flex items-center justify-center text-white font-semibold">
        {project.title}
      </div>
      <div className="mt-4">
        <h4 className="font-bold">{project.title}</h4>
        <p className="text-sm text-gray-300 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags?.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-[#0b1a33] rounded-full border border-gray-700">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <a href={project.link || "#"} className="text-sm px-3 py-2 bg-[#465697] rounded-full">Live</a>
          <a href={project.repo || "#"} className="text-sm px-3 py-2 border border-gray-700 rounded-full">Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
