import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const { title, description, image, tags, githubLink, liveLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="glass-card glass-card-hover flex flex-col h-full rounded-2xl overflow-hidden border border-cardBorder"
    >
      {/* Project Image Container */}
      <div className="relative group overflow-hidden aspect-video bg-slate-900 border-b border-cardBorder">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text mb-2.5 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto">
          <motion.a
            whileTap={{ scale: 0.98 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl border border-cardBorder bg-card hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-text text-sm font-medium transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </motion.a>
          {liveLink && (
            <motion.a
              whileTap={{ scale: 0.98 }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl bg-accent text-white hover:bg-accent/90 text-sm font-medium transition-all duration-300 shadow-md shadow-accent/10"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
