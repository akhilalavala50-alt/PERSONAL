import { HACKATHON_ACTIVITIES } from '../data/portfolioData';
import { Rocket, Users, Lightbulb, Compass, GraduationCap, Zap } from 'lucide-react';

export function Hackathons() {
  const getActionIcon = (actionWord: string) => {
    switch (actionWord) {
      case 'Building':
        return <Rocket className="w-4 h-4 text-blue-400" />;
      case 'Participating':
        return <Users className="w-4 h-4 text-emerald-400" />;
      case 'Exploring':
        return <Lightbulb className="w-4 h-4 text-amber-400" />;
      case 'Experimenting':
        return <Compass className="w-4 h-4 text-purple-400" />;
      case 'Learning':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      default:
        return <Lightbulb className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="hackathons" className="py-24 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>04. Innovation Sprints</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            Hackathons & Ideathons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            High-velocity learning arenas where team coordination, rapid MVP delivery, and algorithmic problem-solving converge.
          </p>
        </div>

        {/* Narrative Heroic Banner */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Early-Stage Experience</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">Rapid Sprint Philosophy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Why I Treat Hackathons as High-Intensity Engineering Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rather than treating competitions as vanity contests, I use hackathons and ideathons as catalyst sprints. They force me to write clean Python logic under pressure, build real user interfaces, coordinate via Git branches, and transform abstract concepts into tangible working prototypes.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#090d16] border border-slate-800 rounded-lg p-5 text-xs space-y-2.5">
              <div className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
                Sprint Core Disciplines:
              </div>
              <div className="text-slate-400 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Rapid MVP Prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Campus Problem Scoping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>Team Git Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Ideathon Pitch Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Cards using exact required action words */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_ACTIVITIES.map((activity) => (
            <div
              key={activity.title}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Unboxed Metadata Header with Action Word */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    {getActionIcon(activity.actionWord)}
                    <span>{activity.actionWord}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{activity.focus}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {activity.description}
                </p>
              </div>

              {/* Takeaway footer */}
              <div className="pt-3 border-t border-slate-800/80 bg-[#090d16] -mx-6 -mb-6 p-4 rounded-b-xl">
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  Key Takeaway
                </span>
                <p className="text-xs text-slate-300 italic">
                  &ldquo;{activity.takeaway}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
