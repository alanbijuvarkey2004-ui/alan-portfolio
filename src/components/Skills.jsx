import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, CheckCircle2, Layers, Cpu, Database, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Categorized <span className="text-gradient-cyan">Skill Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            An industry-aligned engineering toolkit spanning algorithmic programming, deep neural networks, enterprise automated QA, and systems diagnostics.
          </motion.p>
        </div>

        {/* Category Tabs Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                        {getIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-cyan-400">
                      {category.skills.length} competencies
                    </span>
                  </div>

                  {/* Skills List with Progress & Details */}
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-cyan-400/90 font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Visual Progress Track */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 rounded-full"
                          />
                        </div>

                        <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 inline-block" />
                          <span>{skill.highlight}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom badge indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified via Academic Coursework & Internships</span>
                  <span className="text-cyan-400 font-semibold">Active Practice</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
