import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, ExternalLink, Sparkles, ShieldCheck, Database, Award, Briefcase, Zap } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onDownloadResume }) {
  const iconMap = {
    Zap: <Zap className="w-5 h-5 text-cyan-400" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Award: <Award className="w-5 h-5 text-teal-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-blue-400" />
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-glow-cyan/20 mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-200 tracking-wide">
            {personalInfo.status}
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 text-left"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I'm{' '}
              <span className="text-gradient-cyan block sm:inline mt-1 sm:mt-0">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-300">
              AI Engineer & Software Developer bridging <span className="text-cyan-400">Deep Learning research</span> with <span className="text-purple-400">production-grade QA</span>.
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              B.Tech in CSE (Artificial Intelligence) candidate at Karunya Institute of Technology and Sciences (2022–2026). Specializing in computer vision pipelines, biomedical signal classification, automated testing with Selenium, and full-stack software architecture.
            </p>

            {/* Target Role Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {personalInfo.targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-slate-900/70 border border-slate-700/60 rounded-md text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* CTAs and Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-cyan"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 hover:border-slate-500"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Quick Contact & Verified Channels */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-teal-400 transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-teal-500/40">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Profile Card / Visual Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent">
              <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-xl p-6 border border-slate-800 shadow-glass overflow-hidden">
                {/* Decorative Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
                    terminal://alan-core
                  </span>
                </div>

                {/* Core Technical Highlights in terminal style */}
                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-purple-400 font-semibold">$ candidate.education:</span>
                    <p className="text-slate-300 font-sans text-xs mt-1">
                      B.Tech in CSE (Artificial Intelligence)
                      <br />
                      <span className="text-slate-400">Karunya Institute of Technology and Sciences</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-cyan-400 font-semibold">$ candidate.primary_stack:</span>
                    <p className="text-slate-300 font-sans text-xs mt-1 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300">Python</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-teal-300">PyTorch</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300">Selenium</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-blue-300">Java</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300">YOLOv8</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-teal-400 font-semibold">$ candidate.publications:</span>
                    <p className="text-slate-300 font-sans text-xs mt-1">
                      • IEEE IC2NC (Seizure Transformers - 96.2%)
                      <br />
                      • JTCSST Journal (CAD Screening - 97.4%)
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="font-sans font-medium">Google Cybersecurity & Cisco Certified</span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive card pulse */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Available for Full-time Roles
                  </span>
                  <a
                    href="#contact"
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    Hire Alan <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* High-Impact Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition-transform">
                  {iconMap[stat.icon]}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
