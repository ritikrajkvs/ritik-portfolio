import React from 'react'

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition border">
      <img
        src={project.thumb}
        alt={project.title}
        className="w-full h-44 object-cover rounded"
      />

      <div className="mt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.role} • {project.duration}</p>
          </div>
          <div className="text-xs text-gray-400">{project.tech}</div>
        </div>

        <p className="text-gray-700 mt-3">{project.shortDesc}</p>

        <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
          {project.bullets.slice(0, 3).map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>

        <div className="flex gap-3 mt-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-gray-800 text-white text-sm rounded"
          >
            Repo
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-indigo-600 text-white text-sm rounded"
            >
              Live
            </a>
          )}

          <button
            onClick={onViewDetails}
            className="ml-auto px-3 py-1 border rounded text-sm hover:bg-gray-50"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  )
}
