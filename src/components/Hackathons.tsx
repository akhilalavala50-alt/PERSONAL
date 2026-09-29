import { HACKATHON_ACTIVITIES } from '../data/portfolioData';
import { Rocket, Users, Lightbulb, Compass, GraduationCap } from 'lucide-react';

export function Hackathons() {
  const getActionIcon = (actionWord: string) => {
    switch (actionWord) {
      case 'Building':
        return <Rocket className="w-4 h-4 text-blue-700" />;
      case 'Participating':
        return <Users className="w-4 h-4 text-emerald-700" />;
      case 'Exploring':
        return <Lightbulb className="w-4 h-4 text-amber-700" />;
      case 'Experimenting':
        return <Compass className="w-4 h-4 text-purple-700" />;
      case 'Learning':
        return <GraduationCap className="w-4 h-4 text-indigo-700" />;
      default:
        return <Lightbulb className="w-4 h-4 text-slate-700" />;
    }
  };

  return (
    <section id="hackathons" className="py-20 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
            04. Collaborative & Competitive Learning
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Hackathons & Ideathons
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Participating in early-stage hackathons, campus ideathons, and problem-solving sprints to experience rapid prototype building and collaborative development.
          </p>
        </div>

        {/* Narrative Banner - Honest student framing */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-xs mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span>Early-Stage Experience</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="text-blue-700">Sprint Mindset</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Why I Value Hackathons & Ideathons in Semester 1
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than treating competitions as mere trophy hunts, I use hackathons and ideathons as high-intensity learning labs. They push me to think critically under deadlines, synthesize Python logic into working prototypes, and learn how real teams coordinate using Git and communication.
              </p>
            </div>

            <div className="md:col-span-4 bg-stone-50 border border-stone-200/80 rounded-lg p-4 text-xs space-y-2">
              <div className="font-semibold text-slate-800">Key Focus Areas:</div>
              <div className="text-slate-600 space-y-1">
                <div>• Rapid MVP Prototyping</div>
                <div>• Campus & Community Problem Ideation</div>
                <div>• Team Git Collaboration</div>
                <div>• Tech Challenge Brainstorming</div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Cards using exact required action words */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HACKATHON_ACTIVITIES.map((activity) => (
            <div
              key={activity.title}
              className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header with Action Word */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-2 border-b border-stone-100">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    {getActionIcon(activity.actionWord)}
                    <span>{activity.actionWord}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{activity.focus}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {activity.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {activity.description}
                </p>
              </div>

              {/* Takeaway footer */}
              <div className="pt-3 border-t border-stone-100 bg-stone-50 -mx-5 -mb-5 p-4 rounded-b-lg">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Key Takeaway
                </span>
                <p className="text-xs text-slate-700 italic">
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
