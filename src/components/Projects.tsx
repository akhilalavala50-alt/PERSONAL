import { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';
import { ProjectDetailModal } from './ProjectDetailModal';
import { PlaceholderLinkModal } from './PlaceholderLinkModal';
import { Check, Github, ExternalLink, ArrowRight } from 'lucide-react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [placeholderModal, setPlaceholderModal] = useState<{
    isOpen: boolean;
    type: 'github' | 'demo';
    project?: Project;
  }>({
    isOpen: false,
    type: 'github',
  });

  const handleOpenPlaceholder = (type: 'github' | 'demo', project: Project) => {
    setPlaceholderModal({
      isOpen: true,
      type,
      project,
    });
  };

  return (
    <section id="projects" className="py-24 border-b border-slate-800/80 bg-[#0e1422]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>03. Practical Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Engineered to solidify algorithmic foundations, boundary-case handling, and interactive user flows.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl hover:border-slate-700 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Placeholder Graphic */}
                <ProjectVisualPlaceholder projectId={project.id} title={project.title} />

                {/* Card Content Container */}
                <div className="p-6">
                  {/* Category & Status Line - Zero Pill Rule */}
                  <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    <span className="text-blue-400">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">Working Logic</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used (Unboxed Text with Dot Separators) */}
                  <div className="mb-4 pb-4 border-b border-slate-800/80">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-300 font-medium">
                      {project.technologies.map((tech, i) => (
                        <span key={tech} className="inline-flex items-center gap-2">
                          <span>{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Concepts Learned */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Concepts
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {project.keyConcepts.slice(0, 3).map((concept, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-3 space-y-2.5">
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenPlaceholder('github', project)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>GitHub</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenPlaceholder('demo', project)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    <span>Live Demo</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-950/40 rounded-md transition-colors border border-blue-900/30"
                >
                  <span>View Architecture & Code Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal: Project Deep Dive */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenPlaceholder={handleOpenPlaceholder}
        />

        {/* Modal: Placeholder Informational Notice */}
        <PlaceholderLinkModal
          isOpen={placeholderModal.isOpen}
          onClose={() => setPlaceholderModal({ ...placeholderModal, isOpen: false })}
          type={placeholderModal.type}
          project={placeholderModal.project}
        />

      </div>
    </section>
  );
}
