import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="
        bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl 
        border border-gray-200 dark:border-gray-700
        grid md:grid-cols-2 gap-10
      ">
        
        {/* Left side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Let's Connect 🤝
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Feel free to reach out for opportunities, collaborations, or just a tech conversation.
            I usually respond within 24 hours.
          </p>

          <div className="space-y-4">
            
            <a
              href="mailto:ritikrajkvs@gmail.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              <Mail className="text-indigo-600" />
              ritikrajkvs@gmail.com
            </a>

            <a
              href="tel:+917390989825"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              <Phone className="text-indigo-600" />
              +91 73909 89825
            </a>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="text-indigo-600" />
              India
            </div>

            <div className="flex gap-5 mt-3">
              <a
                href="https://github.com/ritikrajkvs"
                target="_blank"
                className="hover:text-indigo-600"
              >
                <Github size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/ritikraj026"
                target="_blank"
                className="hover:text-indigo-600"
              >
                <Linkedin size={28} />
              </a>
            </div>

          </div>
        </div>

        {/* Right side */}
        <form
          action="https://formspree.io/f/xqakawge"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            required
            name="name"
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800"
            placeholder="Your Name"
          />

          <input
            required
            name="email"
            type="email"
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800"
            placeholder="Your Email"
          />

          <textarea
            required
            name="message"
            rows="4"
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800"
            placeholder="Your Message..."
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
