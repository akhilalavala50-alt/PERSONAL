import { useState, FormEvent } from 'react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

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
    <section id="contact" className="py-20 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
            06. Connect & Collaborate
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Get in Touch
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Open to conversations with fellow students, developers, mentors, and hackathon teams. Reach out with project ideas or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Preferred Connection Channel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                For project discussions, hackathon invitations, and professional networking, connecting directly through LinkedIn is the fastest way to get in touch.
              </p>

              {/* Primary LinkedIn Button */}
              <a
                href={STUDENT_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-slate-500">
                <span>Profile URL: </span>
                <span className="font-mono text-slate-700 break-all select-all">
                  linkedin.com/in/alavala-ram-akhil-21bb00423
                </span>
              </div>
            </div>

            {/* Note on Student Availability */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-800 text-sm">
                Student Availability
              </h4>
              <p className="leading-relaxed">
                Currently balancing first-semester university coursework with coding projects and hackathons. Response time is typically within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in the details below to prepare a message draft.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or organization"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, hackathon idea, or advice for an aspiring AI engineer..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-xs w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Draft Prepared Successfully!</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you for reaching out, <strong className="text-slate-900">{formData.name}</strong>. Because a live mail server or backend endpoint is not wired in this static portfolio preview, your drafted message is preserved below:
                  </p>

                  <div className="bg-white border border-stone-200 rounded-md p-3 font-mono text-xs text-slate-700 space-y-1">
                    <div><span className="text-slate-400">From:</span> {formData.name} ({formData.email})</div>
                    <div className="pt-1 text-slate-900 whitespace-pre-wrap">{formData.message}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
                    </button>

                    <a
                      href={STUDENT_PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
                    >
                      <span>Send via LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-500 hover:text-slate-800 underline ml-auto"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              )}

              {/* Developer Integration Note */}
              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-500">Backend Ready: </span>
                This form is structured with clean state handlers. To connect a backend, attach an API endpoint (e.g. Express `/api/contact`, Formspree, or EmailJS) inside `handleSubmit`.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
