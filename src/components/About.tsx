import { STUDENT_PROFILE } from '../data/portfolioData';
import { Code2, Target, Cpu, CheckCircle2 } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Code2,
      title: 'Project-First Learning',
      description:
        'Believing that concepts solidify through actual implementation. Writing scripts, diagnosing bugs, and testing real-world logic rather than just reading theory.',
    },
    {
      icon: Cpu,
      title: 'Early AI & GenAI Exploration',
      description:
        'Experimenting with foundational AI concepts, prompt engineering, and modern AI developer workflows with an eagerness to understand how intelligence is engineered.',
    },
    {
      icon: Target,
      title: 'Problem-Solving Mindset',
      description:
        'Actively participating in ideathons and hackathon sprints to deconstruct community or campus challenges into approachable computational workflows.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A transparent look at where I am today, what drives my curiosity, and how I approach my development journey.
          </p>
        </div>

        {/* Core Statement Box */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs mb-12">
          <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            &ldquo;{STUDENT_PROFILE.aboutMeText}&rdquo;
          </blockquote>

          <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Status:</span>
              <span>First-Semester Undergraduate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Primary Objective:</span>
              <span>Long-Term AI Engineering Career</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Mindset:</span>
              <span>Curious · Hands-on · Receptive to Mentorship</span>
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
                className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs hover:border-stone-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-stone-100 flex items-center justify-center text-slate-900 mb-4">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment to Transparency */}
        <div className="mt-8 bg-stone-100/70 border border-stone-200/80 rounded-lg p-4 sm:p-5 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Honest Representation:</strong> I believe in genuine growth over inflated titles. I do not claim years of industry engineering experience; instead, I bring consistent daily practice, curiosity for emerging AI developments, and a strong drive to learn from mentors and collaborative projects.
          </p>
        </div>

      </div>
    </section>
  );
}
