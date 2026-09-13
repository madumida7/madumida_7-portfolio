import React, { useState } from 'react';
import { Sparkles, Eye, EyeOff } from 'lucide-react';

export const PetalBackground: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  // Discrete floating particles with gentle pastel pink/rose hues
  const particles = [
    { id: 1, top: '8%', left: '12%', size: 'w-3 h-3', delay: '0s', duration: '14s' },
    { id: 2, top: '22%', left: '85%', size: 'w-4 h-4', delay: '2s', duration: '18s' },
    { id: 3, top: '38%', left: '6%', size: 'w-2.5 h-2.5', delay: '4s', duration: '16s' },
    { id: 4, top: '55%', left: '92%', size: 'w-3.5 h-3.5', delay: '1s', duration: '20s' },
    { id: 5, top: '72%', left: '18%', size: 'w-3 h-3', delay: '3s', duration: '15s' },
    { id: 6, top: '88%', left: '80%', size: 'w-4 h-4', delay: '5s', duration: '19s' },
    { id: 7, top: '15%', left: '50%', size: 'w-2 h-2', delay: '2.5s', duration: '13s' },
    { id: 8, top: '65%', left: '45%', size: 'w-3 h-3', delay: '6s', duration: '17s' },
  ];

  return (
    <>
      {/* Fixed Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#fce7f3]/60 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#ffe4e6]/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-[#fdf2f8]/80 blur-3xl" />

        {/* Floating Petal Particles */}
        {enabled &&
          particles.map((p) => (
            <div
              key={p.id}
              className={`absolute ${p.size} rounded-full bg-gradient-to-br from-rose-300/40 via-pink-200/30 to-pink-100/10 backdrop-blur-xs animate-pulse`}
              style={{
                top: p.top,
                left: p.left,
                animationDelay: p.delay,
                animationDuration: '6s',
                boxShadow: '0 0 12px rgba(244, 114, 182, 0.25)',
              }}
            />
          ))}
      </div>

      {/* Subtle Animation Atmosphere Toggle */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="particle-toggle-btn"
          onClick={() => setEnabled(!enabled)}
          className="px-3 py-2 rounded-full glass-panel text-xs text-[#831843] flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-300"
          title={enabled ? "Pause floating ambient aura" : "Enable floating ambient aura"}
        >
          {enabled ? <Sparkles className="w-3.5 h-3.5 text-pink-500" /> : <EyeOff className="w-3.5 h-3.5 text-gray-400" />}
          <span className="font-medium">{enabled ? "Aura Active" : "Aura Paused"}</span>
        </button>
      </div>
    </>
  );
};
