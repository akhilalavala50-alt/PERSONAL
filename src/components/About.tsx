import { STUDENT_PROFILE } from '../data/portfolioData';
import { Code2, Target, Cpu, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Code2,
      title: 'Project-First Learning',
      description:
        'Believing that true conceptual mastery is forged at the keyboard. Writing scripts, diagnosing bugs, and testing real-world logic rather than just memorizing passive syntax.',
    },
    {
      icon: Cpu,
      title: 'Applied AI & GenAI Curiosity',
      description:
        'Experimenting with foundational AI concepts, prompt engineering, and generative developer workflows with an eagerness to understand how real intelligence is engineered.',
    },
    {
      icon: Target,
      title: 'Competitive Problem-Solving',
      description:
        'Actively participating in ideathons and hackathon sprints to deconstruct community or campus challenges into approachable computational workflows under strict time limits.',
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-slate-800/80 bg-[#0e1422]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>01. Background & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A transparent look at where I stand today, what fuels my ambition, and how I approach my daily engineering journey.
          </p>
        </div>

        {/* Heroic Statement Box */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>

          <blockquote className="text-lg sm:text-2xl text-slate-100 leading-relaxed font-medium">
            &ldquo;{STUDENT_PROFILE.aboutMeText}&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Current Status:</span>
              <span className="text-blue-400 font-mono">1st Semester Undergraduate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Core Career Goal:</span>
              <span className="text-emerald-400 font-mono">Aspiring AI Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Approach:</span>
              <span className="text-slate-300">Hands-on · Project Driven · Continuous Growth</span>
            </div>
          </div>
        </div>

        {/* Three Guiding Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#0f172a]/70 border border-slate-800 rounded-xl p-7 shadow-lg hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment to Transparency & Heroic Integrity */}
        <div className="mt-10 bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 sm:p-6 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Grounded Engineering Integrity:</strong> I believe real capability is demonstrated through working code and clear logic. I do not claim years of enterprise engineering experience; instead, I bring deep motivation, daily hands-on implementation, curiosity for modern Generative AI, and a high-discipline work ethic.
          </p>
        </div>

      </div>
    </section>
  );
}
