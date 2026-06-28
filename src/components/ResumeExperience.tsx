import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Globe, FileCheck, ExternalLink } from 'lucide-react';
import { experiences, education, certifications, languages } from '../data';

export default function ResumeExperience() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'certifications'>('all');

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-[#FAF9FC] border-b border-indigo-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-indigo-100 pb-8">
          <span className="font-mono text-[10px] font-bold text-indigo-600 tracking-widest uppercase mb-3 block">
            PROFESSIONAL BACKGROUND
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-none">
            Resume &amp; Timeline
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
            Academic credentials, professional industry internships, and certified skill matrices.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-indigo-100 pb-6">
          {(['all', 'experience', 'education', 'certifications'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-none border transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-indigo-950 border-indigo-200 hover:bg-indigo-50/50'
              }`}
            >
              {tab === 'all' ? 'Show All' : tab}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience & Education Columns */}
          <div className={`space-y-12 ${(activeTab === 'all' || activeTab === 'experience' || activeTab === 'education') ? 'lg:col-span-8' : 'hidden'}`}>
            
            {/* Experience Panel */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div className="space-y-8">
                <h3 className="font-serif text-xl font-bold italic text-indigo-950 flex items-center space-x-3 border-b border-indigo-100 pb-3">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <span>Work Experience</span>
                </h3>

                <div className="space-y-10">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-indigo-200 space-y-3">
                      {/* Floating Timeline Bullet - Sharp Square */}
                      <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-none bg-indigo-600 border border-indigo-500"></span>
                      
                      {/* Meta titles */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div>
                          <h4 className="font-sans text-base font-bold text-indigo-950 uppercase tracking-tight">{exp.role}</h4>
                          <span className="font-serif text-sm font-bold italic text-indigo-500 mt-1 block">{exp.company}</span>
                        </div>
                        <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-none w-fit uppercase font-bold tracking-wider">
                          {exp.period} &bull; Internship
                        </span>
                      </div>

                      {/* Detail list bullets */}
                      <ul className="space-y-2.5 pt-3">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed text-justify">
                            <span className="font-mono text-[10px] text-indigo-600 font-bold mt-0.5 shrink-0">[&bull;]</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Panel */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className="space-y-8 pt-4">
                <h3 className="font-serif text-xl font-bold italic text-indigo-950 flex items-center space-x-3 border-b border-indigo-100 pb-3">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  <span>Academic Qualifications</span>
                </h3>

                <div className="relative pl-6 border-l border-indigo-200 space-y-3">
                  {/* Timeline Bullet - Sharp Square */}
                  <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-none bg-indigo-600 border border-indigo-500"></span>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h4 className="font-sans text-base font-bold text-indigo-950 uppercase tracking-tight">{education.degree}</h4>
                      <span className="font-serif text-sm font-bold italic text-indigo-500 mt-1 block">{education.institution}</span>
                    </div>
                    <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-none w-fit uppercase font-bold tracking-wider">
                      {education.period}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-3 text-justify">
                    {education.details}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Certifications & Languages */}
          <div className={`space-y-12 ${
            (activeTab === 'all') 
              ? 'lg:col-span-4' 
              : (activeTab === 'certifications') 
                ? 'lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-0' 
                : 'hidden'
          }`}>
            
            {/* Certifications Card List */}
            <div className="space-y-8">
              <h3 className="font-serif text-xl font-bold italic text-indigo-950 flex items-center space-x-3 border-b border-indigo-100 pb-3">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>Industry Credentials</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-indigo-100 p-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:shadow-[5px_5px_0px_rgba(79,70,229,0.25)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 text-left">
                      <FileCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                      <div>
                        <h4 className="font-sans text-xs font-bold text-indigo-950 uppercase tracking-wider group-hover:text-indigo-600 group-hover:underline transition-colors leading-tight">
                          {cert.name}
                        </h4>
                        <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-1 block">
                          ISSUER: {cert.issuer}
                        </span>
                      </div>
                    </div>
                    <span className="p-2 border border-indigo-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white rounded-none transition-all bg-white">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Panel */}
            {activeTab === 'all' && (
              <div className="space-y-6 pt-4">
                <h3 className="font-serif text-lg font-bold italic text-indigo-950 flex items-center space-x-3 border-b border-indigo-100 pb-3">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span>Languages Spoken</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-none font-mono text-[10px] font-bold uppercase tracking-widest"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
