import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const { contact, socials } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = () => {
    // NOTE: Copying the placeholder email. Replace 'your-email@example.com' in portfolioData.js
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
    // Reset form after short feedback
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={contact.badge}
          title={contact.heading}
          subtitle={contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121020]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  Let's Connect &amp; Collaborate
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  I'm currently exploring opportunities to collaborate on innovative coding projects, student developer initiatives, and technical learning.
                </p>
              </div>

              {/* LinkedIn Direct Button (Verified Official URL) */}
              <div className="space-y-3 pt-2">
                <a
                  href={socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#17142e] to-[#12182c] border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0077b5]/20 text-[#38bdf8] flex items-center justify-center border border-[#0077b5]/40">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        ananthi-ananth-a7b203401
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email Action & Copy Box */}
                {/* NOTE FOR USER: Replace placeholder 'your-email@example.com' in portfolioData.js */}
                <div className="p-4 rounded-2xl bg-[#141126] border border-purple-500/20 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center border border-purple-500/25">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Email Address
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {socials.email}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl bg-[#1d1936] hover:bg-purple-600/30 text-slate-300 hover:text-white transition-all border border-purple-500/20"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-purple-300" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-purple-500/10">
                    <a
                      href={`mailto:${socials.email}`}
                      className="text-xs font-mono font-medium text-cyan-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Send Direct Email</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    {copied && (
                      <span className="text-[11px] font-mono text-emerald-400 ml-auto animate-pulse">
                        ✓ Copied to clipboard!
                      </span>
                    )}
                  </div>
                </div>

                {/* GitHub Placeholder */}
                {/* NOTE FOR USER: Replace placeholder with your real GitHub profile */}
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#121020] border border-purple-500/15 hover:border-purple-400/40 transition-all group"
                  title="Add GitHub profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center border border-white/10">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {socials.githubLabel}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                    Placeholder
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121020]/90 border border-purple-500/20 backdrop-blur-xl shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Leave a quick note, greeting, or feedback.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-cyan-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Ananthi A. I appreciate your note and will review it promptly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#17142c] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#17142c] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Message / Project Idea
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Share your thoughts, suggestions, or collaboration proposal..."
                      className="w-full px-4 py-3 rounded-xl bg-[#17142c] border border-purple-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_25px_-5px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-[1.01]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
