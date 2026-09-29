import { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';
import { ProjectDetailModal } from './ProjectDetailModal';
import { PlaceholderLinkModal } from './PlaceholderLinkModal';
import { Check, Github, ExternalLink, Info } from 'lucide-react';

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
    <section id="projects" className="py-20 border-b border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
            03. Practical Implementation
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A portfolio of practical projects built to develop programming foundations, algorithmic thinking, and user interaction mechanics.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Placeholder Graphic */}
                <ProjectVisualPlaceholder projectId={project.id} title={project.title} />

                {/* Card Content Container */}
                <div className="p-5 sm:p-6">
                  {/* Category & Status Line - Zero Pill Rule */}
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-blue-700">Hands-on Practice</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used (Unboxed Text with Separators) */}
                  <div className="mb-4 pb-4 border-b border-stone-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-700 font-medium">
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
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Key Concepts Learned
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.keyConcepts.slice(0, 3).map((concept, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenPlaceholder('github', project)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-stone-50 border border-stone-200 rounded-md hover:bg-stone-100 hover:text-slate-900 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-500" />
                    <span>GitHub</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenPlaceholder('demo', project)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-stone-50 border border-stone-200 rounded-md hover:bg-stone-100 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    <span>Live Demo</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50/50 rounded-md transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Project Details & Architecture</span>
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
