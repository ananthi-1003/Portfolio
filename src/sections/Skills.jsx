import React, { useState } from 'react';
import { Globe, Terminal, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const levelBadgeStyles = {
  Comfortable: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Developing: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  Exploring: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
};

const levelProgressIndicators = {
  Comfortable: 3, // out of 3 pips
  Developing: 2,
  Exploring: 1,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skills.categories
      : skills.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-tech-dots">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge={skills.badge}
            title={skills.heading}
            subtitle={skills.description}
            className="mb-6 md:mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#12101f] border border-purple-500/20 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'programming'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'web'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web (Exploring)
            </button>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  {category.id === 'programming' ? (
                    <Terminal className="w-4 h-4" />
                  ) : (
                    <Globe className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{category.name}</h3>
                  <p className="text-xs text-slate-400">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((skill) => {
                  const pips = levelProgressIndicators[skill.level] || 1;
                  return (
                    <div
                      key={skill.name}
                      className="group p-6 rounded-2xl bg-[#121020]/80 border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#18152c] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.4)] flex flex-col justify-between"
                    >
                      <div>
                        {/* Header: Skill Name & Badge */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                              {skill.tag}
                            </span>
                            <h4 className="text-2xl font-black text-white font-heading group-hover:text-purple-300 transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${
                              levelBadgeStyles[skill.level]
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Focus description */}
                        <p className="text-xs font-semibold text-slate-200 mb-2">
                          {skill.focus}
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.details}
                        </p>
                      </div>

                      {/* Visual Indicator: Level Pips & Honest Label */}
                      <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          Proficiency Stage
                        </span>
                        <div className="flex items-center gap-1.5" title={`${skill.level} proficiency stage`}>
                          {[1, 2, 3].map((step) => (
                            <div
                              key={step}
                              className={`w-4 h-1.5 rounded-full transition-all ${
                                step <= pips
                                  ? skill.level === 'Comfortable'
                                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                                    : skill.level === 'Developing'
                                    ? 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.5)]'
                                    : 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]'
                                  : 'bg-slate-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#0e0c18] border border-purple-500/15 flex items-center gap-3 text-xs text-slate-400">
          <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-slate-200">Ethical Student Note:</strong> All skills reflect active coursework and hands-on exploratory practice without exaggerated percentages.
          </span>
        </div>
      </div>
    </section>
  );
}
