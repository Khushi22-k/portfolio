import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, MapPin, Phone, Award } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-[#FAF9FC] overflow-hidden border-b border-indigo-100">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0A0D1A] hidden lg:block border-l border-indigo-950/50" />
      
      {/* Beautiful Dynamic Gradient Blobs for background colors */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-200 rounded-full filter blur-[120px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-blue-300 via-indigo-200 to-pink-100 rounded-full filter blur-[140px] opacity-30 pointer-events-none hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline / Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-block px-3 py-1 border border-indigo-600 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-mono text-[10px] uppercase tracking-widest font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                PORTFOLIO 2026
              </span>
              <span className="inline-block px-3 py-1 border border-purple-300 bg-purple-50 text-purple-700 font-mono text-[10px] uppercase tracking-widest font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.05)]">
                B.TECH AI/ML SPECIALIST
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.9] mb-8">
              <span className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-700 bg-clip-text text-transparent">Khushi</span> <br />
              <span className="font-normal italic bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">Sharma</span>
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-indigo-950 italic font-normal leading-relaxed mb-6 max-w-2xl border-l-2 border-indigo-600 pl-4">
              Turning raw, complex multi-source datasets into elegant, strategic visual narratives.
            </p>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 max-w-xl">
              Specializing in full-lifecycle data analytics: advanced statistical modeling, custom-built Power BI diagnostic dashboards, automated Python pipelines, and applied RAG stock advisers.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={onProjectsClick}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest rounded-none border border-black transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-[1px] cursor-pointer"
              >
                <span>VIEW WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center space-x-2 bg-white hover:bg-indigo-50 text-indigo-600 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest rounded-none border border-indigo-600 transition-all shadow-[4px_4px_0px_rgba(79,70,229,0.15)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(79,70,229,0.25)] cursor-pointer"
              >
                <span>GET IN TOUCH</span>
              </button>
            </div>

            {/* Contact quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-6 border-t border-indigo-100 max-w-xl">
              <div className="flex items-center space-x-3 text-xs text-neutral-700 font-mono uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-neutral-700 font-mono uppercase tracking-wider">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-xs text-neutral-700 font-mono uppercase tracking-wider">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-neutral-700 font-mono uppercase tracking-wider">
                <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Infosys Springboard AI</span>
              </div>
            </div>
          </div>

          {/* Profile Photo & Social Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Card Container with rich color elements */}
              <div className="relative bg-white lg:bg-gradient-to-b lg:from-[#111428] lg:to-[#0A0C16] border border-black lg:border-indigo-950/60 p-6 rounded-none shadow-[8px_8px_0px_rgba(79,70,229,0.15)] lg:shadow-[0_15px_40px_rgba(0,0,0,0.5)] text-center lg:text-left transition-all duration-300 group-hover:shadow-[12px_12px_0px_rgba(79,70,229,0.25)] lg:group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
                
                {/* Photo Element - Styled as an Artistic Circular Framed Portrait */}
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[3px] border-indigo-600 bg-neutral-100 relative group-hover:scale-[1.03] transition-transform duration-500 shadow-lg shadow-indigo-600/10">
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      id="profile-portrait-img"
                    />
                  </div>
                </div>

                {/* Person details */}
                <div className="border-t border-indigo-50 lg:border-indigo-950/50 pt-4 text-center">
                  <h3 className="font-serif text-2xl font-bold text-indigo-950 lg:text-white mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-indigo-600 lg:text-indigo-400 font-extrabold tracking-widest uppercase mb-4">
                    Data Analyst / AI Student
                  </p>

                  {/* Social Buttons with color hover states */}
                  <div className="flex justify-center space-x-3 pt-2">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-indigo-600 lg:border-indigo-800 text-indigo-600 lg:text-indigo-300 hover:bg-indigo-600 hover:text-white lg:hover:bg-indigo-500 lg:hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-indigo-600 lg:border-indigo-800 text-indigo-600 lg:text-indigo-300 hover:bg-indigo-600 hover:text-white lg:hover:bg-indigo-500 lg:hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="p-2 border border-indigo-600 lg:border-indigo-800 text-indigo-600 lg:text-indigo-300 hover:bg-indigo-600 hover:text-white lg:hover:bg-indigo-500 lg:hover:text-white transition-colors"
                      title="Email Contact"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
