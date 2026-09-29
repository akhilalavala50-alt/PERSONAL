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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl border border-stone-200 max-w-md w-full p-6 shadow-xl relative space-y-4">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-stone-100 rounded-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-slate-800">
            {isGithub ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {isGithub ? 'Project Repository' : 'Live Interactive Demo'}
            </h3>
            <p className="text-xs text-slate-500">
              {project ? project.title : 'Student Project'}
            </p>
          </div>
        </div>

        {/* Informative Explanation */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-3.5 text-xs text-slate-600 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-800">Status: In Preparation.</strong>{' '}
            As a first-semester student, Ram Akhil is currently organizing, documenting, and testing the scripts for{' '}
            <span className="font-semibold text-slate-900">{project ? project.title : 'this project'}</span> before publishing the public repository and live hosted environment.
          </p>
          <p className="text-slate-500">
            To view the logic structure now, explore the &ldquo;Project Details & Architecture&rdquo; card breakdown or connect with Akhil directly on LinkedIn.
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <a
            href={STUDENT_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>Send Inquiries</span>
          </a>
        </div>
      </div>
    </div>
  );
}
