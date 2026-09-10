import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Cpu, Activity, Zap, ExternalLink, GitBranch, Layers, Shield } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-500/10 z-10 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-7 border-b border-slate-800 flex items-start justify-between bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
            
            {/* Key Metrics Grid */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Empirical Performance Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      {metric.label}
                    </span>
                    <span className="text-lg sm:text-xl font-black text-cyan-400">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                System Architecture & Methodology
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Key Highlights & Engineering Milestones */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technical Highlights & Innovations
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies & Tooling
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Pipeline Simulator Mockup */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Activity className="w-3.5 h-3.5" /> Pipeline Live State
                </span>
                <span className="text-emerald-400">STATUS: VERIFIED</span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                {project.id === 'fall-detection' && 
                  "> [INFERENCE]: Pose stream active -> 17 keypoints tracked -> BiLSTM temporal window: 1.5s -> Fall probability: 0.02 (NORMAL SAFE)"}
                {project.id === 'cardio-ai' && 
                  "> [SIGNAL]: 12-lead ECG ingestion -> Baseline drift removed -> CNN-BiLSTM feature map -> Sinus Rhythm (Confidence: 99.1%)"}
                {project.id === 'stroke-prediction' && 
                  "> [FEATURE MATRIX]: Age=54, Glucose=112, BMI=24.1, Hypert=0 -> SMOTE-adjusted logistic regression -> Low Risk (0.12)"}
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:px-7 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Designed & developed by Alan Biju Varkey
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
