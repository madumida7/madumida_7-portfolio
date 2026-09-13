import React from 'react';
import { EDUCATION_DATA, ROBOTICS_QUALIFICATION } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, TrendingUp, Sparkles, Bot, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
            <span>Academic Qualifications & Trajectory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            A documented track record of steady academic performance, consistency, and discipline.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.degree}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-pink-200/80 shadow-md hover:border-pink-300 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Degree & Score */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 border border-pink-200">
                      {edu.period}
                    </span>
                    {edu.highlight && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <Award className="w-3 h-3 text-emerald-600" />
                        {edu.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d1120] pt-1">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-medium text-pink-900">
                    {edu.institution}
                  </p>
                </div>

                {/* Score Pill */}
                <div className="sm:text-right shrink-0">
                  <span className="text-[11px] font-medium text-[#793e58] uppercase tracking-wider block">
                    Score / Status
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-pink-700">
                    {edu.score}
                  </span>
                </div>
              </div>

              {/* Details */}
              {edu.details && (
                <p className="text-xs sm:text-sm text-[#4e273a] mt-4 leading-relaxed">
                  {edu.details}
                </p>
              )}

              {/* Semester Progression breakdown (for BCA) */}
              {edu.semesterScores && (
                <div className="mt-5 pt-4 border-t border-pink-100">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-pink-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#632342]">
                      Semester-by-Semester Progression (Ascending Curve)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {edu.semesterScores.map((sem, sIdx) => (
                      <div
                        key={sem.semester}
                        className="p-3 rounded-xl bg-pink-50/70 border border-pink-100 flex flex-col justify-between"
                      >
                        <span className="text-[11px] font-medium text-[#773d56]">
                          {sem.semester}
                        </span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-serif text-lg font-bold text-[#2d1120]">
                            {sem.score}
                          </span>
                        </div>
                        {/* Progress Bar visual indicator */}
                        <div className="w-full bg-pink-200/60 h-1.5 rounded-full overflow-hidden mt-2">
                          <div
                            className="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full"
                            style={{ width: `${parseFloat(sem.score)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Additional Interdisciplinary Qualification: PG Diploma in Robotics */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-white border border-purple-200/80 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                      Additional Dual Qualification
                    </span>
                    <span className="text-xs text-purple-700 font-medium">
                      {ROBOTICS_QUALIFICATION.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d1120]">
                    {ROBOTICS_QUALIFICATION.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e273a] pt-2 leading-relaxed max-w-2xl">
                    {ROBOTICS_QUALIFICATION.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
