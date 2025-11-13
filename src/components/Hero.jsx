import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">

      {/* LEFT SIDE TEXT */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-indigo-600">Ritik Raj</span>
        </h1>

        <p className="mt-3 text-gray-700 text-lg">
          Full-stack developer (MERN) building clean, scalable, AI-powered apps.
        </p>

        <a 
          href="#projects" 
          className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          View Projects
        </a>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gray-100">
          <img 
            src="/assets/profile.jpg"   // <-- Your new image
            alt="Ritik Raj"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

    </section>
  )
}
