import React from 'react'
import ProjectCard from './ProjectCard'

const data = [
  {
    title: 'Devtinder',
    desc: 'Developer networking platform (MERN)',
    tech: 'React, Node.js, MongoDB, Express',
    repo: 'https://github.com/ritikrajkvs/Devtinder',
    live: 'https://ubiquitous-naiad-ba85d9.netlify.app/',
    thumb: '/assets/devtinder.png'
  },
  {
    title: 'CineGPT',
    desc: 'AI-powered movie recommendation system',
    tech: 'React, Redux, Firebase, TMDB API',
    repo: 'https://github.com/ritikrajkvs/CineGPT',
    live: 'https://cinegpt-4e591.web.app/',
    thumb: '/assets/cinegpt.png'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}