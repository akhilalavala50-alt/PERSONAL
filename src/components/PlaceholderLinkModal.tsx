import { Project } from '../types';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { X, ArrowUpRight, Github, ExternalLink, Mail } from 'lucide-react';

interface PlaceholderLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'github' | 'demo';
  project?: Project;
}

export function PlaceholderLinkModal({
  isOpen,
  onClose,
  type,
  project,
}: PlaceholderLinkModalProps) {
  if (!isOpen) return null;

  const isGithub = type === 'github';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 max-w-md w-full p-6 shadow-2xl relative space-y-4 text-slate-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400">
            {isGithub ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {isGithub ? 'Project Repository' : 'Live Interactive Demo'}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {project ? project.title : 'Student Project'}
            </p>
          </div>
        </div>

        {/* Informative Explanation */}
        <div className="bg-[#090d16] border border-slate-800 rounded-lg p-4 text-xs text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-blue-400 font-semibold">Active Repository Preparation:</strong>{' '}
            As a first-semester student, Ram Akhil is currently curating, documenting, and testing the scripts for{' '}
            <span className="font-semibold text-white">{project ? project.title : 'this project'}</span> before publishing the public repository and live hosted environment.
          </p>
          <p className="text-slate-400">
            To review the code logic now, explore the &ldquo;Program Logic Highlights&rdquo; breakdown or connect directly via LinkedIn.
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <a
            href={STUDENT_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors shadow-md"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Send Inquiries</span>
          </a>
        </div>
      </div>
    </div>
  );
}
