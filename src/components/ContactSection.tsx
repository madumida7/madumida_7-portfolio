import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Copy, Check, Send, Sparkles, MapPin, GraduationCap, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200 text-xs font-semibold text-[#831843]">
            <Mail className="w-3.5 h-3.5 text-pink-600" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1120] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#61364a]">
            I welcome discussions regarding IT opportunities, software engineering roles, or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-pink-200/80 shadow-md space-y-6">
              
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2d1120]">
                  Contact Coordinates
                </h3>
                <p className="text-xs text-[#6e3952] mt-1">
                  Open to full-time developer roles, internships, and project discussions.
                </p>
              </div>

              {/* Direct Email with Quick Copy */}
              <div className="p-4 rounded-2xl bg-white/85 border border-pink-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    Official Academic Email
                  </span>
                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-pink-100 text-pink-700 transition-colors flex items-center gap-1 text-[11px] font-medium"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#2d1120] hover:text-pink-600 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* GitHub Link */}
              <div className="p-4 rounded-2xl bg-white/85 border border-pink-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#632342] flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repositories
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-pink-700 hover:text-pink-900 transition-colors flex items-center gap-1.5 break-all"
                >
                  <span>github.com/madumida7</span>
                  <span className="text-[10px] bg-pink-100 px-1.5 py-0.5 rounded text-pink-800">Visit ↗</span>
                </a>
              </div>

              {/* Institution and Location */}
              <div className="space-y-3 pt-2 text-xs text-[#52293e]">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2d1120] block">Department of Computer Applications</span>
                    <span>Dr. G.R. Damodaran College of Science, Coimbatore</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2d1120] block">Location</span>
                    <span>Coimbatore / Cuddalore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-pink-200/80 shadow-md">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2d1120]">
                    Message Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52293e] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-pink-900">{formData.name}</span>. Your message regarding <span className="font-semibold text-pink-900">{formData.subject || 'Opportunity'}</span> has been captured. You can also send directly via email at <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                  <div className="space-y-1 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#2d1120] flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-pink-600" />
                      <span>Send a Direct Message</span>
                    </h3>
                    <p className="text-xs text-[#6e3952]">
                      Fill out the form below to initiate contact.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-[#421c2e]">
                        Your Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Talent Acquisition / Tech Lead"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-pink-200 text-xs text-[#2d1120] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-[#421c2e]">
                        Your Email Address <span className="text-pink-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-pink-200 text-xs text-[#2d1120] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-[#421c2e]">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Opportunity at TCS / Zoho"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-pink-200 text-xs text-[#2d1120] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-[#421c2e]">
                      Message <span className="text-pink-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project requirements, job role details, or an inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-pink-200 text-xs text-[#2d1120] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white shadow-md shadow-pink-300/40 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
