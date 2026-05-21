import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg/50">
      {/* Background glow */}
      <div className="glow-accent bottom-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-text"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
          <p className="text-muted mt-6 max-w-xl mx-auto text-sm md:text-base">
            Here are some of the primary projects I have developed, ranging from mobile client applications to smart hardware interfaces and automation systems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
