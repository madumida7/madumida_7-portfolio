import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileText, Sparkles, MapPin, GraduationCap, Flame, Code, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Narrative & Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-medium text-[#831843] border border-pink-200/80 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for IT Roles & Software Opportunities</span>
            </div>

            {/* Main Headline with Classical Serif Typography */}
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-wider uppercase text-pink-700 font-sans">
                Portfolio & Academic Journey
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2d1120] leading-[1.15]">
                Madumida D.
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-pink-800/90 font-sans">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Tagline Callout */}
            <blockquote className="border-l-2 border-pink-400 pl-4 py-1 italic text-[#612440] font-serif text-lg leading-relaxed bg-pink-50/50 rounded-r-lg">
              "{PERSONAL_INFO.tagline}"
            </blockquote>

            {/* Narrative Intro */}
            <p className="text-[#4a2e3b] text-base sm:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Location & Institution Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#6e3952]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-pink-100">
                <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
                <span>Dr. G.R. Damodaran College of Science, Coimbatore</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-pink-100">
                <MapPin className="w-3.5 h-3.5 text-pink-600" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white shadow-md shadow-pink-300/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-[#831843] border border-pink-200/90 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-pink-600" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-[#702447] hover:text-[#3b1225] hover:bg-pink-100/50 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Accomplishment Highlights */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-200/50 via-rose-100/30 to-amber-100/20 blur-2xl -z-10" />

            <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-pink-200/90 shadow-xl space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-400 to-rose-300 text-white flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold shadow-md shadow-pink-300/60">
                    MD
                  </div>
                  {/* Subtle decorative South Indian aesthetic emblem badge */}
                  <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#2d1120]">
                    Madumida D.
                  </h3>
                  <p className="text-xs text-pink-700 font-medium">
                    MCA Candidate (2025–Present)
                  </p>
                  <p className="text-xs text-[#6e4659] mt-0.5">
                    Focused on full-stack web, Python, & AI applications
                  </p>
                </div>
              </div>

              {/* Verified Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-100/80">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-pink-700 block">
                    BCA Distinction
                  </span>
                  <span className="font-serif text-xl font-bold text-[#2d1120]">
                    84.82%
                  </span>
                  <p className="text-[11px] text-[#6e4659] mt-0.5">
                    St. Joseph's Autonomous
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100/80">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-rose-700 block">
                    Major AI Project
                  </span>
                  <span className="font-serif text-xl font-bold text-[#2d1120]">
                    C-Tone Pro
                  </span>
                  <p className="text-[11px] text-[#6e4659] mt-0.5">
                    25+ Skin Tone AI System
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-amber-800">
                      Japanese Learner
                    </span>
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#2d1120]">
                    Duolingo
                  </span>
                  <p className="text-[11px] text-[#6e4659] mt-0.5">
                    Consistent Daily Streak
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100/80">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-purple-800 block">
                    Interdisciplinary
                  </span>
                  <span className="font-serif text-xl font-bold text-[#2d1120]">
                    PGD Robotics
                  </span>
                  <p className="text-[11px] text-[#6e4659] mt-0.5">
                    Automation & Logic Systems
                  </p>
                </div>
              </div>

              {/* Live Preview Teaser to Featured Project */}
              <div className="pt-2 border-t border-pink-100">
                <a
                  href="https://c-tone-pro-562617068063.asia-southeast1.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white border border-pink-200/80 group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2d1120] group-hover:text-pink-700 transition-colors">
                        Launch C-Tone Pro Live App
                      </p>
                      <p className="text-[11px] text-[#74455b]">
                        Hosted on Google Cloud Run
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-pink-500 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
