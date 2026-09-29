import { Project } from '../types';
import { X, CheckCircle, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlaceholder: (type: 'github' | 'demo', project: Project) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onOpenPlaceholder,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-stone-100 rounded-md transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Semester 01 Project</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {project.title}
        </h2>

        {/* Overview */}
        <div className="space-y-4 mb-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Technologies Used (Unboxed Text with Separators) */}
        <div className="mb-6 pb-6 border-b border-stone-200">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Technologies & Environment
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 font-medium">
            {project.technologies.map((tech, i) => (
              <span key={tech} className="inline-flex items-center gap-2">
                <span>{tech}</span>
                {i < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-stone-300">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Key Concepts Learned */}
        <div className="mb-6 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Key Concepts Learned
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            {project.keyConcepts.map((concept, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                <span>{concept}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logic Architecture Highlights */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-blue-700" />
            <h3 className="text-sm font-bold text-slate-900">
              Program Logic Highlights
            </h3>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-2">
            {project.logicHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-slate-700 font-mono">
                <span className="text-slate-400 font-bold shrink-0">{index + 1}.</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenPlaceholder('github', project);
              }}
              className="px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
            >
              GitHub Repository
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenPlaceholder('demo', project);
              }}
              className="px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
            >
              Live Demo
            </button>
          </div>

          <a
            href={STUDENT_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
