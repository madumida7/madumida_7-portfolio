import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS_DATA, EDUCATION_DATA, SKILL_CATEGORIES, CERTIFICATIONS_DATA, ROBOTICS_QUALIFICATION } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, GraduationCap, Briefcase, Award, Code, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `
Madumida D. - Software Developer & MCA Scholar
Institution: ${PERSONAL_INFO.institution}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}

EDUCATION:
- MCA: Dr. G.R. Damodaran College of Science (2025-Present)
- BCA: St. Joseph's College of Arts & Science (84.82% Distinction)
- PG Diploma in Robotics (Pursuing)

TECHNICAL SKILLS:
- Languages: Java, Python (FastAPI), JavaScript (ES6+), C#
- Frontend: React.js, HTML5, CSS3/Tailwind
- Database: MongoDB, MySQL
- Libraries & Tools: OpenCV, NumPy, Git, Postman

KEY PROJECTS:
- C-Tone Pro: AI-Based Personalized Beauty Intelligence System (FastAPI, React, OpenCV, MongoDB)
- Roots Industries Internship: Industrial Workflow & Workforce Scheduling (React, Flask, MySQL, Holt-Winters)
- Computer Science Teacher: Darshan Zwislang Gurukulam School
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#fffafc] border border-pink-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar */}
        <div className="px-6 py-4 border-b border-pink-200/80 bg-white/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d1120]">
              Curriculum Vitae Preview • Madumida D.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-pink-800 bg-pink-50 hover:bg-pink-100 transition-colors flex items-center gap-1.5"
              title="Copy text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Summary"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-pink-600 hover:bg-pink-700 transition-colors flex items-center gap-1.5 shadow-xs"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-pink-100/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-pink-200/80 pb-6 space-y-2 text-center">
            <h1 className="font-serif text-3xl font-bold text-[#2d1120]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs font-semibold text-pink-700 uppercase tracking-wider">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-[#592b41]">
              Coimbatore, Tamil Nadu, India • Email: <span className="font-mono">{PERSONAL_INFO.email}</span> • GitHub: <span className="font-mono">github.com/madumida7</span>
            </p>
          </div>

          {/* Academic Profile & Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2d1120] flex items-center gap-2 border-b border-pink-100 pb-1">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs text-[#442131] leading-relaxed">
              Motivated and academically consistent MCA student at Dr. G.R. Damodaran College of Science with an 84.82% distinction in BCA from St. Joseph's Autonomous College. Experienced in building full-stack applications with React, FastAPI, Python, and MongoDB. Creator of C-Tone Pro, an AI-driven beauty intelligence application incorporating computer vision (OpenCV). Seeking an IT software developer role at leading technology organizations.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2d1120] flex items-center gap-2 border-b border-pink-100 pb-1">
              <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-[#2d1120]">{edu.degree}</span>
                    <p className="text-[11px] text-[#63334a]">{edu.institution}</p>
                    {edu.semesterScores && (
                      <p className="text-[10px] text-pink-800 font-medium mt-0.5">
                        Semester Scores: 71%, 79%, 79%, 80.5% (Steady Academic Rise)
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-semibold text-pink-900">{edu.score}</span>
                    <p className="text-[10px] text-gray-500">{edu.period}</p>
                  </div>
                </div>
              ))}
              {/* Robotics */}
              <div className="text-xs pt-1">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-[#2d1120]">{ROBOTICS_QUALIFICATION.title}</span>
                  <span className="font-semibold text-purple-900">Pursuing</span>
                </div>
                <p className="text-[11px] text-[#63334a]">Interdisciplinary program in robotics, automation, and logical systems.</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2d1120] flex items-center gap-2 border-b border-pink-100 pb-1">
              <Briefcase className="w-3.5 h-3.5 text-pink-600" />
              <span>Key Projects & Experience</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#2d1120]">{proj.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-pink-100 text-pink-800 font-medium">
                      {proj.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4f273b]">
                    {proj.description}
                  </p>
                  <p className="text-[10px] text-[#66354e]">
                    <span className="font-semibold">Tech Stack:</span> {proj.techStack.join(', ')}
                  </p>
                  <p className="text-[10px] text-emerald-800 font-medium">
                    <span className="font-semibold">Outcome:</span> {proj.outcomeOrImpact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2d1120] flex items-center gap-2 border-b border-pink-100 pb-1">
              <Code className="w-3.5 h-3.5 text-pink-600" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-[#2d1120]">Languages:</span> Java, Python, JavaScript (ES6+), C#
              </div>
              <div>
                <span className="font-semibold text-[#2d1120]">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS
              </div>
              <div>
                <span className="font-semibold text-[#2d1120]">Backend & DB:</span> FastAPI, Flask, MongoDB, MySQL
              </div>
              <div>
                <span className="font-semibold text-[#2d1120]">Tools & Libraries:</span> OpenCV, NumPy, Git, Postman, VS Code
              </div>
            </div>
          </div>

          {/* Certifications & Extracurriculars */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2d1120] flex items-center gap-2 border-b border-pink-100 pb-1">
              <Award className="w-3.5 h-3.5 text-pink-600" />
              <span>Certifications & Languages</span>
            </h2>
            <div className="text-xs text-[#52293e] space-y-1">
              <p>• Cisco Certification & Packet Tracer Simulation</p>
              <p>• IBM SkillsBuild – Artificial Intelligence Fundamentals</p>
              <p>• Introduction to Data Science Specialization</p>
              <p>• Languages: English (Fluent), Tamil (Native), Japanese (Active Duolingo Streak - Beginner / N5)</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-pink-200/80 bg-pink-50/50 flex items-center justify-between text-xs text-[#703b54]">
          <span>Available for in-person or remote technical interviews.</span>
          <button
            onClick={onClose}
            className="font-medium text-pink-700 hover:text-pink-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
