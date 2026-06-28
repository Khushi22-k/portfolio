import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ResumeExperience from './components/ResumeExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data imports for print layout rendering
import { personalInfo, experiences, education, certifications, projects, skillCategories, languages } from './data';

export default function App() {
  
  const handlePrintResume = () => {
    window.print();
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans antialiased text-[#191c1e]">
      
      {/* ----------------- SCREEN DISPLAY (Hides on print) ----------------- */}
      <div className="print:hidden">
        {/* Navigation bar */}
        <Header onPrintResume={handlePrintResume} />

        {/* Hero Section */}
        <Hero 
          onContactClick={() => handleScrollToSection('contact')} 
          onProjectsClick={() => handleScrollToSection('projects')} 
        />

        {/* Selected Projects Grid */}
        <Projects />

        {/* Skills & Competencies Heatmap */}
        <Skills />

        {/* Resume, Education and Certifications */}
        <ResumeExperience />

        {/* Messaging & Contacts */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>


      {/* ----------------- PROFESSIONAL PRINT CV LAYOUT (Only visible on print) ----------------- */}
      <div className="hidden print:block bg-white p-10 font-sans text-black leading-tight text-left">
        {/* Header Block */}
        <div className="border-b-2 border-black pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight text-black">{personalInfo.name}</h1>
              <h2 className="text-sm font-semibold tracking-wider text-neutral-800 uppercase mt-1">{personalInfo.title}</h2>
            </div>
            <div className="text-right font-mono text-[11px] text-neutral-700 space-y-0.5">
              <div>Phone: {personalInfo.phone}</div>
              <div>Email: {personalInfo.email}</div>
              <div>Location: {personalInfo.location}</div>
              <div>LinkedIn: linkedin.com/in/khushi-sharma-2b4897289</div>
              <div>GitHub: github.com/Khushi22-k</div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-6">
          <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-2">
            Professional Summary
          </h3>
          <p className="text-xs text-neutral-800 leading-relaxed text-justify">
            {personalInfo.summary}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-6">
          <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-3">
            Professional Experience
          </h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>{exp.role} &bull; <span className="text-neutral-700">{exp.company}</span></span>
                <span className="font-mono text-[10px] text-neutral-600 font-normal">{exp.period}</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-800">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-snug text-justify">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selected Dashboard Case Studies */}
        <div className="mb-6">
          <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-3">
            Selected Analytics Projects
          </h3>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>{proj.title} <span className="font-mono text-[10px] font-normal text-neutral-600">({proj.tags.join(', ')})</span></span>
                  <span className="font-mono text-[10px] text-neutral-600 font-normal">Case Study</span>
                </div>
                <p className="text-xs text-neutral-800 leading-snug text-justify">
                  {proj.description}
                </p>
                <ul className="list-disc pl-4 text-[11px] text-neutral-700 space-y-0.5">
                  {proj.bullets.slice(1, 3).map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-justify">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Grid for Skills, Education & Certifications */}
        <div className="grid grid-cols-2 gap-8 pt-2">
          
          {/* Left Column: Education & Certs */}
          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-2">
                Education
              </h3>
              <div className="text-xs">
                <div className="font-bold">{education.degree}</div>
                <div className="text-neutral-700">{education.institution}</div>
                <div className="font-mono text-[10px] text-neutral-600 mt-0.5">{education.period}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-2">
                Certifications
              </h3>
              <ul className="space-y-1 text-xs text-neutral-800">
                {certifications.map((cert, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{cert.name}</span> &mdash; <span className="text-neutral-600 text-[10px] font-mono">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Skills Heatmap Summary */}
          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-2">
                Core Tech Stack
              </h3>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <div key={cat.name} className="text-xs">
                    <span className="font-bold text-neutral-900">{cat.name}: </span>
                    <span className="text-neutral-800">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase border-b border-neutral-300 pb-1 mb-2">
                Languages
              </h3>
              <div className="text-xs text-neutral-800">
                {languages.join(', ')}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
