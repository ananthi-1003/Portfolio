import React from 'react';
import { Trophy, Code2, Laptop, GraduationCap, PlusCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const milestoneIcons = {
  Trophy: Trophy,
  Code2: Code2,
  Laptop: Laptop,
  GraduationCap: GraduationCap,
};

export default function Milestones() {
  const { milestones } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={milestones.badge}
          title={milestones.heading}
          subtitle={milestones.description}
        />

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.categories.map((cat) => {
            const Icon = milestoneIcons[cat.icon] || Sparkles;

            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-[#110f20]/80 border border-purple-500/15 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-purple-400/70 tracking-wider">
                      Category
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-3">
                    {cat.title}
                  </h3>

                  {/* Items list */}
                  <div className="space-y-3">
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl text-xs transition-all ${
                          item.placeholder
                            ? 'bg-[#151227]/60 border border-dashed border-purple-500/30 hover:border-purple-400/60'
                            : 'bg-[#18152c] border border-purple-500/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-semibold text-slate-200">
                            {item.title}
                          </span>
                          {item.placeholder && (
                            <PlusCircle className="w-3.5 h-3.5 text-purple-400/80 shrink-0" />
                          )}
                        </div>

                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {item.note}
                        </p>

                        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom hint for user customization */}
                <div className="mt-6 pt-3 border-t border-purple-500/10 text-[10px] font-mono text-slate-500">
                  Ready for new entries in portfolioData.js
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
