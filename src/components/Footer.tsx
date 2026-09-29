import { STUDENT_PROFILE } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, Github, Code } from 'lucide-react';

interface FooterProps {
  onOpenSourceModal?: () => void;
  onOpenGithubPlaceholder: () => void;
}

export function Footer({ onOpenSourceModal, onOpenGithubPlaceholder }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white border-t border-stone-200 py-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Exact required copyright text */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs sm:text-sm font-medium text-slate-800">
              © 2026 ALAVALA RAM AKHIL. Built with curiosity, code, and continuous learning.
            </p>
            <p className="text-xs text-slate-400">
              1st Semester Student · Aspiring AI Engineer · Designed with clean, accessible standards.
            </p>
          </div>

          {/* Links & Affordances */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={STUDENT_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span aria-hidden="true" className="text-stone-300">·</span>

            {/* GitHub Placeholder with working dialog handler */}
            <button
              type="button"
              onClick={onOpenGithubPlaceholder}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-500" />
              <span>GitHub (Coming Soon)</span>
            </button>

            {onOpenSourceModal && (
              <>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <button
                  type="button"
                  onClick={onOpenSourceModal}
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>HTML/CSS/JS Files</span>
                </button>
              </>
            )}

            <span aria-hidden="true" className="text-stone-300">·</span>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
