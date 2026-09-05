import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#07060c] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-purple-500/10">
          {/* Left info */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-heading font-extrabold text-white text-xs">
                AA
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {personal.degree} • {personal.college}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121020] text-slate-400 hover:text-white hover:bg-purple-600/20 border border-purple-500/20 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="p-2.5 rounded-xl bg-[#121020] text-slate-400 hover:text-white hover:bg-purple-600/20 border border-purple-500/20 transition-colors"
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121020] text-slate-400 hover:text-white hover:bg-purple-600/20 border border-purple-500/20 transition-colors"
              title="GitHub Profile Placeholder"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#16132b] text-purple-300 hover:text-white hover:bg-purple-600/40 border border-purple-500/30 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed &amp; built with curiosity</span>
            <span className="text-purple-400">•</span>
            <span className="text-cyan-400">2nd Year CSE Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
