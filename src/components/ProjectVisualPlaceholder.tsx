import React from 'react';
import { Vote, Calculator, Landmark, Film, Gamepad2, GraduationCap } from 'lucide-react';

interface VisualProps {
  projectId: string;
  title: string;
}

export const ProjectVisualPlaceholder: React.FC<VisualProps> = ({ projectId, title }) => {
  switch (projectId) {
    case 'voter-eligibility-checker':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Vote className="w-4 h-4 text-blue-400" />
              voter_checker.py
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800">
              Python CLI
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-1 shadow-inner">
            <div className="text-slate-500"># Evaluates prerequisites</div>
            <div>
              <span className="text-pink-400">if</span> age &gt;= <span className="text-amber-300">18</span> <span className="text-pink-400">and</span> registered:
            </div>
            <div className="pl-4 text-emerald-400">&gt; Status: Eligible to Vote</div>
          </div>
        </div>
      );

    case 'calculator':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Calculator className="w-4 h-4 text-blue-400" />
              arithmetic_calc.py
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800">
              Modular Functions
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-1 shadow-inner">
            <div className="text-slate-500"># Defensive error handling</div>
            <div>
              <span className="text-pink-400">def</span> <span className="text-blue-400">divide</span>(a, b):
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-pink-400">return</span> a / b <span className="text-pink-400">if</span> b != <span className="text-amber-300">0</span> <span className="text-pink-400">else</span> <span className="text-amber-300">&quot;Err: ZeroDiv&quot;</span>
            </div>
          </div>
        </div>
      );

    case 'atm-management-system':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Landmark className="w-4 h-4 text-blue-400" />
              atm_system.py
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800">
              Transaction State
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-1 shadow-inner">
            <div className="text-slate-500"># State machine transaction loop</div>
            <div className="flex justify-between text-slate-300">
              <span>[1] Balance</span>
              <span>[2] Deposit</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>[3] Withdraw Cash</span>
              <span>[4] Exit</span>
            </div>
          </div>
        </div>
      );

    case 'editing-projects':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-sans select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Film className="w-4 h-4 text-blue-400" />
              media_timeline_v1
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800 font-mono">
              Creative Suite
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-2 shadow-inner">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Video / Audio Multi-Track Pacing</span>
              <span className="text-emerald-400">24 FPS</span>
            </div>
            <div className="grid grid-cols-6 gap-1 h-4">
              <div className="bg-blue-600 rounded-xs"></div>
              <div className="bg-blue-500 rounded-xs"></div>
              <div className="bg-indigo-500 rounded-xs"></div>
              <div className="bg-slate-700 rounded-xs"></div>
              <div className="bg-blue-400 rounded-xs"></div>
              <div className="bg-blue-700 rounded-xs"></div>
            </div>
          </div>
        </div>
      );

    case 'gaming-projects':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Gamepad2 className="w-4 h-4 text-blue-400" />
              interactive_loop.py
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800">
              Game Engine
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-1 shadow-inner">
            <div className="text-slate-500"># Vector coordinate & collision cycle</div>
            <div className="text-slate-300">
              <span className="text-pink-400">while</span> running: check_keys() · update_pos()
            </div>
            <div className="text-emerald-400 text-[10px]">&gt; Player Pos: (x: 120, y: 84) · Score: 450</div>
          </div>
        </div>
      );

    case 'student-grade-calculator':
      return (
        <div className="w-full h-44 bg-[#0a0e17] border-b border-slate-800 p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              grade_evaluator.py
            </span>
            <span className="text-[11px] bg-slate-900 text-blue-300 px-2 py-0.5 rounded border border-slate-800">
              Grade Logic
            </span>
          </div>
          <div className="bg-[#060910] text-slate-200 p-3 rounded-lg border border-slate-900 text-[11px] space-y-1 shadow-inner">
            <div className="text-slate-500"># Multi-condition grade evaluator</div>
            <div className="text-slate-300">
              Marks: [88, 92, 79, 85] · Average: <span className="text-amber-300">86.0%</span>
            </div>
            <div className="text-emerald-400 text-[10px]">&gt; Status: Grade &apos;A&apos; (Distinction Standing)</div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-center text-slate-400 text-xs font-mono">
          {title} Project Preview
        </div>
      );
  }
};
