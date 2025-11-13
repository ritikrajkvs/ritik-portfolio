import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-lg">Ritik Raj</h1>
          <p className="text-xs text-gray-500">Full Stack Developer (MERN)</p>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/assets/FINAL_RESUME.pdf" download className="px-3 py-1 border rounded">Resume</a>
        </nav>

        <div className="hidden md:flex gap-4">
          <a href="mailto:ritikrajkvs@gmail.com"><Mail size={18}/></a>
          <a href="https://github.com/ritikrajkvs" target="_blank"><Github size={18}/></a>
          <a href="https://www.linkedin.com/in/ritikraj026" target="_blank"><Linkedin size={18}/></a>
        </div>

        <button className="md:hidden px-2 py-1 border rounded">Menu</button>
      </div>
    </header>
  )
}