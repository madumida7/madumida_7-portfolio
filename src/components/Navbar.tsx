import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, GraduationCap, FolderGit2, Wrench, Mail, User } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'approach', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Approach', href: '#approach', id: 'approach', icon: Sparkles },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Wrench },
    { label: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3.5 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-lg p-1"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center font-serif text-lg font-semibold shadow-md shadow-pink-200/50 group-hover:scale-105 transition-transform duration-300">
            MD
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-[#3b1728] group-hover:text-pink-700 transition-colors">
              Madumida D.
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-pink-700/80">
              MCA • Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 glass-panel px-4 py-1.5 rounded-full border border-pink-200/60 shadow-xs" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              id={`nav-link-${item.id}`}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-xs'
                  : 'text-[#57273f] hover:text-[#2d1120] hover:bg-pink-100/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA: Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-[#831843] border border-pink-200/80 shadow-xs hover:shadow-md hover:border-pink-300 transition-all duration-300 group"
          >
            <FileText className="w-3.5 h-3.5 text-pink-500 group-hover:scale-110 transition-transform" />
            <span>Curriculum Vitae</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="nav-resume-mobile-btn"
            onClick={onOpenResume}
            className="p-2 rounded-lg glass-panel text-[#831843] border border-pink-200"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-pink-600" />
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-panel text-[#57273f] border border-pink-200 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-pink-200/80 px-6 py-4 mt-2 transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-pink-100 text-pink-900 font-semibold'
                      : 'text-[#57273f] hover:bg-pink-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-pink-500" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-pink-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
