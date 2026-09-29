import { CAREER_VISION_AREAS } from '../data/portfolioData';
import { Sparkles, BrainCircuit, Compass } from 'lucide-react';

export function CareerVision() {
  return (
    <section id="vision" className="py-24 border-b border-slate-800/80 bg-[#0e1422]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>05. Long-Term Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            Where I&apos;m Heading
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            My long-term goal is to become an AI Engineer and build intelligent, useful, and practical AI-powered solutions that create real human leverage.
          </p>
        </div>

        {/* Narrative Vision Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <BrainCircuit className="w-4 h-4" />
                <span>AI Engineering Blueprint</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">Foundational Stage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Building Up From Code Fundamentals to Intelligent Systems
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Rather than rushing into high-level abstractions without grounding, I am methodically mastering Python, control structures, and web technologies during my first semester. This establishes the software engineering and mathematical discipline required to reliably engineer AI pipelines, agents, and autonomous models in the future.
              </p>
            </div>

            <div className="lg:w-80 bg-[#090d16] border border-slate-800 rounded-xl p-5 space-y-3 shrink-0">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block border-b border-slate-800 pb-2">
                4-Year Trajectory Blueprint
              </span>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-blue-400 font-semibold font-mono">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span>Year 1: Python & Web Foundations</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span>Year 2: Data Structures & ML Basics</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span>Year 3: Deep Learning & AI Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span>Year 4: Production AI Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Exploration Areas - Stating interest without claiming false expertise */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            <span>Areas I Am Interested In Exploring (Future Learning Horizon)</span>
            <span className="text-blue-400">7 Core Disciplines</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_VISION_AREAS.map((area, index) => (
              <div
                key={area.title}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-800/80">
                    <span className="font-mono text-[11px] text-slate-400">0{index + 1}.</span>
                    <span className="text-blue-400 font-medium text-[11px] flex items-center gap-1 font-mono">
                      <Sparkles className="w-3 h-3" />
                      {area.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {area.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STANCE</span>
                  <span className="text-slate-300 font-medium">Curious Student Learner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
