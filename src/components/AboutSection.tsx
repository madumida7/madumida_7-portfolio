import React from 'react';
import { PERSONAL_INFO, ROBOTICS_QUALIFICATION } from '../data/portfolioData';
import { BookOpen, Globe2, Bot, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Personal Journey & Academic Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            A dedicated MCA scholar blending technical rigor with genuine empathy and aesthetic precision.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-pink-200/80 shadow-md space-y-5 text-[#3b1d2c] leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-[#2d1120] flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-pink-600" />
                <span>Curiosity, Consistency & Real-World Exposure</span>
              </h3>

              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-[15px] sm:text-base leading-relaxed text-[#422332]">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-pink-100 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#702d4d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Disciplined Daily Learning</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#702d4d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Empathetic User-Centric Focus</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#702d4d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Resilient Growth Mindset</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Interdisciplinary Pursuits */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Japanese Language & Discipline Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-pink-200/80 shadow-md space-y-4 hover:border-pink-300 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-xs">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100/80 text-amber-900 font-medium text-xs border border-amber-200">
                  Duolingo Commitment
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-[#2d1120]">
                  Japanese Language Learning
                </h4>
                <p className="text-xs text-pink-700 font-medium mt-0.5">
                  Fostering Global Perspectives & Daily Self-Discipline
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4e2b3c] leading-relaxed">
                Maintaining an active Duolingo daily streak to master Japanese script (Hiragana, Katakana, Kanji basics). This discipline reflects personal dedication, habit formation, and openness to multicultural international opportunities.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#703450] bg-pink-50/60 p-2.5 rounded-xl border border-pink-100">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>"Consistency in small daily habits builds enduring strength."</span>
              </div>
            </div>

            {/* PG Diploma in Robotics Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-pink-200/80 shadow-md space-y-4 hover:border-pink-300 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 font-medium text-xs border border-purple-200">
                  {ROBOTICS_QUALIFICATION.status}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-[#2d1120]">
                  {ROBOTICS_QUALIFICATION.title}
                </h4>
                <p className="text-xs text-purple-700 font-medium mt-0.5">
                  Interdisciplinary Automation & System Logic
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4e2b3c] leading-relaxed">
                {ROBOTICS_QUALIFICATION.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
