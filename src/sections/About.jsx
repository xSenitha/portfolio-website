import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaGamepad } from 'react-icons/fa';

export default function About() {
  const cardItems = [
    {
      icon: FaGraduationCap,
      title: "Education",
      desc: "Software Engineering Student pursuing technical expertise in system design and architecture."
    },
    {
      icon: FaCode,
      title: "Interests",
      desc: "Full stack development, IoT systems, modular scripting frameworks, and premium web designs."
    },
    {
      icon: FaGamepad,
      title: "Hobbies",
      desc: "Coding game mods, 3D modeling in Blender, digital art, and exploring open-source projects."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg/50">
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-text"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-text">
              Crafting efficient, reliable systems at the intersection of logic and creativity.
            </h3>
            <p className="text-muted leading-relaxed text-sm md:text-base">
              Hello! I'm Senitha, a software engineering student passionate about designing and building robust digital products. I specialize in building responsive web applications using React, Node.js, and modern database ecosystems.
            </p>
            <p className="text-muted leading-relaxed text-sm md:text-base">
              My engineering approach extends beyond standard web frameworks. I actively build customized gameplay scripts (FiveM), explore embedded smart systems, and design assets using Blender. This multidisciplinary exposure gives me a comprehensive viewpoint on software architecture, UX, and systems engineering.
            </p>
            <p className="text-muted leading-relaxed text-sm md:text-base">
              I am dedicated to continuous refinement of my skillset, looking for opportunities to collaborate on complex projects, join forward-thinking engineering teams, and deliver impactful software solutions.
            </p>
          </motion.div>

          {/* Cards Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {cardItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-5 rounded-2xl border border-cardBorder flex items-start gap-4 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 text-accent flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base md:text-lg font-bold text-text mb-1">{item.title}</h4>
                    <p className="text-muted text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
