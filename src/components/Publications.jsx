import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Check, Copy, Award, FileText, Database, TrendingUp } from 'lucide-react';
import { publications } from '../data/portfolioData';

export default function Publications() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCitation = (pub) => {
    const citation = `${pub.title}. In ${pub.venue}${pub.doi ? `, DOI: ${pub.doi}` : ''}. Author: Alan Biju Varkey et al.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Published <span className="text-gradient-purple">Research Papers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Peer-reviewed contributions in biomedical deep learning, graph transformers, and privacy-preserving federated clinical diagnostics.
          </motion.p>
        </div>

        {/* Publications Grid */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${pub.badgeColor}`}>
                    {pub.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    {pub.status}
                  </span>
                </div>

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 hover:underline bg-purple-950/40 px-2.5 py-1 rounded border border-purple-800/40"
                  >
                    <span>DOI: {pub.doi}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Title & Venue */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                "{pub.title}"
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{pub.venue}</span>
              </p>

              {/* Abstract / Description */}
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {pub.description}
              </p>

              {/* Data Scope & Results Highlights */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                  <Database className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                      Dataset Scope
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {pub.dataset}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                      Empirical Findings
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {pub.results}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags & Action Bar */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCitation(pub)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-colors"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied Citation</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                    >
                      <span>Read Publication</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
