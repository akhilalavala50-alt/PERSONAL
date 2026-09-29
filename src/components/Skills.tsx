import { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { Layers, Terminal, Sparkles, Compass } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: (string)[] = ['All', 'Currently Learning', 'Building With', 'Exploring'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'Currently Learning':
        return <Terminal className="w-4 h-4 text-blue-700" />;
      case 'Building With':
        return <Layers className="w-4 h-4 text-emerald-700" />;
      case 'Exploring':
        return <Sparkles className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
              02. Technical Focus
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Categorized by current engagement stage rather than fabricated proficiency percentages.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Context Legend - Zero-Pill Unboxed Text */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white border border-stone-200 rounded-lg text-xs">
          <div className="flex items-start gap-2.5">
            <Terminal className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-900 block">Currently Learning</strong>
              <span className="text-slate-500">Active coursework, daily coding practice, and conceptual study.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-900 block">Building With</strong>
              <span className="text-slate-500">Applied in working projects, repositories, and interfaces.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-900 block">Exploring</strong>
              <span className="text-slate-500">Foundational theories, emerging papers, and future roadmap areas.</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5 pb-2 border-b border-stone-100">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    {getCategoryIcon(skill.category)}
                    <span>{skill.category}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{skill.focusArea}</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Status footer line */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Domain Focus</span>
                <span className="text-slate-700 font-medium">Applied Student Level</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
