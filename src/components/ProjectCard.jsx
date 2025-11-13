import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div
      className="
        group relative p-[2px] rounded-2xl 
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
        transition-transform hover:-translate-y-1 hover:shadow-2xl
      "
    >
      <div className="bg-white rounded-2xl p-5 shadow-md">
        
        <div className="overflow-hidden rounded-xl">
          <img
            src={project.thumb}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl 
              group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="mt-5">
          <h3
            className="
              text-2xl font-bold bg-gradient-to-r 
              from-indigo-600 to-purple-600 bg-clip-text text-transparent
              tracking-wide drop-shadow-sm
            "
          >
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {project.role} • <span className="text-gray-500">{project.duration}</span>
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            {project.shortDesc}
          </p>

          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            {project.bullets.slice(0, 3).map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.split(",").map((t, idx) => (
              <span
                key={idx}
                className="
                  px-3 py-1 text-xs rounded-full
                  bg-gray-100 text-gray-600 border
                "
              >
                {t.trim()}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-5">

            {/* GitHub */}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-gray-900 text-white text-sm hover:bg-gray-700
              "
            >
              <Github size={16} /> Repo
            </a>

            {/* Live */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg 
                  bg-indigo-600 text-white text-sm hover:bg-indigo-700
                "
              >
                <ExternalLink size={16} /> Live
              </a>
            )}

            {/* View Details */}
            <button
              onClick={onViewDetails}
              className="
                ml-auto px-3 py-2 rounded-lg border text-sm 
                hover:bg-gray-50 transition
              "
            >
              View Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
