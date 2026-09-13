import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, Layout, Server, Database, Cpu, Wrench, Sparkles, 
  Terminal, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <Wrench className="w-3.5 h-3.5 text-pink-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            An honest, confident inventory of technical disciplines, languages, and modern tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = getIcon(category.icon);
            const isHovered = hoveredCard === category.category;

            return (
              <div
                key={category.category}
                onMouseEnter={() => setHoveredCard(category.category)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 sm:p-7 rounded-3xl glass-panel border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-pink-300 shadow-lg bg-white/90 -translate-y-1'
                    : 'border-pink-200/80 shadow-xs hover:border-pink-300'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center border border-pink-200/60 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#2d1120] leading-snug">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-[#793e58]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-pink-50/50 hover:bg-pink-50 border border-pink-100/70 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#2d1120]">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-pink-700 border border-pink-200">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.note && (
                          <p className="text-[11px] text-[#63384c] mt-1 leading-snug">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle reassurance footer */}
                <div className="pt-4 mt-4 border-t border-pink-100/60 flex items-center gap-1.5 text-[11px] font-medium text-pink-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Applied in Academic & Real-World Projects</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Mindset Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl glass-panel border border-pink-200/80 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-[#4e2236]">
            <span className="font-semibold text-pink-900">Learning Philosophy: </span>
            "Continuously strengthening programming fundamentals in Java, Python, and C# while expanding full-stack web capabilities with React and FastAPI to bridge architecture with elegant interfaces."
          </p>
        </div>

      </div>
    </section>
  );
};
