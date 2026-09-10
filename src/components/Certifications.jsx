import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Network, Activity, Coffee, FileCode, CheckCircle, GraduationCap, HeartHandshake } from 'lucide-react';
import { certifications, personalInfo, volunteering } from '../data/portfolioData';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Network': return <Network className="w-5 h-5 text-teal-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-purple-400" />;
      default: return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient-cyan">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Recognized industry credentials in cybersecurity, enterprise networking, algorithmic Python, and Java engineering.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700/60">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {cert.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Spotlight Row: Education & Community */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 to-transparent flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                Formal Academic Foundation
              </span>
              <h3 className="text-base font-bold text-white">
                {personalInfo.education.degree}
              </h3>
              <p className="text-xs text-cyan-300/90 font-medium mt-0.5">
                {personalInfo.education.institution} • ({personalInfo.education.period})
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Specialized in deep learning architectures, automated software quality testing, relational schemas, and systems programming.
              </p>
            </div>
          </motion.div>

          {/* Volunteering Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-amber-500/20 bg-gradient-to-r from-amber-950/20 to-transparent flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex-shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Community Engagement & Leadership
              </span>
              <h3 className="text-base font-bold text-white">
                {volunteering.role}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                {volunteering.organization} • ({volunteering.period})
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Active community outreach, social welfare coordination, promotional videography, and photography for campus-wide initiatives.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
