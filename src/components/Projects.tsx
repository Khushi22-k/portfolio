import React, { useState } from 'react';
import { ArrowUpRight, Github, X, Eye, TrendingUp, Cpu, Server } from 'lucide-react';
import { projects, personalInfo } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#FAF9FC] to-white border-b border-indigo-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-indigo-100 pb-8">
          <div>
            <span className="font-mono text-[10px] font-bold text-indigo-600 tracking-widest uppercase mb-3 block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-none">
              Selected Case Studies
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
              Systematic evidence of business impact through advanced statistical modeling, custom business intelligence development, and pipeline engineering.
            </p>
          </div>
          <a
            href="https://github.com/Khushi22-k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 font-mono text-xs font-bold text-indigo-600 border-b border-indigo-600 pb-0.5 hover:text-indigo-800 hover:border-indigo-800 mt-6 md:mt-0 uppercase tracking-widest"
          >
            <span>VIEW ALL ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const badgeLabel = 
              project.id === "mutual-fund-dashboard" ? "FINANCE" :
              project.id === "super-sales-dashboard" ? "RETAIL BI" : "AI PIPELINE";

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-indigo-50 rounded-none shadow-[6px_6px_0px_rgba(79,70,229,0.1)] hover:shadow-[10px_10px_0px_rgba(79,70,229,0.18)] hover:translate-x-[-2px] hover:translate-y-[-2px] overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col h-full border-b-[3px] border-b-indigo-500"
              >
                {/* Project Image Panel */}
                <div className="h-48 overflow-hidden relative bg-neutral-100 border-b border-indigo-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Ribbon */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border border-indigo-500 px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest uppercase shadow-md">
                    {badgeLabel}
                  </div>
                  {/* Hover indicator overlay */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white px-4 py-2 rounded-none text-[10px] font-mono font-bold uppercase tracking-widest flex items-center space-x-1.5 shadow-lg border border-indigo-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>EXPLORE ANALYSIS</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Technical Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xs font-bold italic text-indigo-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      {idx === 0 ? 'Jun 2024' : idx === 1 ? 'May 2024' : 'Apr 2024'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-bold text-indigo-950 tracking-tight group-hover:text-indigo-600 transition-all mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Subtitle / Role */}
                  <p className="font-mono text-[11px] text-purple-700 mb-4 font-bold uppercase tracking-wider">
                    ROLE: {project.role}
                  </p>

                  {/* Short Description */}
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed mb-6 line-clamp-3 flex-grow text-justify">
                    {project.description}
                  </p>

                  {/* Key Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-indigo-50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-50/50 border border-indigo-100/80 text-indigo-700 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Project Details Dialog Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Modal Body */}
            <div className="relative bg-white border-2 border-indigo-600 w-full max-w-3xl rounded-none shadow-[0_20px_50px_rgba(79,70,229,0.25)] overflow-hidden animate-in zoom-in-95 duration-200 z-10 flex flex-col max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-indigo-200 bg-gradient-to-r from-indigo-950 to-indigo-900 text-white">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[9px] font-bold text-white bg-indigo-700/80 border border-indigo-500 px-2.5 py-1 uppercase tracking-widest rounded-sm">
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                    Project Case Study
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-indigo-200 hover:text-white hover:bg-indigo-800 rounded-none transition-all cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-6 space-y-6 flex-grow text-left">
                {/* Hero Title Area */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-indigo-950 leading-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-extrabold">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Dashboard Screenshot Preview */}
                <div className="aspect-[16/9] w-full overflow-hidden border border-indigo-100 bg-neutral-100 rounded-none shadow-inner">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Metrics Bento Grid */}
                <div>
                  <h4 className="font-mono text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest mb-3 border-b border-indigo-50 pb-1">
                    Core Business Metrics &amp; Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-indigo-50/40 border border-indigo-100/60 p-4 rounded-none text-center shadow-[4px_4px_0px_rgba(79,70,229,0.1)]">
                        <div className="text-2xl font-serif font-black text-indigo-600 tracking-tight">
                          {metric.value}
                        </div>
                        <div className="font-mono text-[10px] text-indigo-950 mt-1 uppercase font-bold tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest border-b border-indigo-50 pb-1">
                    Overview &amp; Analytical Problem Statement
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed text-justify">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100 pb-1">
                    Engineering Steps &amp; Technical Execution
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-600">
                        <span className="font-mono text-[10px] text-black font-bold mr-1 border border-black px-1.5 py-0.5 bg-neutral-100 tracking-wider">
                          [0{idx + 1}]
                        </span>
                        <span className="font-sans leading-relaxed pt-0.5">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-4 border-t border-black/10">
                  <h4 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white border border-black text-black px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="border-t border-black bg-neutral-50 px-6 py-4 flex flex-col sm:flex-row justify-end gap-3">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer border border-indigo-600 hover:border-indigo-700 shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-y-[1px]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW INTERACTIVE DASHBOARD</span>
                  </a>
                ) : (
                  <button
                    onClick={() => alert("This triggers a high-fidelity interactive dashboard showcase inside your analytics secure workspace.")}
                    className="inline-flex justify-center items-center space-x-2 bg-black hover:bg-neutral-800 text-white px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest border border-black transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW INTERACTIVE DASHBOARD</span>
                  </button>
                )}
                <a
                  href={selectedProject.codeUrl || personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center space-x-2 bg-white hover:bg-neutral-50 text-black px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest border border-black transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>VIEW CODE ON GITHUB</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
