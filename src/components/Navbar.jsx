import React, { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Ritik<span className="text-gray-900">_Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><a href="#skills" className="hover:text-indigo-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>

          {/* Resume Download Button */}
          <li>
            <a
              href="/assets/FINAL_RESUME.pdf"  // PLACE YOUR RESUME HERE
              download
              className="
                flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-700 hover:to-purple-700 transition
              "
            >
              <FileDown size={18} /> Download Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#skills" className="block text-gray-700 hover:text-indigo-600">Skills</a>
          <a href="#projects" className="block text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>

          <a
            href="/assets/Ritik_Raj_Resume.pdf"
            download
            className="
              flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-white text-sm
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700 transition
            "
          >
            <FileDown size={18} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
