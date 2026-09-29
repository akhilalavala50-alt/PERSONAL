import { STUDENT_PROFILE } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context line - unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>{STUDENT_PROFILE.currentStatus}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-blue-700">{STUDENT_PROFILE.currentLevel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
              {STUDENT_PROFILE.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed text-balance">
              {STUDENT_PROFILE.subtitle}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {STUDENT_PROFILE.heroSupportingText}
            </p>

            {/* Two Required CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-xs"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={STUDENT_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 hover:text-slate-950 transition-colors shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Quiet Quick Indicators */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Actively Learning & Coding Daily
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Open to Hackathons & Student Teams</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Building Real-World Projects</span>
            </div>
          </div>

          {/* Focal Card: Student Learning Snapshot (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs hover:border-stone-300 transition-colors">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-slate-800">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Current Learning Snapshot</h2>
                    <p className="text-xs text-slate-500">Semester 01 Journey</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">2026</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      Core Learning Focus
                    </span>
                    <span className="text-slate-400 font-normal">Active</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-stone-50 p-2.5 rounded-md border border-stone-100">
                    Python scripting, Web fundamentals (HTML/CSS/JS), Generative AI fundamentals, and structured problem solving.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Practical Project Approach
                    </span>
                    <span className="text-slate-400 font-normal">Hands-on</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-stone-50 p-2.5 rounded-md border border-stone-100">
                    Strengthening logic through functional projects like voting checkers, ATM simulators, calculators, and media editing experiments.
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Target Specialization</span>
                  <span className="font-semibold text-slate-800">AI Engineering</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
