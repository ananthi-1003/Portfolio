import React from 'react';
import { ArrowUpRight, FolderGit2, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CanvasVisual from '../components/CanvasVisual';

export default function Hero() {
  const { personal } = portfolioData;

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161326]/80 border border-purple-500/25 shadow-[0_0_20px_rgba(139,92,246,0.15)] backdrop-blur-md mb-6 animate-in fade-in duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {personal.statusBadge}
              </span>
            </div>

            {/* Small Greeting */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-purple-400 font-semibold mb-2">
              HELLO, I'M
            </p>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight mb-4">
              <span className="text-gradient-purple">ANANTHI</span>{' '}
              <span className="text-white">A</span>
            </h1>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight leading-snug mb-5">
              Aspiring Software Developer{' '}
              <span className="text-purple-400 font-light">|</span>{' '}
              <span className="text-gradient-cyan">Building Ideas into Digital Experiences</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-8">
              {personal.shortBio}
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141224] border border-purple-500/15">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>B.E. CSE (2nd Year) • EGS Pillay Engg College</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141224] border border-purple-500/15">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nagapattinam, Tamil Nadu</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-98"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#151326]/80 hover:bg-[#1f1c38] hover:text-white border border-purple-500/25 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl p-2 bg-gradient-to-b from-purple-500/10 via-transparent to-cyan-500/10 border border-purple-500/20 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center">
              {/* Inner ambient frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0c0a17]/90 flex items-center justify-center relative">
                <CanvasVisual />

                {/* Decorative corner crosshairs */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-purple-400/40 select-none">
                  +SYS.NODE_01
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] text-cyan-400/40 select-none">
                  +CSE.2Y
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-slate-500/50 select-none">
                  [LIVE_RENDER]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-purple-300 transition-colors cursor-pointer"
           onClick={() => handleScrollTo('about')}>
        <span className="text-[11px] font-mono tracking-widest uppercase">Explore Portfolio</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
