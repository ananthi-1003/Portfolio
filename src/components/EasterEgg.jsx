import React, { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

/**
 * Secret Tastful Easter Egg:
 * Listens for typing "ANANTHI" on keyboard.
 * Triggers an elegant purple/cyan constellation visual effect and greeting.
 */
export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let keyBuffer = '';
    const secret = 'ANANTHI';

    const handleKeyDown = (e) => {
      // Ignore if user is typing inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const char = e.key.toUpperCase();
      if (char.length === 1 && char >= 'A' && char <= 'Z') {
        keyBuffer += char;
        if (keyBuffer.length > 20) {
          keyBuffer = keyBuffer.slice(-20);
        }

        if (keyBuffer.endsWith(secret)) {
          triggerEasterEgg();
          keyBuffer = '';
        }
      }
    };

    const triggerEasterEgg = () => {
      // Generate randomized sparkling particles
      const newParticles = Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3 + Math.random() * 6,
        color: i % 2 === 0 ? '#c084fc' : '#38bdf8',
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 0.5,
      }));

      setParticles(newParticles);
      setActive(true);

      const timer = setTimeout(() => {
        setActive(false);
      }, 5500);

      return () => clearTimeout(timer);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-purple-950/20 backdrop-blur-xs transition-opacity duration-700 animate-in fade-in" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 12px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Elegant popup pill */}
      <div className="relative pointer-events-auto max-w-md mx-4 p-5 rounded-2xl bg-[#12101e]/90 border border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.3)] backdrop-blur-xl flex items-start gap-3.5 transform transition-all animate-in zoom-in-95 duration-300">
        <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
          <Sparkles className="w-5 h-5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">Easter Egg Unlocked</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">Keystroke "ANANTHI"</span>
          </div>
          <h4 className="text-sm font-semibold text-white mt-1">Hello from Ananthi A!</h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Thank you for exploring my portfolio with curiosity! As a 2nd-year CSE student, I'm constantly testing new ideas and building with attention to detail.
          </p>
        </div>
        <button
          onClick={() => setActive(false)}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
