import React, { useState } from 'react';
import { Sparkles, Compass, Code, Layers, TestTube, TrendingUp, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const stageIcons = {
  curiosity: Compass,
  learning: Code,
  building: Layers,
  experimenting: TestTube,
  growing: TrendingUp,
};

export default function Journey() {
  const { journey } = portfolioData;
  const [activeStageId, setActiveStageId] = useState(journey.stages[1].id); // Default to 'learning' (2nd year)

  const activeStage =
    journey.stages.find((s) => s.id === activeStageId) || journey.stages[0];

  const ActiveIcon = stageIcons[activeStage.id] || Sparkles;

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-tech-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={journey.badge}
          title={journey.heading}
          subtitle={journey.description}
          align="center"
        />

        {/* Interactive Progress Track */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-950/60 -translate-y-1/2 z-0">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                style={{
                  width: `${
                    (journey.stages.findIndex((s) => s.id === activeStageId) /
                      (journey.stages.length - 1)) *
                    100
                  }%`,
                }}
              />
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
              {journey.stages.map((stage) => {
                const isCurrent = stage.id === activeStageId;
                const Icon = stageIcons[stage.id] || Sparkles;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    onMouseEnter={() => setActiveStageId(stage.id)}
                    className={`group p-3 sm:p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 focus:outline-none ${
                      isCurrent
                        ? 'bg-[#18152e] border-2 border-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.35)] scale-105'
                        : 'bg-[#121020]/90 border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#161328]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-all ${
                        isCurrent
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                          : 'bg-[#19162c] text-purple-400 group-hover:text-purple-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono text-purple-400/80 uppercase font-bold tracking-wider">
                      Stage {stage.step}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold font-heading mt-0.5 ${
                        isCurrent ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Card Displaying Active Stage Details */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#16132b] to-[#100e1e] border border-purple-500/25 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.25)]">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider uppercase">
                  Stage {activeStage.step} • {activeStage.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-0.5">
                  {activeStage.title}
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {activeStage.badge}
            </span>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {activeStage.summary}
          </p>

          <div className="mt-6 pt-6 border-t border-purple-500/10">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
              Key Reflections &amp; Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeStage.points.map((pt, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#0f0d1c] border border-purple-500/15 flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
