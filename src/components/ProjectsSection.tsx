import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { 
  ExternalLink, Sparkles, Check, ChevronRight, Layers, Lightbulb, 
  Cpu, Activity, Users, Calendar, Award, Palette, Eye, ArrowUpRight
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Interactive C-Tone Pro Demo State
  const sampleSkinTones = [
    {
      id: 'warm-honey',
      name: 'Warm Honey / Dusky Medium',
      hex: '#c68b59',
      undertone: 'Warm Golden',
      foundation: 'Caramel Glow #42 (Warm)',
      lipstick: ['Terracotta Rose', 'Spiced Cinnamon', 'Warm Nude'],
      dressPalette: ['Royal Emerald Green', 'Deep Mustard Gold', 'Rich Maroon'],
      confidenceBoost: '94% Tone Harmonization Match'
    },
    {
      id: 'radiant-almond',
      name: 'Radiant Deep Almond',
      hex: '#8d5524',
      undertone: 'Neutral Warm',
      foundation: 'Rich Mocha #56 (Deep)',
      lipstick: ['Plum Berry', 'Dark Chocolate Wine', 'Ruby Crimson'],
      dressPalette: ['Bright Ochre', 'Vibrant Fuchsia', 'Pure Cobalt Blue'],
      confidenceBoost: '96% Tone Harmonization Match'
    },
    {
      id: 'golden-sand',
      name: 'Golden Sand / Wheatish',
      hex: '#d99e69',
      undertone: 'Peach Golden',
      foundation: 'Golden Beige #28 (Neutral)',
      lipstick: ['Soft Peach Coral', 'Warm Rosewood', 'Mocha Buff'],
      dressPalette: ['Peacock Blue', 'Earthy Terracotta', 'Coral Pink'],
      confidenceBoost: '92% Tone Harmonization Match'
    },
    {
      id: 'fair-rose',
      name: 'Fair Radiant Rosy',
      hex: '#f1c29b',
      undertone: 'Cool Rosy',
      foundation: 'Porcelain Petal #14 (Cool)',
      lipstick: ['Petal Mauve', 'Dusty Berry Pink', 'Soft Cranberry'],
      dressPalette: ['Pastel Lavender', 'Sage Mint', 'Wine Burgundy'],
      confidenceBoost: '93% Tone Harmonization Match'
    }
  ];

  const [selectedTone, setSelectedTone] = useState(sampleSkinTones[0]);
  const [interactiveTab, setInteractiveTab] = useState<'recommendations' | 'features'>('recommendations');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Featured Technical Work & Case Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            Projects & Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            In-depth architectural breakdowns of systems built to solve tangible, real-world problems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {['All', 'AI & Web', 'Industry & Systems', 'Education & Mentoring'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-white/80 text-[#592b41] hover:bg-pink-100/60 border border-pink-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Case Studies List */}
        <div className="space-y-16">
          
          {/* ============================================================ */}
          {/* 1. C-TONE PRO (FLAGSHIP SHOWCASE) */}
          {/* ============================================================ */}
          {filteredProjects.some(p => p.id === 'c-tone-pro') && (
            <div className="rounded-3xl glass-panel border border-pink-200/90 shadow-xl overflow-hidden">
              
              {/* Top Banner Bar */}
              <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-400 text-white px-6 py-3.5 sm:px-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium uppercase tracking-wider backdrop-blur-xs">
                    Major MCA Project
                  </span>
                  <span className="text-xs font-medium text-pink-50">
                    Role: Full Stack Developer (Student Project)
                  </span>
                </div>

                <a
                  href="https://c-tone-pro-562617068063.asia-southeast1.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#831843] text-xs font-bold shadow-xs hover:bg-pink-50 transition-colors"
                >
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 sm:p-10 space-y-8">
                {/* Title & Core Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d1120]">
                      C-Tone Pro – AI-Based Personalized Beauty Intelligence System
                    </h3>
                    <p className="text-base text-[#52293e] leading-relaxed">
                      A smart beauty recommendation system that analyzes skin tone and provides personalized suggestions for makeup, fashion, and styling.
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {["React.js", "FastAPI", "MongoDB", "OpenCV", "NumPy"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-pink-100/70 border border-pink-200/80 text-xs font-semibold text-[#831843]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Grid: Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100/90 space-y-2">
                    <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      The Human Problem
                    </div>
                    <p className="text-sm text-[#4f2438] leading-relaxed">
                      Many users struggle to choose beauty products suitable for their specific skin tone and undertones, leading to poor purchasing decisions, mismatched styling, and low self-confidence.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-100/90 space-y-2">
                    <div className="flex items-center gap-2 text-pink-800 text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-pink-500" />
                      The Engineering Solution
                    </div>
                    <p className="text-sm text-[#4f2438] leading-relaxed">
                      Developed an intelligent web-based system that analyzes skin tone and provides algorithmic, personalized recommendations across 25+ skin tones and complementary styling categories.
                    </p>
                  </div>
                </div>

                {/* Features & Key Capabilities Checklist */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#612844] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-pink-600" />
                    <span>System Architecture & Key Features</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Skin tone detection across 25+ diverse tones and warm/cool/neutral undertones",
                      "Personalized product matching: Foundation, lipstick palettes, dress colors & accessories",
                      "Self-Confidence Score engine with an interactive user questionnaire",
                      "Integrated beauty service appointment booking (makeup artists, hairstyling)",
                      "Secure user authentication and administrator management portal",
                      "Real-time UI preview with user image analysis and color swatch comparison"
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-pink-100/80">
                        <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-[#412130] font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INTERACTIVE MINI-SHOWCASE: Live Color Swatch Intelligence */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50/90 via-rose-50/50 to-white border border-pink-200/90 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-pink-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6e294b]">
                        Interactive C-Tone Pro Algorithm Preview
                      </span>
                    </div>
                    <span className="text-[11px] text-[#703b54] italic">
                      Click a sample skin tone below to inspect personalized recommendations:
                    </span>
                  </div>

                  {/* Swatch Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {sampleSkinTones.map((tone) => (
                      <button
                        key={tone.id}
                        onClick={() => setSelectedTone(tone)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                          selectedTone.id === tone.id
                            ? 'bg-white border-pink-500 shadow-md ring-2 ring-pink-300/60'
                            : 'bg-white/60 border-pink-200/60 hover:bg-white'
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-xs shrink-0"
                          style={{ backgroundColor: tone.hex }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#2d1120] truncate">{tone.name}</p>
                          <p className="text-[10px] text-pink-700 font-medium">{tone.undertone}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Active Tone Recommendation Display */}
                  <div className="p-4 rounded-xl bg-white/90 border border-pink-200/70 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[11px] font-medium text-[#793a58] block mb-1">
                        Matched Foundation Shade
                      </span>
                      <p className="text-xs font-bold text-[#2d1120] flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedTone.hex }} />
                        {selectedTone.foundation}
                      </p>
                      <span className="text-[10px] text-emerald-700 font-medium mt-1 inline-block">
                        ✓ {selectedTone.confidenceBoost}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium text-[#793a58] block mb-1">
                        Curated Lipstick Harmonies
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedTone.lipstick.map((lip, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-rose-100/70 text-rose-800 font-medium">
                            {lip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium text-[#793a58] block mb-1">
                        Optimal Wardrobe Colors
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedTone.dressPalette.map((dress, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-pink-100/70 text-pink-800 font-medium">
                            {dress}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Learning & Impact Banner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/80 border border-pink-200/70 flex items-start gap-3">
                    <Award className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#2d1120] block">
                        Verified Impact:
                      </span>
                      <p className="text-xs text-[#52293e] mt-0.5">
                        "Improves user confidence and simplifies beauty decision-making through accessible, algorithmic personalization."
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/80 border border-pink-200/70 flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#2d1120] block">
                        Key Engineering Learning:
                      </span>
                      <p className="text-xs text-[#52293e] mt-0.5">
                        "Learned how to integrate frontend and backend systems, handle real-time user image input via OpenCV, and design empathetic, user-centric features."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-pink-100">
                  <div className="flex items-center gap-2 text-xs text-[#703450]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Live deployment active on Google Cloud Run</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://c-tone-pro-562617068063.asia-southeast1.run.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>Visit Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* 2. ROOTS INDUSTRIES INTERNSHIP */}
          {/* ============================================================ */}
          {filteredProjects.some(p => p.id === 'roots-industries') && (
            <div className="rounded-3xl glass-panel border border-pink-200/90 shadow-md p-6 sm:p-10 space-y-7">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-200">
                    Industrial Internship
                  </span>
                  <span className="text-xs text-[#743553] font-medium">
                    Role: Full Stack Developer (Internship)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Flask (Python)", "MySQL", "Holt-Winters Forecasting"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-md bg-white border border-pink-200 text-xs font-medium text-[#5c233e]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#2d1120]">
                  Roots Industries – Workflow & Workforce Optimization System
                </h3>
                <p className="text-sm sm:text-base text-[#52293e] leading-relaxed">
                  Developed a centralized system for managing industrial shop-floor workflow, multi-tier customer orders, and workforce scheduling.
                </p>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-white/70 border border-pink-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                    Industrial Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-[#462334] leading-relaxed">
                    Manual tracking of heavy industrial machines, 120+ factory workers across alternating shifts, and customer orders resulted in scheduling bottlenecks and operational delays.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/70 border border-pink-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-700 block">
                    Digital Solution Architecture
                  </span>
                  <p className="text-xs sm:text-sm text-[#462334] leading-relaxed">
                    Built an end-to-end digital dashboard to track 5 core machines, automate 120-labour shift allocation across 2 shifts, and forecast order volume with Holt-Winters models.
                  </p>
                </div>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#692949] block">
                  Key Technical Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Machine tracking module monitoring 5 critical manufacturing units in real-time",
                    "Labour shift management for 120 workers across 2 rotational production shifts",
                    "Customer order queue management system with administrative approvals",
                    "Forecasting dashboard powered by the Holt-Winters statistical time-series model",
                    "Visual operational metrics dashboard built with responsive React components"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-pink-50/50 border border-pink-100">
                      <Check className="w-3.5 h-3.5 text-pink-600 mt-0.5 shrink-0" />
                      <span className="text-xs text-[#412130]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome & Key Learning */}
              <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#2d1120]">Measured Outcome: </span>
                  <span className="text-xs text-[#52293e]">Improved operational visibility and reduced manual dependency.</span>
                </div>
                <div className="sm:border-l sm:border-pink-200 sm:pl-4">
                  <span className="text-xs font-bold text-[#2d1120]">Key Learning: </span>
                  <span className="text-xs text-[#52293e]">Relational database transactions and industrial forecasting under live constraints.</span>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* 3. TEACHING & MENTORSHIP EXPERIENCE */}
          {/* ============================================================ */}
          {filteredProjects.some(p => p.id === 'teaching-experience') && (
            <div className="rounded-3xl glass-panel border border-pink-200/90 shadow-md p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold border border-purple-200">
                    Teaching & Leadership
                  </span>
                  <span className="text-xs text-[#743553] font-medium">
                    Darshan Zwislang Gurukulam School
                  </span>
                </div>
                <span className="text-xs text-[#5b2b43] font-medium">
                  Computer Science Teacher & Mentor
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d1120]">
                  Computer Science Teacher – Darshan Zwislang Gurukulam School
                </h3>
                <p className="text-xs sm:text-sm text-[#52293e] leading-relaxed">
                  Taught basic programming and computer fundamentals to students, guiding them through hands-on laboratory exercises and nurturing algorithmic curiosity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/80 border border-pink-100">
                  <span className="text-xs font-bold text-[#2d1120] block">Taught Programming Basics</span>
                  <p className="text-[11px] text-[#61364a] mt-0.5">Introduced algorithms, basic conditionals, and syntax logic.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-pink-100">
                  <span className="text-xs font-bold text-[#2d1120] block">Guided Fundamentals</span>
                  <p className="text-[11px] text-[#61364a] mt-0.5">Mentored young learners through hardware, OS, and web concepts.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-pink-100">
                  <span className="text-xs font-bold text-[#2d1120] block">Mentoring & Communication</span>
                  <p className="text-[11px] text-[#61364a] mt-0.5">Cultivated patient, accessible pedagogical communication skills.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-[#4b2036]">
                <span className="font-bold text-purple-950">Key Takeaway: </span>
                "Explaining complex computing principles to young students strengthened my own clarity in core software fundamentals and reinforced the value of user-centric empathy."
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
