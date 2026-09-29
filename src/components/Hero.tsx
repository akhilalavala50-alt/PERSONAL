import { useState } from 'react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal, Play, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export function Hero() {
  const [activeSnippet, setActiveSnippet] = useState<'voter' | 'atm' | 'calc'>('voter');
  const [isRunning, setIsRunning] = useState(false);
  const [outputLog, setOutputLog] = useState<string | null>(null);

  const snippets = {
    voter: {
      name: 'voter_checker.py',
      code: `age = int(input("Enter age: "))
citizen = True

if age >= 18 and citizen:
    print("Eligible to cast vote")
else:
    print("Underage or not registered")`,
      output: `[SIMULATION RUN: voter_checker.py]
> Enter age: 19
> Citizen registered: True
[VERIFIED] Eligible to cast vote. Voting booth: Ward-04`,
    },
    atm: {
      name: 'atm_management.py',
      code: `balance = 5000.00
def withdraw(amount):
    global balance
    if amount <= balance:
        balance -= amount
        return f"Withdrawn: ${'$'}{amount}"
    return "Error: Insufficient Funds"`,
      output: `[SIMULATION RUN: atm_management.py]
> Authenticating PIN: **** (Success)
> Balance Check: $5000.00
> Request Withdraw: $1200.00
[APPROVED] Dispensed: $1200.00 | New Balance: $3800.00`,
    },
    calc: {
      name: 'grade_calculator.py',
      code: `marks = [88, 92, 79, 85]
avg = sum(marks) / len(marks)
grade = 'A' if avg >= 85 else 'B'
print(f"Average: {avg:.1f}%, Grade: {grade}")`,
      output: `[SIMULATION RUN: grade_calculator.py]
> Processing 4 subjects: [88, 92, 79, 85]
> Sum: 344 | Mean: 86.0%
[COMPUTED] Letter Grade: 'A' (First-Class Distinction)`,
    },
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutputLog(null);
    setTimeout(() => {
      setOutputLog(snippets[activeSnippet].output);
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="home" className="relative pt-20 pb-20 sm:pt-28 sm:pb-32 border-b border-slate-800/80 overflow-hidden">
      {/* Background Heroic Gradients & Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="uppercase tracking-widest text-[11px] font-mono text-blue-400">
                {STUDENT_PROFILE.currentStatus}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal">{STUDENT_PROFILE.currentLevel}</span>
            </div>

            {/* Imposing Heroic Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] text-balance">
              {STUDENT_PROFILE.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-slate-200 leading-snug text-balance">
              {STUDENT_PROFILE.subtitle}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {STUDENT_PROFILE.heroSupportingText}
            </p>

            {/* Two Required CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={STUDENT_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700 rounded-md hover:bg-slate-800 hover:text-white transition-all shadow-md"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Quiet Real-World Indicators */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Active Daily Code Practice
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                100% Genuine Student Work
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                AI Engineering Focus
              </span>
            </div>
          </div>

          {/* Heroic Interactive Command Console (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e1422] border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
              
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400 ml-2">
                    akhil@learning-station:~/projects
                  </span>
                </div>
                <div className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/50">
                  Python 3.12
                </div>
              </div>

              {/* Tab Selector for Real Project Code */}
              <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => { setActiveSnippet('voter'); setOutputLog(null); }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeSnippet === 'voter'
                      ? 'bg-slate-800 text-blue-300 font-semibold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  voter_checker.py
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSnippet('atm'); setOutputLog(null); }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeSnippet === 'atm'
                      ? 'bg-slate-800 text-blue-300 font-semibold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  atm_system.py
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSnippet('calc'); setOutputLog(null); }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeSnippet === 'calc'
                      ? 'bg-slate-800 text-blue-300 font-semibold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  grades.py
                </button>
              </div>

              {/* Code Display Area */}
              <div className="p-4 bg-[#0a0e17] font-mono text-xs text-slate-300 overflow-x-auto min-h-[140px]">
                <pre className="text-slate-300 whitespace-pre leading-relaxed">
                  {snippets[activeSnippet].code}
                </pre>
              </div>

              {/* Simulation Output Area */}
              {outputLog && (
                <div className="p-3.5 bg-slate-950 border-t border-slate-800/80 font-mono text-xs text-emerald-400 whitespace-pre-wrap animate-in fade-in">
                  {outputLog}
                </div>
              )}

              {/* Terminal Action Bar */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  {snippets[activeSnippet].name}
                </span>

                <button
                  type="button"
                  disabled={isRunning}
                  onClick={handleRun}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded transition-colors font-mono"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunning ? 'Running...' : 'Execute Script'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Heroic Milestone & Trajectory Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-lg">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">06</div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-1">Practical Projects</div>
            <p className="text-xs text-slate-400 mt-1">Python, CLI systems, media & gaming</p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-lg">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">10</div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">Core Tech Focuses</div>
            <p className="text-xs text-slate-400 mt-1">Python, Web, GenAI, and Problem Solving</p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-lg">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">05</div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mt-1">Hackathon Disciplines</div>
            <p className="text-xs text-slate-400 mt-1">Prototyping, ideation, & team sprints</p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-lg">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">Sem 01</div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mt-1">Undergraduate Journey</div>
            <p className="text-xs text-slate-400 mt-1">Early-stage aspiring AI Engineer</p>
          </div>
        </div>

      </div>
    </section>
  );
}
