import { useState } from 'react';
import { X, Download, FileCode, ExternalLink } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StandaloneCodeModal({ isOpen, onClose }: StandaloneCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-slate-100">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Beginner-Friendly Standalone Files
              </h2>
              <p className="text-xs text-slate-400">
                Clean, semantic, commented index.html, style.css, and script.js ready for static hosting or university review.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            aria-label="Close code modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Action Bar */}
        <div className="px-6 py-3 bg-[#0a0e17] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'html'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              index.html
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'css'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              style.css
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'js'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}</span>
            </button>
          </div>
        </div>

        {/* Informative Explanation Pane */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-slate-300 bg-[#060910] h-96">
          {activeTab === 'html' && (
            <div className="space-y-2">
              <div className="text-blue-400 font-mono text-xs pb-2 border-b border-slate-900 mb-3">
                # Standalone index.html: Pure semantic HTML5 structure with no build tooling required. Located at /public/standalone/index.html
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">
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
              <div className="text-blue-400 font-mono text-xs pb-2 border-b border-slate-900 mb-3">
                # Standalone style.css: Modern, clean, responsive CSS without any neon colors. Located at /public/standalone/style.css
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">
{`:root {
  --bg-main: #0b0f17;
  --bg-card: #0f172a;
  --text-main: #f8fafc;
  --accent-color: #2563eb;
}
... (Full CSS file available in /public/standalone/style.css)
`}
              </pre>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-2">
              <div className="text-blue-400 font-mono text-xs pb-2 border-b border-slate-900 mb-3">
                # Standalone script.js: Clean vanilla JS handling filtering, mobile menu, and modals. Located at /public/standalone/script.js
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">
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
        <div className="p-4 bg-[#0a0e17] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Both React SPA and Vanilla HTML/CSS/JS formats are provided.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
