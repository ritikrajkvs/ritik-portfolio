import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition border">
      <img 
        src={project.thumb} 
        alt={project.title} 
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

      <p className="text-xs text-gray-500 mt-1">{project.tech}</p>

      <div className="flex gap-3 mt-4">
        <a 
          href={project.repo} 
          target="_blank" 
          className="px-3 py-1 bg-gray-800 text-white text-sm rounded"
        >
          Repo
        </a>

        <a 
          href={project.live} 
          target="_blank" 
          className="px-3 py-1 bg-indigo-600 text-white text-sm rounded"
        >
          Live
        </a>
      </div>
    </div>
  )
}