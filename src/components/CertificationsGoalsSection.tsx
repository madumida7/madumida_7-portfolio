import React from 'react';
import { CERTIFICATIONS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Award, Compass, Target, Building2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CertificationsGoalsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-[#fff0f6]/50 to-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
                <Award className="w-3.5 h-3.5 text-pink-600" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d1120]">
                Professional Certifications
              </h2>
              <p className="text-xs sm:text-sm text-[#61364a]">
                Industry-recognized learning modules and foundational certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl glass-panel border border-pink-200/80 shadow-xs hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#2d1120] leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] text-[#6e3952]">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-pink-100/70">
                    <span className="text-[10px] font-semibold text-pink-800">
                      {cert.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Career Vision & Objectives */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
                <Compass className="w-3.5 h-3.5 text-pink-600" />
                <span>Career Vision</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d1120]">
                Career Objectives & Aspirations
              </h2>
              <p className="text-xs sm:text-sm text-[#61364a]">
                Clear milestones guiding academic focus and professional growth.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Short-Term Goal */}
              <div className="p-6 rounded-2xl glass-panel border border-pink-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-800">
                    <Target className="w-4 h-4 text-pink-600" />
                    <span>Short-Term Objective (2025–2026)</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-800">
                    Immediate Target
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#3b1728] leading-relaxed font-normal">
                  "{PERSONAL_INFO.careerGoals.shortTerm}"
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#6e3550]">
                  <span className="text-[11px] font-medium text-[#793a58]">Target Organizations:</span>
                  {["TCS", "Infosys", "Zoho", "Wipro"].map((company) => (
                    <span key={company} className="px-2.5 py-0.5 rounded-md bg-white border border-pink-200 font-semibold text-[#2d1120] text-xs">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* Long-Term Goal */}
              <div className="p-6 rounded-2xl glass-panel border border-pink-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Long-Term Aspirations</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                    Sustained Impact
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#3b1728] leading-relaxed font-normal">
                  "{PERSONAL_INFO.careerGoals.longTerm}"
                </p>

                <div className="pt-1 flex items-center gap-2 text-xs text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Committed to product excellence, domain depth, and ethical software.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
