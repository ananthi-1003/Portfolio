import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Share2,
  Heart,
  MessageCircle,
  ShoppingBag,
  Star,
  Database,
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';


export default function Projects() {
  const { projects } = portfolioData;
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Work"
          title="Things I've built."
          subtitle="A selection of software concepts, responsive interface prototypes, and data management systems developed with focus on clean architecture."
        />

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#110f1e]/80 border border-purple-500/15 hover:border-purple-400/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.25)]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Side (5 cols) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-[#0a0914] aspect-[16/10] shadow-2xl group-hover:border-purple-400/40 transition-all duration-500 flex flex-col">
                      {/* Browser Mockup Top Bar */}
                      <div className="px-4 py-2.5 bg-[#141224] border-b border-purple-500/15 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 px-3 py-0.5 rounded-md bg-[#0a0914] border border-purple-500/10">
                          {project.name.toLowerCase().replace(/\s+/g, '')}.app
                        </div>
                        <div className="text-[10px] font-mono text-purple-400/60">
                          v1.0
                        </div>
                      </div>

                      {/* Mockup Screen Content Based on Project */}
                      <div className="flex-1 p-4 sm:p-5 overflow-hidden flex flex-col justify-center bg-gradient-to-br from-[#0e0c1b] via-[#090812] to-[#120f24] group-hover:scale-[1.02] transition-transform duration-500">
                        {project.previewType === 'social' && (
                          /* Postify Preview */
                          <div className="space-y-3">
                            {/* Header preview */}
                            <div className="flex items-center justify-between border-b border-purple-500/15 pb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                                  P
                                </div>
                                <span className="text-xs font-bold text-white font-heading">
                                  Postify Feed
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                                Live Concept
                              </span>
                            </div>
                            {/* Card Item */}
                            <div className="p-3 rounded-xl bg-[#17142b] border border-purple-500/20 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white">
                                  AA
                                </div>
                                <div>
                                  <div className="text-[11px] font-semibold text-white">
                                    Ananthi A
                                  </div>
                                  <div className="text-[9px] text-slate-400 font-mono">
                                    @ananthi • Just now
                                  </div>
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-300 leading-snug">
                                Exploring how modern UI architectures bridge the gap between human intuition and backend data streams. 🚀
                              </p>
                              <div className="flex items-center gap-4 text-slate-400 text-[10px] pt-1">
                                <span className="flex items-center gap-1 hover:text-purple-300 cursor-pointer">
                                  <Heart className="w-3 h-3 text-rose-400" /> 124
                                </span>
                                <span className="flex items-center gap-1 hover:text-purple-300 cursor-pointer">
                                  <MessageCircle className="w-3 h-3 text-cyan-400" /> 38
                                </span>
                                <span className="flex items-center gap-1 hover:text-purple-300 cursor-pointer">
                                  <Share2 className="w-3 h-3" /> Share
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'ecommerce' && (
                          /* E-Commerce Preview */
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2">
                              <div className="flex items-center gap-2">
                                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs font-bold text-white font-heading">
                                  Aura Commerce
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                                <Star className="w-3 h-3 fill-amber-400" />
                                <span>4.9 / 5.0</span>
                              </div>
                            </div>
                            {/* Product row */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2.5 rounded-xl bg-[#131729] border border-cyan-500/20">
                                <div className="h-14 rounded-lg bg-gradient-to-tr from-cyan-900/40 to-blue-900/30 flex items-center justify-center text-cyan-300 text-xs font-mono mb-2">
                                  Audio Device
                                </div>
                                <div className="text-[11px] font-semibold text-white truncate">
                                  Acoustic Pro
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-xs font-bold text-cyan-300">
                                    $149.00
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                                    Add
                                  </span>
                                </div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#131729] border border-cyan-500/20">
                                <div className="h-14 rounded-lg bg-gradient-to-tr from-purple-900/40 to-indigo-900/30 flex items-center justify-center text-purple-300 text-xs font-mono mb-2">
                                  Smart Watch
                                </div>
                                <div className="text-[11px] font-semibold text-white truncate">
                                  Vibe Series 2
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-xs font-bold text-purple-300">
                                    $199.00
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                                    Add
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'management' && (
                          /* Student Data Management System Preview */
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between border-b border-violet-500/15 pb-2">
                              <div className="flex items-center gap-2">
                                <Database className="w-4 h-4 text-violet-400" />
                                <span className="text-xs font-bold text-white font-heading">
                                  Student Record Portal
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                                <span>DB: Online</span>
                              </div>
                            </div>
                            {/* Table preview */}
                            <div className="rounded-xl overflow-hidden border border-purple-500/15 bg-[#120f26] text-[10px]">
                              <div className="grid grid-cols-12 bg-[#1b1736] p-1.5 font-mono text-slate-400 font-semibold">
                                <div className="col-span-3">Reg. No</div>
                                <div className="col-span-4">Student Name</div>
                                <div className="col-span-3">Department</div>
                                <div className="col-span-2 text-right">Status</div>
                              </div>
                              <div className="grid grid-cols-12 p-1.5 border-b border-purple-500/10 text-slate-300 items-center">
                                <div className="col-span-3 font-mono text-purple-300">CSE-2024-01</div>
                                <div className="col-span-4 font-medium">Ananthi A</div>
                                <div className="col-span-3">CSE 2nd Yr</div>
                                <div className="col-span-2 text-right text-emerald-400">Enrolled</div>
                              </div>
                              <div className="grid grid-cols-12 p-1.5 text-slate-300 items-center">
                                <div className="col-span-3 font-mono text-purple-300">CSE-2024-02</div>
                                <div className="col-span-4 font-medium">Student Sample</div>
                                <div className="col-span-3">CSE 2nd Yr</div>
                                <div className="col-span-2 text-right text-cyan-400">Verified</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Side (6 cols) */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm font-bold text-purple-400">
                          PROJECT {project.id}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        <span className="text-xs font-mono text-slate-400">
                          {project.note}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading group-hover:text-purple-200 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#161327] border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-3">
                      <button
                        onClick={() => setModalProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 shadow-sm transition-all duration-200 group-hover:border-purple-400"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href={portfolioData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-[#141224] hover:bg-[#1d1a33] hover:text-white border border-purple-500/20 transition-colors"
                        title="GitHub Repository Placeholder"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              alert("All current highlighted projects are displayed above. More academic and exploratory projects are continuously being developed!");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-purple-300 bg-[#131122] hover:bg-[#1a172e] border border-purple-500/30 hover:border-purple-400 transition-all shadow-sm"
          >
            <span>View All Projects</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          </button>
        </div>
      </div>

      {/* Project Quick Details Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="max-w-lg w-full rounded-2xl bg-[#141224] border border-purple-500/30 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-mono text-purple-400 uppercase">Project {modalProject.id}</span>
                <h3 className="text-xl font-bold text-white font-heading">{modalProject.name}</h3>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              {modalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0c0a17] border border-purple-500/15 mb-5 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Domain:</span>
                <span>{modalProject.tags.join(' • ')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Developer:</span>
                <span>Ananthi A (2nd Year B.E. CSE)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Architecture:</span>
                <span>Modular student prototype concept</span>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
