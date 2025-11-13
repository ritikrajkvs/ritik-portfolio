import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Boxes } from "lucide-react";

export default function Skills() {

  const categories = [
    { title: "Frontend", icon: <Code className='text-indigo-600'/>, skills: ["React", "Tailwind CSS"] },
    { title: "Backend", icon: <Database className='text-indigo-600'/>, skills: ["Node.js", "Express", "MongoDB"] },
    { title: "Programming", icon: <Cpu className='text-indigo-600'/>, skills: ["C++", "DSA"] },
    { title: "Tools & Platforms", icon: <Boxes className='text-indigo-600'/>, skills: ["Firebase", "Git", "VS Code"] },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold mb-10 text-center">
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{opacity:0,y:20}} 
            whileInView={{opacity:1,y:0}} 
            transition={{delay:i*0.15}}
            className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">{cat.icon}</div>
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s,idx)=>(
                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}