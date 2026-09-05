import React from 'react';
import { Award, BookOpen, Wrench, CheckCircle, PlusCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const categoryIcons = {
  Courses: BookOpen,
  'Technical Learning': Wrench,
  Certifications: Award,
  Workshops: Award,
};

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={certifications.badge}
          title={certifications.heading}
          subtitle={certifications.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.items.map((item, idx) => {
            const Icon = categoryIcons[item.category] || BookOpen;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                  item.placeholder
                    ? 'bg-[#110f22]/60 border border-dashed border-purple-500/30 hover:border-purple-400/60'
                    : 'bg-[#131024]/90 border border-purple-500/20 hover:border-purple-400/40 hover:-translate-y-1 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-purple-400/80 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 font-mono">
                    {item.issuer}
                  </p>

                  {/* Topics / coverage */}
                  <div className="space-y-1.5">
                    {item.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        {item.placeholder ? (
                          <PlusCircle className="w-3 h-3 text-purple-400 shrink-0" />
                        ) : (
                          <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                        )}
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">
                    {item.status}
                  </span>
                  {item.placeholder && (
                    <span className="text-[10px] font-mono text-purple-400/60">
                      Slot Ready
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on adding certificates */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Certifications and technical course completions can be added directly via <code className="text-purple-300">src/data/portfolioData.js</code>
          </p>
        </div>
      </div>
    </section>
  );
}
