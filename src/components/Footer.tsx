import React from 'react';
import { personalInfo } from '../data/about';
import { Github, Linkedin, Code2, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="soft-surface mt-20">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted mb-2">
              © {currentYear} {personalInfo.firstname} {personalInfo.lastname}. All rights reserved.
            </p>
            <p className="text-xs text-muted flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-red-500" fill="currentColor" /> using React & HeroUI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface-sm p-2 soft-hover soft-press focus-ring"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface-sm p-2 soft-hover soft-press focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.social.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface-sm p-2 soft-hover soft-press focus-ring"
              aria-label="Stack Overflow"
            >
              <Code2 size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="soft-surface-sm p-2 soft-hover soft-press focus-ring"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};