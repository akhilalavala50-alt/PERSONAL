import { useState } from 'react';
import { X, Copy, Check, Download, FileCode, ExternalLink } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StandaloneCodeModal({ isOpen, onClose }: StandaloneCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const downloadFile = (filename: string, path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl border border-stone-200 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-slate-800">
              <FileCode className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Beginner-Friendly Standalone Files
              </h2>
              <p className="text-xs text-slate-500">
                Clean, semantic, commented index.html, style.css, and script.js ready for simple static hosting or academic review.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-stone-100 rounded-md transition-colors"
            aria-label="Close code modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Action Bar */}
        <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'html'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              index.html
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'css'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              style.css
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'js'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              script.js
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`/standalone/${activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Raw File</span>
            </a>
            <button
              type="button"
              onClick={() => {
                const map = {
                  html: { name: 'index.html', path: '/standalone/index.html' },
                  css: { name: 'style.css', path: '/standalone/style.css' },
                  js: { name: 'script.js', path: '/standalone/script.js' },
                };
                downloadFile(map[activeTab].name, map[activeTab].path);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}</span>
            </button>
          </div>
        </div>

        {/* Informative Explanation Pane */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-slate-800 bg-stone-900 text-stone-100 h-96">
          {activeTab === 'html' && (
            <div className="space-y-2">
              <div className="text-slate-400 font-sans text-xs pb-2 border-b border-stone-800 mb-3">
                // Standalone index.html: Pure semantic HTML5 structure with no build tooling required. Located at /public/standalone/index.html
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALAVALA RAM AKHIL | Aspiring AI Engineer & Student</title>
  ... (Full HTML file available in /public/standalone/index.html)
`}
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-2">
              <div className="text-slate-400 font-sans text-xs pb-2 border-b border-stone-800 mb-3">
                // Standalone style.css: Modern, clean, responsive CSS without any neon colors. Located at /public/standalone/style.css
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
{`:root {
  --bg-main: #fafaf9;
  --bg-card: #ffffff;
  --text-main: #0f172a;
  --accent-color: #2563eb;
}
... (Full CSS file available in /public/standalone/style.css)
`}
              </pre>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-2">
              <div className="text-slate-400 font-sans text-xs pb-2 border-b border-stone-800 mb-3">
                // Standalone script.js: Clean vanilla JS handling filtering, mobile menu, and modals. Located at /public/standalone/script.js
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
{`document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  // 2. Skill Category Filtering
  // 3. Project Placeholder Modal
  // 4. Contact Form Draft Handler
});
... (Full JS file available in /public/standalone/script.js)
`}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-slate-500">
          <span>Both React SPA and Vanilla HTML/CSS/JS formats are provided.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-stone-300 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
