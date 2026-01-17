import { LucideGraduationCap, ListTodo, Activity, CheckCircle2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabase"; // Hubi halka uu jiro supabase client-gaaga

const Overview = () => {
  const [stats, setStats] = useState({ total: 0, progress: 0, done: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase.from("tasks").select("status");
      
      if (data) {
        setStats({
          total: data.length,
          progress: data.filter((t) => t.status === "in_progress").length,
          done: data.filter((t) => t.status === "completed").length,
        });
      }
    };

    fetchStats();

    // Real-time update: Haddii database-ku is beddelo, nambaradu ha is beddeleen
    const channel = supabase
      .channel("stats-sync")
      .on("postgres_changes", { event: "*", schema: "public", table: "tasks" }, () => {
        fetchStats();
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tasks */}
        <div className="bg-slate-900 dark:bg-white border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Total Tasks</p>
            <ListTodo className="text-blue-500" size={20} />
          </div>
          <h2 className="text-3xl font-bold text-white dark:text-slate-900">{stats.total}</h2>
        </div>

        {/* In Progress */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">In Progress</p>
            <Activity className="text-amber-500" size={20} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{stats.progress}</h2>
        </div>

        {/* Completed */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Completed</p>
            <CheckCircle2 className="text-green-500" size={20} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{stats.done}</h2>
        </div>

        {/* Achievement/Learning Card */}
        <div className="p-5 rounded-2xl transition-all duration-200 border border-gray-200 dark:border-gray-800 bg-blue-600 flex flex-col justify-between h-32">
           <div className="flex items-start justify-between">
             <p className="text-sm font-medium text-white/80">Goal Reach</p>
             <div className="p-2 rounded-lg bg-white/20 text-white">
               <LucideGraduationCap size={20} />
             </div>
           </div>
           <h2 className="text-white text-xl font-bold">SwiftTask AI</h2>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 min-h-[400px] border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Activity Overview</h3>
        <p className="text-slate-500 text-sm italic">Halkan waxaa ka muuqan doona shaxanka (Charts) ama shaqooyinka ugu dambeeyay...</p>
      </div>
    </div>
  );
};

export default Overview;