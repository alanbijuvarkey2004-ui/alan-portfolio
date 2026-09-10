import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Award, BookOpen, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { personalInfo, skillCategories, experience, publications, certifications, volunteering, projects } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
ALAN BIJU VARKEY
Phone: ${personalInfo.phone} | Email: ${personalInfo.email} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

TARGET ROLES:
${personalInfo.targetRoles.join(' | ')}

EDUCATION:
${personalInfo.education.degree}
${personalInfo.education.institution} (${personalInfo.education.period})
${personalInfo.education.details}

TECHNICAL SKILLS:
- Languages: Python, Java, C, SQL
- Web Technologies: HTML, CSS, Angular, Flask, SQLite
- Frameworks & Testing: Selenium WebDriver, Test Automation, STLC, SDLC, Test Case Design, Regression Testing
- Developer Tools: VS Code, UiPath Studio, Cisco Packet Tracer
- AI & Deep Learning: PyTorch, YOLOv8, OpenCV, CNN, BiLSTM, Scikit-learn, Pandas

FEATURED PROJECTS:
1. Fall Detection System Using YOLOv8
   - Real-time AI-based fall detection system for elderly care and workplace safety.
   - Stack: Python, OpenCV, YOLOv8, LSTM, Telegram API
   - Metrics: 98.5% Accuracy, 95.3% Precision, 96.8% Recall.

2. CardioAI - AI-Based ECG Classification System
   - Hybrid deep learning clinical decision support system for 12-lead ECG signals.
   - Stack: Python, PyTorch, CNN, BiLSTM, Flask, SQLite
   - Metrics: 95.88% Accuracy, 0.99 AUC.

3. Stroke Prediction System
   - Predictive machine learning engine for early clinical stroke risk intervention.
   - Stack: Python, Pandas, Scikit-learn
   - Metrics: 85%+ Accuracy with SMOTE oversampling.

PUBLICATIONS:
1. "Hybrid EEG Signal Enhancement and Temporal-Graph Transformer Framework for Multiclass Seizure"
   - IEEE International Conference on Computing, Networks and Communications (IC2NC)
   - Scope: CHB-MIT Scalp EEG Dataset | 96.2% Accuracy.
2. "Federated Attention-Capsule CNN with Bio-Optimization for Coronary Artery Disease Screening"
   - Journal of Trends in Computer Science and Smart Technology (DOI: 10.36548/jtcsst.2026.2.001)
   - Scope: 40,000+ Multicentric Clinical Patient Records | 97.4% Accuracy.

WORK EXPERIENCE:
1. Automation Testing Intern | Vaisesika Consulting Pvt. Ltd. (May 2024 – Jul 2024)
   - Executed automated test scripts using Selenium WebDriver in Java.
   - Designed test cases, identified and triaged defects, optimized STLC/SDLC processes.
2. Networking Intern | Cisco AICTE Virtual Internship Program (May 2024 – Jun 2024)
   - Simulated network topologies, configured routing/switching using Cisco Packet Tracer.

CERTIFICATIONS:
- Google Cybersecurity Professional Certificate
- Networking Essentials (Cisco Networking Academy)
- Network Addressing and Basic Troubleshooting (Cisco Networking Academy)
- Java Programming Fundamentals (Infosys Springboard)
- PCAP: Programming Essentials in Python (Cisco Networking Academy)

VOLUNTEERING:
- National Service Scheme (NSS) Volunteer (2022–2025): Community outreach, event management, media editing.
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Alan_Biju_Varkey_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md print:hidden"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-slate-900 text-slate-100 border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col print:max-h-none print:border-none print:bg-white print:text-black"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-20 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Alan Biju Varkey — Verified Resume</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                Ready for Review
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={handleDownloadText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans text-slate-200 print:text-black print:p-0 print:overflow-visible">
            
            {/* Top Identity Block */}
            <div className="border-b border-slate-800 pb-5 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                B.Tech in CSE (Artificial Intelligence) • Software Development • Deep Learning • QA Automation
              </p>
              <div className="mt-3 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white">{personalInfo.education.institution}</span>
                  <p className="text-slate-300">{personalInfo.education.degree}</p>
                </div>
                <span className="font-mono text-slate-400 text-xs">{personalInfo.education.period}</span>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="text-xs space-y-1 text-slate-300">
                <p><strong className="text-white">Languages:</strong> Python, Java, C, SQL</p>
                <p><strong className="text-white">Web & Frameworks:</strong> HTML, CSS, Angular, Flask, SQLite</p>
                <p><strong className="text-white">Testing & QA:</strong> Selenium WebDriver, Test Automation, STLC, SDLC, Test Case Design, Regression Testing</p>
                <p><strong className="text-white">AI / Data Science:</strong> PyTorch, YOLOv8, OpenCV, CNN, BiLSTM, Scikit-learn, Pandas</p>
                <p><strong className="text-white">Developer Tools:</strong> VS Code, UiPath Studio, Cisco Packet Tracer, Git</p>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Featured Projects
              </h2>
              <div className="space-y-3 text-xs">
                {projects.map((p) => (
                  <div key={p.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs sm:text-sm">{p.title}</span>
                      <span className="text-[11px] text-cyan-400 font-mono">
                        {p.metrics[0].label}: {p.metrics[0].value}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] mb-1">
                      Tech: {p.techStack.join(', ')}
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Publications
              </h2>
              <div className="space-y-3 text-xs">
                {publications.map((pub) => (
                  <div key={pub.id}>
                    <p className="font-semibold text-white">"{pub.title}"</p>
                    <p className="text-cyan-300/90 text-[11px]">{pub.venue} • {pub.results}</p>
                    {pub.doi && <p className="text-slate-400 font-mono text-[10px]">DOI: {pub.doi}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Work Experience & Internships
              </h2>
              <div className="space-y-3 text-xs">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white">{exp.role} | {exp.company}</span>
                      <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                    </div>
                    <p className="text-slate-300 mt-0.5">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Certifications & Leadership
              </h2>
              <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                {certifications.map((c, i) => (
                  <li key={i}><strong className="text-white">{c.title}</strong> — {c.issuer}</li>
                ))}
                <li><strong className="text-white">{volunteering.role}</strong> — {volunteering.organization} ({volunteering.period})</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
