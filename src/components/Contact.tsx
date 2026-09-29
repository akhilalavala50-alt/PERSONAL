import { useState, FormEvent } from 'react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { Send, CheckCircle2, ArrowUpRight, Copy, Check, Terminal } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const handleCopyDraft = () => {
    const draftText = `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>06. Direct Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Open to collaborative discussions with fellow students, engineers, mentors, and hackathon teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-7 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-3">
                Preferred Connection Channel
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                For project discussions, hackathon invitations, and professional networking, connecting directly through LinkedIn is the fastest way to get in touch.
              </p>

              {/* Primary LinkedIn Button */}
              <a
                href={STUDENT_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="block text-slate-500 font-mono mb-1 text-[11px]">Direct Profile URL:</span>
                <span className="font-mono text-slate-300 break-all select-all">
                  linkedin.com/in/alavala-ram-akhil-21bb00423
                </span>
              </div>
            </div>

            {/* Note on Student Availability */}
            <div className="bg-[#090d16] border border-slate-800 rounded-xl p-6 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Student Availability</span>
              </div>
              <p className="leading-relaxed">
                Currently balancing first-semester university coursework with coding projects and hackathons. Response time is typically within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to prepare a message draft.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3.5 bg-red-950/50 border border-red-800 rounded-md text-xs text-red-300 font-mono">
                  {errorMessage}
                </div>
              )}

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or organization"
                      className="w-full px-4 py-3 bg-[#090d16] border border-slate-800 rounded-md text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-[#090d16] border border-slate-800 rounded-md text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project ideas, hackathon collaboration, or advice for an aspiring AI engineer..."
                      className="w-full px-4 py-3 bg-[#090d16] border border-slate-800 rounded-md text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-all shadow-md shadow-blue-950/40 w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="bg-[#090d16] border border-slate-800 rounded-lg p-6 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Draft Prepared Successfully!</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Because a mail server or backend endpoint is not wired in this static portfolio preview, your drafted message is preserved below:
                  </p>

                  <div className="bg-slate-950 border border-slate-800 rounded-md p-3.5 font-mono text-xs text-slate-300 space-y-1">
                    <div><span className="text-slate-500">From:</span> {formData.name} ({formData.email})</div>
                    <div className="pt-2 text-white whitespace-pre-wrap">{formData.message}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
                    </button>

                    <a
                      href={STUDENT_PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
                    >
                      <span>Send via LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white underline ml-auto"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              )}

              {/* Developer Integration Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                <span className="text-slate-400 font-bold">Backend Ready: </span>
                This form is structured with clean state handlers. To connect a live backend, wire an API endpoint (e.g. Express `/api/contact`, Formspree, or EmailJS) inside `handleSubmit`.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
