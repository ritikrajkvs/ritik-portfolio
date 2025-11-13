import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// ⭐ FINAL EXTENDED PROJECT DATA (Resume-level details)
const data = [
  {
    title: "Devtinder",
    role: "Full-Stack Developer (MERN)",
    duration: "May 2025 – Aug 2025",
    shortDesc:
      "A MERN-based developer networking platform enabling profile creation, collaboration matchmaking, and real-time chat.",
    bullets: [
      "Designed and implemented a secure authentication system using JWT and bcrypt.",
      "Built dynamic developer profiles including skills, bio, tech stack, interests, and social links.",
      "Developed the intelligent feed algorithm based on skill-match and activity ranking.",
      "Implemented real-time chat using WebSockets, enabling instant messaging between matched users.",
      "Added connection request flow (send, accept, reject, pending states) with proper DB modeling.",
      "Built full CRUD operations for profile editing using RESTful APIs.",
      "Enhanced UI with TailwindCSS and responsive card-based layouts for mobile and desktop."
    ],
    tech: "React, Node.js, Express, MongoDB, TailwindCSS, WebSockets, JWT, REST API",
    repo: "https://github.com/ritikrajkvs/Devtinder",
    live: "https://ubiquitous-naiad-ba85d9.netlify.app/",
    thumb: "/assets/devtinder.png",
    caseStudy: ""
  },
  {
    title: "CineGPT",
    role: "Frontend + AI Integration Engineer",
    duration: "Jun 2024 – Jul 2024",
    shortDesc:
      "AI-powered movie recommendation platform using Google Gemini for natural language movie search and TMDB film data.",
    bullets: [
      "Integrated Google Gemini API to enable conversational movie search with smart recommendations.",
      "Built Redux-managed global store for trending movies, queries, carousels, and trailers.",
      "Integrated TMDB API for highly optimized movie lists, metadata fetching, and poster delivery.",
      "Implemented Firebase Authentication with secure session flow for Google and Email logins.",
      "Built Netflix-style responsive UI with animated banners, carousels, categories, and search results.",
      "Implemented movie trailer playback with embedded YouTube player and smart fallback handling.",
      "Optimized API calls using caching strategies to reduce redundant network requests."
    ],
    tech: "React, Redux Toolkit, Firebase, TMDB API, Gemini API, TailwindCSS, YouTube Embed API",
    repo: "https://github.com/ritikrajkvs/CineGPT",
    live: "https://cinegpt-4e591.web.app/",
    thumb: "/assets/cinegpt.png",
    caseStudy: ""
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {data.map((p, i) => (
            <ProjectCard key={i} project={p} onViewDetails={() => setSelected(p)} />
          ))}
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
