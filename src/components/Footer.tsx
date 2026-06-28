import React from 'react';
import { Linkedin, Github, BarChart2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-neutral-50 border-t border-black text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Branding */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif text-lg font-black italic text-black tracking-tight uppercase">
              {personalInfo.name}
            </div>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed">
              &copy; {currentYear} Data Analyst Portfolio. Built with absolute precision and statistical clarity.
            </p>
          </div>

          {/* Core Channels & Social Vectors */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-neutral-600 transition-colors font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 border-b border-black pb-0.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-neutral-600 transition-colors font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 border-b border-black pb-0.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Tableau Public Profile: Redirecting to Khushi's public data viz gallery...");
              }}
              className="text-black hover:text-neutral-600 transition-colors font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 border-b border-black pb-0.5"
            >
              <BarChart2 className="w-4 h-4 text-black" />
              <span>Tableau Public</span>
            </a>
          </div>

        </div>

        {/* Small credit line inside the margin */}
        <div className="flex items-center justify-center space-x-1.5 pt-8 mt-8 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          <span>Khushi's Portfolio</span>
          <span>&bull;</span>
          <span>Crafted with React, Tailwind, and Motion</span>
        </div>

      </div>
    </footer>
  );
}
