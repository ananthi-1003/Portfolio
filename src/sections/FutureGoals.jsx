import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FutureGoals() {
  const { futureGoals } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-tech-grid">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase text-purple-300 bg-purple-950/40 border border-purple-500/20 backdrop-blur-sm mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{futureGoals.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight mb-6">
            {futureGoals.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            "{futureGoals.statement}"
          </p>
        </div>

        {/* Animated Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle connection line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-indigo-500/40 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {futureGoals.roadmap.map((item, index) => (
              <div
                key={item.step}
                className="group p-5 rounded-2xl bg-[#121022]/90 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#18152e] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-purple-400/80 group-hover:text-purple-300">
                      STEP {item.step}
                    </span>
                    {index < futureGoals.roadmap.length - 1 && (
                      <ArrowRight className="hidden sm:block w-3.5 h-3.5 text-purple-500/50 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-1.5 group-hover:text-purple-200">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-purple-500/10 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
                  <span>Growth Velocity</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
