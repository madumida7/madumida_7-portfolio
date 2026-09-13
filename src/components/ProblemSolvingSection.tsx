import React from 'react';
import { PERSONAL_INFO, PROBLEM_SOLVING_STEPS } from '../data/portfolioData';
import { Sparkles, Compass, Layers, Palette, ShieldCheck } from 'lucide-react';

export const ProblemSolvingSection: React.FC = () => {
  const stepIcons = [Compass, Layers, Palette, ShieldCheck];

  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-transparent via-[#ffeef5]/50 to-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Case Study Thinking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            Approach to Problem Solving
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            Bridging the vital gap between backend architecture and empathetic, elegant interfaces.
          </p>
        </div>

        {/* Central Philosophy Quote Box */}
        <div className="max-w-3xl mx-auto mb-14 p-6 sm:p-8 rounded-2xl glass-panel border border-pink-200/80 shadow-sm text-center">
          <p className="font-serif text-lg sm:text-xl text-[#3b1527] italic leading-relaxed">
            "{PERSONAL_INFO.problemSolvingApproach}"
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-pink-700">
            <span className="w-8 h-px bg-pink-300" />
            <span>Core Engineering Philosophy</span>
            <span className="w-8 h-px bg-pink-300" />
          </div>
        </div>

        {/* 4-Step Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_SOLVING_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl glass-panel border border-pink-200/80 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-pink-400/80 group-hover:text-pink-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-700 flex items-center justify-center border border-pink-200/60 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#2d1120] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#552c3f] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-pink-100/60 flex items-center gap-1.5 text-[11px] font-medium text-pink-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Phase {idx + 1} Execution</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
