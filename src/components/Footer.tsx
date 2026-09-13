import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-pink-200/80 bg-[#fff0f6]/70 relative z-10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Quote & Brand Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-pink-200/60">
          
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                MD
              </div>
              <span className="font-serif text-xl font-bold text-[#2d1120]">
                Madumida D.
              </span>
            </div>
            <p className="text-xs text-[#703b54] max-w-md">
              Master of Computer Applications • Dr. G.R. Damodaran College of Science, Coimbatore
            </p>
          </div>

          {/* Inspirational Quotes Card */}
          <div className="text-center md:text-right max-w-md space-y-1.5 p-4 rounded-2xl bg-white/70 border border-pink-200/60">
            <p className="font-serif text-base italic text-[#4a1c32]">
              "{PERSONAL_INFO.quotes.primary}"
            </p>
            <p className="text-[11px] text-pink-700 font-medium">
              "{PERSONAL_INFO.quotes.secondary}"
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e3952]">
          
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Madumida D. Designed with classical elegance & purpose.</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/80 hover:bg-white text-[#421b2f] hover:text-pink-700 border border-pink-200 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/80 hover:bg-white text-[#421b2f] hover:text-pink-700 border border-pink-200 transition-colors"
              title="Send Direct Email"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/80 hover:bg-white text-[#421b2f] hover:text-pink-700 border border-pink-200 transition-colors"
              title="Scroll to top"
            >
              <span className="text-[11px] font-medium">Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-pink-600" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
