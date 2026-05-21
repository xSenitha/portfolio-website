import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ categoryData, index }) {
  const { category, skills } = categoryData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card p-6 rounded-2xl flex flex-col border border-cardBorder h-full"
    >
      <h3 className="text-lg font-bold text-text mb-6 border-b border-cardBorder pb-3 flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-accent mr-3 animate-pulse" />
        {category}
      </h3>
      
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-bg/30 border border-cardBorder/30 hover:border-accent/30 transition-all duration-300"
            >
              <div 
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-bg/70 shadow-sm"
                style={{ color: skill.color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-text select-none">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
