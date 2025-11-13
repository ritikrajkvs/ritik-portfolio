import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

/*
  Update this `data` array by copying exact lines from your resume.
  For each project include: title, role, duration, shortDesc, bullets (array),
  tech, repo, live, thumb and optional caseStudy (link or route)
*/
const data = [
  {
    title: 'Devtinder',
    role: 'Full-Stack Developer',
    duration: 'May 2024 — Aug 2024',
    shortDesc: 'MERN-based developer networking platform that connects devs for collaboration.',
    bullets: [
      'Implemented JWT authentication and secure profile editing.',
      'Built intelligent feed & connection request system.',
      'Added real-time chat using WebSockets for instant messaging.'
    ],
    tech: 'React, Node.js, Express, MongoDB, Tailwind',
    repo: 'https://github.com/ritikrajkvs/Devtinder',
    live: 'https://ubiquitous-naiad-ba85d9.netlify.app/',
    thumb: '/assets/devtinder.png',
    caseStudy: '' // optional: link to case study page or external doc
  },
  {
    title: 'CineGPT',
    role: 'Frontend + ML integration',
    duration: 'Jan 2024 — Apr 2024',
    shortDesc: 'AI-driven movie recommender with natural-language queries and trailers.',
    bullets: [
      'Integrated TMDB API and built conversational search powered by Gemini/LLM.',
      'Implemented responsive Netflix-style UI and trailer playback.',
      'Added Firebase auth and secure data storage for user preferences.'
    ],
    tech: 'React, Redux Toolkit, Firebase, TMDB API, Tailwind',
    repo: 'https://github.com/ritikrajkvs/CineGPT',
    live: 'https://cinegpt-4e591.web.app/',
    thumb: '/assets/cinegpt.png',
    caseStudy: ''
  }
]

export default function Projects(){
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              onViewDetails={() => setSelected(p)}
            />
          ))}
        </div>
      </section>

      {/* Modal shown when a project is selected */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
