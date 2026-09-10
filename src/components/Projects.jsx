import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Eye, Sparkles, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'fall-detection':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'cardio-ai':
        return <HeartPulse className="w-5 h-5 text-purple-400" />;
      case 'stroke-prediction':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient-cyan">AI & Software Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            High-impact applications combining deep learning algorithms, statistical validation, and production software design.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-glass hover:-translate-y-1.5"
            >
              {/* Top Card Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                      {project.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getProjectIcon(project.id)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Brief Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Empirical Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-base font-extrabold text-cyan-400">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link to Modal */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 text-xs font-bold border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture & Case Study</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
