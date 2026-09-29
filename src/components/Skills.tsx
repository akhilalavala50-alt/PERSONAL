import { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { Layers, Terminal, Sparkles, Compass } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Currently Learning', 'Building With', 'Exploring'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'Currently Learning':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Building With':
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'Exploring':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>02. Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400">
              Categorized by active learning lifecycle and verified application — with zero exaggerated percentages.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Context Legend - Zero-Pill Unboxed Text */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#0e1422] border border-slate-800 rounded-xl text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-950/60 rounded-md text-blue-400 shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <strong className="font-bold text-white block mb-0.5">Currently Learning</strong>
              <span className="text-slate-400 leading-relaxed">Daily programming, coursework, and problem solving.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-950/60 rounded-md text-emerald-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <strong className="font-bold text-white block mb-0.5">Building With</strong>
              <span className="text-slate-400 leading-relaxed">Directly implemented in repositories, scripts, and interfaces.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-950/60 rounded-md text-amber-400 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <strong className="font-bold text-white block mb-0.5">Exploring</strong>
              <span className="text-slate-400 leading-relaxed">Foundational algorithms, AI papers, and emerging tools.</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                    {getCategoryIcon(skill.category)}
                    <span>{skill.category}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{skill.focusArea}</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Status footer line */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>STAGE</span>
                <span className="text-blue-400 font-semibold">Active Student Mastery</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
