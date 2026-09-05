import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-tech-dots">
      {/* Ambient background light */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={education.badge}
          title={education.heading}
          subtitle={education.description}
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 space-y-12">
            {education.timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#08070d] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Main Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#121022]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-[#17142c]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    <span className="text-[11px] font-mono text-purple-300 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 font-semibold">
                      Currently Pursuing
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2 mb-4 font-medium">
                    <div className="flex items-center gap-1.5 text-purple-300">
                      <GraduationCap className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-purple-500/15">
                    <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2 font-semibold">
                      Key Academic Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {item.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Integrity Callout */}
          <div className="mt-8 p-4 rounded-xl bg-[#0e0c19] border border-purple-500/15 text-xs text-slate-400 flex items-center gap-3">
            <Compass className="w-4 h-4 text-purple-400 shrink-0" />
            <span>
              Academic records reflect current enrolled status in 2nd year Computer Science and Engineering at EGS Pillay Engineering College.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
