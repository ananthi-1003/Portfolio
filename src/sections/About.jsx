import React from 'react';
import { Sparkles, Cpu, Layers, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  Layers: Layers,
  Terminal: Terminal,
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={about.badge}
          title={about.heading}
          subtitle="Discovering the balance between computational logic and creative digital craftsmanship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#110f1e]/80 border border-purple-500/15 backdrop-blur-xl relative overflow-hidden shadow-[0_10px_35px_-10px_rgba(0,0,0,0.5)]">
              {/* Subtle watermarked monogram in corner */}
              <span className="absolute -bottom-8 -right-6 text-9xl font-black font-heading text-purple-500/5 select-none pointer-events-none">
                AA
              </span>

              <p className="relative z-10 text-slate-200 mb-5 leading-relaxed font-normal">
                {about.paragraph1}
              </p>
              <p className="relative z-10 text-slate-400 leading-relaxed font-normal">
                {about.paragraph2}
              </p>

              {/* Quick credentials strip */}
              <div className="mt-8 pt-6 border-t border-purple-500/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">Academic Level</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">2nd Year B.E. CSE</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Institution</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">EGS Pillay Engg College</span>
                </div>
              </div>
            </div>

            {/* Guiding Philosophy Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 to-indigo-950/20 border border-purple-500/20 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 mt-0.5">
                <Code2 className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Student Mindset</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  "Every project is an opportunity to learn something new, improve problem-solving skills, and turn an idea into something useful."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.number}
                  className="group p-6 rounded-2xl bg-[#131122]/90 border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#18152e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.25)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-purple-400/60 group-hover:text-purple-300 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 font-heading group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-purple-500/10 flex items-center gap-1.5 text-[11px] font-mono text-purple-400/70 group-hover:text-cyan-400 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                    <span>Core Pillar</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
