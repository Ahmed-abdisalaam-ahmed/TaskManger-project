import { LucideGraduationCap } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom"; // Ensure this is 'react-router-dom'

const Overview = () => {
  return (
    <div className="w-full space-y-6 ">
      <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 min-h-[400px] border border-gray-200 dark:border-gray-800"></div>
      {/* Statistics/Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 dark:bg-gray-50 border border-gray-200 dark:border-gray-800 rounded-xl h-32 flex items-center justify-center text-white  dark:text-slate-900 font-bold shadow-lg">
          Total Tasks
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-800 rounded-xl h-32 flex items-center justify-center text-slate-900 dark:text-white font-bold shadow-lg">
          In Progress
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-800 rounded-xl h-32 flex items-center justify-center text-slate-900 dark:text-white font-bold shadow-lg">
          Completed
        </div>
        <div class="p-5 rounded-lg transition-all duration-200 border bg-primary text-white border-primary">
          <div class="flex items-start justify-between">
            <div class="space-y-2">
              <p class="text-sm font-medium text-white/80"></p>
            </div>
            <div class="p-2.5 rounded-lg bg-white/20">
               <LucideGraduationCap />
            </div>
          </div>
        </div>
      </div>

      {/* This is where your nested routes (Tasks, TaskList, etc.) will render */}
      <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 min-h-[400px] border border-gray-200 dark:border-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default Overview;
