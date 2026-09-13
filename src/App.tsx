import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PetalBackground } from './components/PetalBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProblemSolvingSection } from './components/ProblemSolvingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsGoalsSection } from './components/CertificationsGoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffe6f0] via-[#fff0f5] to-[#fff5f9] text-[#2d1b24] relative selection:bg-pink-200 selection:text-pink-900">
      {/* Delicate floating ambient particle & aura layer */}
      <PetalBackground />

      {/* Modern-Classical Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ProblemSolvingSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsGoalsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Interactive CV / Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
