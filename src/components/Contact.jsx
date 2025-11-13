// src/components/Contact.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="
        bg-white p-8 rounded-2xl shadow-xl 
        border border-gray-200
        grid md:grid-cols-2 gap-10
      ">
        {/* Left side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let's Connect 🤝</h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Reach out for job opportunities, collaboration, or technical discussions.
            I typically respond within 24 hours.
          </p>

          <div className="space-y-4">
            <a href="mailto:ritikrajkvs@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <Mail className="text-indigo-600" /> ritikrajkvs@gmail.com
            </a>

            <a href="tel:+917390989825" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <Phone className="text-indigo-600" /> +91 73909 89825
            </a>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-indigo-600" /> India
            </div>

            <div className="flex gap-5 mt-3">
              <a href="https://github.com/ritikrajkvs" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Github size={28} />
              </a>

              <a href="https://www.linkedin.com/in/ritikraj026" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: simple contact form via Formspree */}
        <form
          action="https://formspree.io/f/xqakawge"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            required
            name="name"
            className="border border-gray-300 p-3 rounded-lg"
            placeholder="Your Name"
          />

          <input
            required
            name="email"
            type="email"
            className="border border-gray-300 p-3 rounded-lg"
            placeholder="Your Email"
          />

          <textarea
            required
            name="message"
            rows="4"
            className="border border-gray-300 p-3 rounded-lg"
            placeholder="Your Message..."
          />

          <button type="submit" className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
