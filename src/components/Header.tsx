import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, Printer } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  onPrintResume: () => void;
}

export default function Header({ onPrintResume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-[0_4px_30px_rgba(79,70,229,0.08)]' 
        : 'bg-[#F9F9F9]/90 backdrop-blur-sm border-b border-neutral-200'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex justify-between items-center">
        {/* Brand / Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 font-serif text-base font-bold italic tracking-wide text-indigo-900 hover:opacity-80 transition-opacity"
          id="nav-logo"
        >
          <span className="font-mono text-xs not-italic border border-indigo-600 px-1.5 py-0.5 mr-1 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">KS</span>
          <span className="bg-gradient-to-r from-indigo-950 to-indigo-700 bg-clip-text text-transparent">{personalInfo.name}</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans text-xs font-bold uppercase tracking-widest transition-all duration-200 relative py-1 hover:text-indigo-600 ${
                activeSection === link.id ? 'text-indigo-600 scale-105' : 'text-neutral-500'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onPrintResume}
            className="flex items-center space-x-1.5 border border-indigo-600 hover:bg-indigo-50 text-indigo-600 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,0.05)]"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT CV</span>
          </button>
          <button
            onClick={onPrintResume}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] border border-black cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD CV</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={onPrintResume}
            className="p-1.5 border border-neutral-300 text-black rounded hover:bg-neutral-100"
            title="Print Resume"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-black hover:bg-neutral-100 rounded transition-colors"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-indigo-100 py-4 px-6 space-y-4 animate-in fade-in duration-200 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-sans text-xs uppercase tracking-widest font-bold py-1 transition-colors ${
                  activeSection === link.id ? 'text-indigo-600 font-extrabold' : 'text-neutral-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onPrintResume();
              }}
              className="flex justify-center items-center space-x-2 w-full border border-indigo-600 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50/50"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT PORTFOLIO CV</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onPrintResume();
              }}
              className="flex justify-center items-center space-x-2 w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white py-2.5 font-mono text-xs font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
