import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Cpu, CheckCircle2, HeartHandshake, Download, Sparkles, MapPin, Calendar, Mail } from 'lucide-react';
import { personalInfo, volunteering } from '../data/portfolioData';

export default function About({ onDownloadResume }) {
  const pillars = [
    {
      title: "Artificial Intelligence & DL",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      description: "Hands-on experience developing computer vision pipelines (YOLOv8) and sequential temporal networks (BiLSTM, Transformers) with state-of-the-art diagnostic accuracy.",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Quality Assurance & STLC",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      description: "Rigorous test engineering background utilizing Selenium WebDriver in Java. Experienced in boundary analysis, regression suites, and bug lifecycle triage.",
      borderColor: "border-emerald-500/30"
    },
    {
      title: "Academic Research",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      description: "Published author with papers indexed in IEEE and peer-reviewed journals, focusing on epilepsy seizure graph transformers and federated capsule networks.",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Community Leadership",
      icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
      description: "Active NSS Volunteer for 3+ years driving grassroots digital literacy drives, social welfare events, and multimedia outreach campaigns.",
      borderColor: "border-amber-500/30"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Alan</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering Intelligence with <span className="text-gradient-cyan">Reliability & Purpose</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            A forward-thinking Computer Science engineer focused on closing the gap between complex artificial intelligence algorithms and reliable, enterprise-grade software execution.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-2xl p-7 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>The Story So Far</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a final-year B.Tech student in <span className="text-white font-medium">Computer Science and Engineering (Artificial Intelligence)</span> at <span className="text-cyan-400 font-medium">Karunya Institute of Technology and Sciences</span> (Class of 2026). My technical trajectory combines rigorous mathematical foundations in deep learning with hands-on industrial software testing.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                Whether deploying sub-second real-time computer vision models for elderly fall detection, synthesizing federated medical architectures for cardiac screening across 40,000+ patient records, or executing automated regression suites with Selenium WebDriver, my focus is always on <span className="text-purple-300 font-medium">precision, maintainability, and measurable impact</span>.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Beyond pure coding, my 3+ years as a <span className="text-amber-400 font-medium">National Service Scheme (NSS) volunteer</span> instilled in me strong interpersonal communication, teamwork, and project organization skills—ensuring I thrive in collaborative engineering environments.
              </p>

              {/* Download Resume Button */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-200">Looking for my complete credentials?</p>
                  <p className="text-xs text-slate-400">Download formatted resume with academic & technical breakdown.</p>
                </div>
                <button
                  onClick={onDownloadResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </div>

            {/* Education Spotlight Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {personalInfo.education.status}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {personalInfo.education.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-sm font-medium text-cyan-400/90 mt-0.5">
                    {personalInfo.education.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {personalInfo.education.details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Strategic Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-2 px-1">
              Core Pillars of Competence
            </h3>

            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-xl p-5 border ${pillar.borderColor} hover:border-slate-600 transition-all hover:translate-x-1`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Volunteering Highlight Card */}
            <div className="glass-card rounded-xl p-5 border border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Volunteering & Community Impact
                </h4>
              </div>
              <p className="text-xs font-semibold text-slate-200">
                {volunteering.role} ({volunteering.period})
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {volunteering.organization}
              </p>
              <ul className="mt-2.5 space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                {volunteering.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
