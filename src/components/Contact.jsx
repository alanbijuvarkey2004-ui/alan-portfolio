import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare, AlertCircle, ExternalLink, Key, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Role',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copiedType, setCopiedType] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showKeySetup, setShowKeySetup] = useState(false);
  const [customKey, setCustomKey] = useState(
    () => localStorage.getItem('web3forms_key') || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
  );

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSaveKey = (e) => {
    e.preventDefault();
    localStorage.setItem('web3forms_key', customKey.trim());
    setShowKeySetup(false);
  };

  // Generate direct Gmail URL
  const getGmailUrl = () => {
    const subject = encodeURIComponent(`[Portfolio] ${formData.subject || 'Opportunity Inquiry'} - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Alan,\n\n${formData.message || 'I would like to connect regarding an opportunity.'}\n\nBest regards,\n${formData.name || 'Candidate / Recruiter'}\nEmail: ${formData.email || 'N/A'}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  // Generate mailto URL
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio] ${formData.subject || 'Opportunity Inquiry'} - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Alan,\n\n${formData.message || 'I would like to connect regarding an opportunity.'}\n\nBest regards,\n${formData.name || 'Candidate / Recruiter'}\nEmail: ${formData.email || 'N/A'}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address so Alan can reply to you.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const activeKey = customKey.trim() || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If an Access Key is configured, use the Web3Forms API to deliver directly to inbox
    if (activeKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: activeKey,
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio Inquiry] ${formData.subject} from ${formData.name}`,
            message: formData.message,
            from_name: `${formData.name} (Portfolio Website)`
          })
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          try {
            confetti({
              particleCount: 90,
              spread: 75,
              origin: { y: 0.6 },
              colors: ['#38bdf8', '#06b6d4', '#14b8a6', '#a855f7']
            });
          } catch (err) {
            console.error(err);
          }
          setFormData({
            name: '',
            email: '',
            subject: 'Software Engineering Role',
            message: ''
          });
        } else {
          setStatus('error');
          setErrorMessage(data.message || 'Failed to deliver message via Web3Forms API.');
        }
      } catch (error) {
        setStatus('error');
        setErrorMessage('Network error while connecting to email service. You can use the "Open in Gmail" button below.');
      }
    } else {
      // Fallback if no access key configured yet: open directly in Gmail or email client
      setStatus('success');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#06b6d4', '#14b8a6', '#a855f7']
        });
      } catch (err) {}

      // Automatically launch Gmail web composer in a new tab
      window.open(getGmailUrl(), '_blank');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Discuss <span className="text-gradient-cyan">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Whether you have an engineering opening, an AI collaboration, or a technical inquiry, I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Info Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-7 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Feel free to reach out directly via email or phone. I actively respond to technical inquiries and recruitment opportunities.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-slate-400 block font-medium">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/60 text-teal-400 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Direct Phone / WhatsApp</span>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/60 text-purple-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      India • Open to Relocation & Remote Roles
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Launch Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                <span className="text-xs font-semibold text-slate-400 block">
                  Quick Email Launchers:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 text-xs font-medium text-slate-200 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 text-xs font-medium text-slate-200 border border-slate-800 hover:border-teal-500/40 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-teal-400" />
                    <span>Default Mail App</span>
                  </a>
                </div>
              </div>

              {/* Status Notice */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold">Ready to interview immediately</span>
                </div>

                <button
                  onClick={() => setShowKeySetup(!showKeySetup)}
                  className="text-slate-500 hover:text-cyan-400 text-[11px] font-mono flex items-center gap-1 transition-colors"
                  title="Configure Web3Forms API Key"
                >
                  <Key className="w-3 h-3" />
                  <span>API Setup</span>
                </button>
              </div>

              {/* Collapsible Key Setup Drawer */}
              {showKeySetup && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5" />
                      Free Direct Email Delivery (Web3Forms)
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    To receive messages directly in your inbox without opening an external mail client:
                    <br />
                    1. Visit <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">web3forms.com</a> and enter your email (<span className="text-white">alanbijuvarkey2004@gmail.com</span>).
                    <br />
                    2. Check your inbox for the free <strong>Access Key</strong>.
                    <br />
                    3. Paste it below and click Save!
                  </p>
                  <form onSubmit={handleSaveKey} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Paste Web3Forms Access Key here..."
                      value={customKey}
                      onChange={(e) => setCustomKey(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                    >
                      Save Key
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Interactive Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Message
                </h3>
                {customKey.trim() ? (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    ● Direct Inbox Delivery Active
                  </span>
                ) : (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    ● Direct Mail & Web Connected
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to reach Alan Biju Varkey. Messages are routed directly to his email.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-slate-900 border border-cyan-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Prepared & Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {customKey.trim() ? (
                      "Your message was successfully transmitted directly to Alan's Gmail inbox (alanbijuvarkey2004@gmail.com). Alan will review and get back to you shortly!"
                    ) : (
                      "Your message was formatted and Gmail composer was opened in your browser with Alan's address prefilled. If popup was blocked, click below to open:"
                    )}
                  </p>
                  
                  {!customKey.trim() && (
                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Gmail Web</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send via Default Mail App</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-3">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Subject / Opportunity Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="Software Engineering Role">Software Engineering Role</option>
                      <option value="AI / Machine Learning Opportunity">AI / Machine Learning Opportunity</option>
                      <option value="QA / Test Automation Role">QA / Test Automation Role</option>
                      <option value="Research Collaboration">Academic / Research Collaboration</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Hi Alan, we reviewed your projects and publications and would like to invite you for an interview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                      title="Directly opens web Gmail composer pre-filled with your message"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Send in Gmail</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
