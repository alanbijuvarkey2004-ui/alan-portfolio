import React, { useState } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Dynamic ambient lighting & grid backdrop */}
      <BackgroundGlow />

      {/* Global Navigation Header */}
      <Navbar onDownloadResume={handleOpenResume} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onDownloadResume={handleOpenResume} />
        <About onDownloadResume={handleOpenResume} />
        <Skills />
        <Projects />
        <Publications />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
