import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import { FaFileDownload } from 'react-icons/fa';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const nameToType = "Senitha Gihen..";
    let index = 0;
    let current = "";
    const timer = setInterval(() => {
      if (index < nameToType.length) {
        current += nameToType.charAt(index);
        setDisplayText(current);
        index++;
      } else {
        clearInterval(timer);
        setIsDone(true);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const section = document.querySelector('#projects');
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="glow-accent top-1/4 left-1/4 w-[300px] h-[300px] bg-accent" />
      <div className="glow-accent bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Greeting Tag */}
          <motion.span
            variants={itemVariants}
            className="text-accent font-semibold tracking-wider text-xs md:text-sm uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20 mb-6"
          >
            Welcome to my portfolio
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text mb-6 leading-tight min-h-[1.2em]"
          >
            Hi, I'm{" "}
            <span className="relative bg-gradient-to-r from-accent via-indigo-500 to-sky-400 bg-clip-text text-transparent inline-flex items-center">
              {displayText}
              <span className={`inline-block w-[3px] md:w-[4px] h-[0.75em] ml-1 bg-accent ${isDone ? 'animate-pulse' : ''}`} />
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl font-medium text-muted mb-8 max-w-2xl"
          >
            Software Engineering Student &amp; Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-muted max-w-xl mb-10 leading-relaxed"
          >
            I specialize in crafting polished web applications and designing robust digital experiences. Passionate about frontend design excellence, backend architecture, and IoT systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="#projects"
              onClick={handleScrollToProjects}
              className="py-3 px-8 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/25 flex items-center justify-center text-sm md:text-base"
            >
              View Projects
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="#"
              className="py-3 px-8 rounded-xl border border-cardBorder bg-card hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-text font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <FaFileDownload className="w-4 h-4 text-accent animate-bounce" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => {
              if (link.name === "Email") return null;
              const Icon = link.icon;
              return (
                <motion.a
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted transition-colors duration-300 text-2xl ${link.hoverColor}`}
                  aria-label={link.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
