import React from 'react';
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-bg border-t border-cardBorder">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted text-center md:text-left">
          &copy; {currentYear} Senitha. Built with React & Tailwind CSS. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 justify-center">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted transition-colors duration-300 text-lg ${link.hoverColor}`}
                aria-label={link.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
