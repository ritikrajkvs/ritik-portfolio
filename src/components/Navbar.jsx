import React, { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50 backdrop-blur-md bg-white/70
        border-b border-gray-200
      "
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r 
            from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Ritik Raj
          </span>
          <span className="text-gray-600 hidden sm:inline">• Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-indigo-600 transition">Home</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </li>
        </ul>

        {/* Right Side Resume Button */}
        <a
          href="/assets/FINAL_RESUME.pdf"
          download
          className="
            hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm
            bg-gray-900 text-white hover:bg-gray-700 transition
          "
        >
          <FileDown size={18} /> Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 border-t">
          <a href="#home" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#skills" className="block text-gray-700 hover:text-indigo-600">Skills</a>
          <a href="#projects" className="block text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>

          <a
            href="/assets/FINAL_RESUME.pdf"
            download
            className="
              flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-white text-sm
              bg-gray-900 hover:bg-gray-700 transition
            "
          >
            <FileDown size={18} /> Resume
          </a>
        </div>
      )}
    </header>
  );
}
