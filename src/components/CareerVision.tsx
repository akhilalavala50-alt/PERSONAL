import { CAREER_VISION_AREAS } from '../data/portfolioData';
import { Compass, Sparkles, ArrowRight, BrainCircuit } from 'lucide-react';

export function CareerVision() {
  return (
    <section id="vision" className="py-20 border-b border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
            05. Long-Term Aspirations
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Where I&apos;m Heading
          </h2>
          <p className="mt-3 text-base text-slate-600">
            My long-term goal is to become an AI Engineer and build intelligent, useful, and practical AI-powered solutions that solve real human challenges.
          </p>
        </div>

        {/* Narrative Vision Card */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <BrainCircuit className="w-4 h-4 text-blue-700" />
                <span>Career Blueprint</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Foundational Stage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Building Up From Code Fundamentals to Intelligent Systems
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than jumping directly to advanced abstractions without grounding, I am methodically mastering Python, data structures, and web technologies in my first year. This provides the mathematical and software engineering foundation required to design reliable AI pipelines, agents, and applications in the future.
              </p>
            </div>

            <div className="lg:w-72 bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-2 shrink-0">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Engineering Roadmap
              </span>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-blue-800 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  Year 1: Python & Web Foundations
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                  Year 2: Data Structures & ML Basics
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                  Year 3: Deep Learning & AI Systems
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                  Year 4: Production AI Engineering
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Exploration Areas - Stating interest without claiming false expertise */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Areas I Am Interested In Exploring (Future Learning Horizon)</span>
            <span className="text-slate-400">7 Core Disciplines</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAREER_VISION_AREAS.map((area, index) => (
              <div
                key={area.title}
                className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 pb-2 border-b border-stone-100">
                    <span className="font-mono text-[11px]">0{index + 1}.</span>
                    <span className="text-blue-700 font-medium text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {area.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {area.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Current Stance</span>
                  <span className="text-slate-700 font-medium">Curious Learner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
