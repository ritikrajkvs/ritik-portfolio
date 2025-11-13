import React from "react";
import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Ritik Raj
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          A passionate <span className="font-semibold text-gray-800">Full-Stack Developer</span>{" "}
          specializing in building scalable MERN applications, AI-powered platforms, and
          production-ready interfaces. I enjoy creating clean, functional, and elegant digital
          experiences.
        </p>

        {/* ROLE BADGES */}
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="px-4 py-1 bg-indigo-100 text-indigo-700 font-medium rounded-full text-sm">
            MERN Developer
          </span>
          <span className="px-4 py-1 bg-purple-100 text-purple-700 font-medium rounded-full text-sm">
            450+ DSA Problems
          </span>
          <span className="px-4 py-1 bg-pink-100 text-pink-700 font-medium rounded-full text-sm">
            AI Projects
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <a
            href="#contact"
            className="
              px-5 py-3 rounded-lg text-white font-medium
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700 transition
              flex items-center gap-2
            "
          >
            Hire Me <ArrowRight size={18} />
          </a>

          <a
            href="/assets/Ritik_Raj_Resume.pdf"
            download
            className="
              px-5 py-3 rounded-lg border font-medium
              flex items-center gap-2 hover:bg-gray-50 transition
            "
          >
            <FileDown size={18} /> Resume
          </a>
        </div>

        {/* VIEW PROJECTS LINK */}
        <a
          href="#projects"
          className="mt-5 inline-block text-indigo-600 font-medium hover:underline"
        >
          View My Projects →
        </a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-72 h-80 rounded-2xl shadow-xl overflow-hidden bg-gray-200">
          <img
            src="/assets/profile.jpg"
            alt="Ritik Raj"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
