import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full bg-white rounded-xl shadow-xl p-6 mx-4"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.role} • {project.duration}</p>
            <p className="mt-3 text-gray-700">{project.shortDesc}</p>

            <div className="mt-4">
              <h4 className="font-semibold">Key contributions</h4>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Tech stack</h4>
              <p className="text-sm text-gray-600">{project.tech}</p>
            </div>

            <div className="mt-6 flex gap-3">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-gray-800 text-white rounded">
                  Repository
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 text-white rounded">
                  Live demo
                </a>
              )}
              {project.caseStudy && (
                <a href={project.caseStudy} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">
                  Case study
                </a>
              )}
            </div>
          </div>

          <div className="w-48 hidden md:block">
            <img src={project.thumb} alt={project.title} className="w-full h-40 object-cover rounded" />
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </div>
  )
}
