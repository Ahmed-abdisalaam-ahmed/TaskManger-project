import { Bot, CalendarCheck, LayoutDashboard, ListChecks } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="min-w-full ">
      <nav className="flex flex-col justify-between gap-8">
        {/* lists */}
        <div className="space-y-4">
          <h2 className="font-bold text-slate-900 dark:text-slate-100 px-4 text-xs font-semibold tracking-tight text-muted-foreground uppercase ">
            OverView
          </h2>
          <Link
            className="group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-primary/10 text-primary hover:bg-primary/20"
            to="/dashboard"
          >
            <div class="flex items-center justify-center w-6 h-6 transition-colors text-primary">
              <LayoutDashboard />
            </div>
            <span>Dashboard</span>
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-slate-900 dark:text-slate-100 px-4 text-xs font-semibold tracking-tight text-muted-foreground uppercase">
            Tasks
          </h2>
          <Link
            className="group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-primary/10 text-primary hover:bg-primary/20"
            to="/dashboard/tasks"
          >
            <div class="flex items-center justify-center w-6 h-6 transition-colors text-primary">
              <CalendarCheck />
            </div>
            <span>Tasks</span>
          </Link>
          <Link
            className="group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-primary/10 text-primary hover:bg-primary/20"
            to="/dashboard/taskList"
          >
            <div class="flex items-center justify-center w-6 h-6 transition-colors text-primary">
              <ListChecks />
            </div>
            <span>Task Lists</span>
          </Link>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-slate-900 dark:text-slate-100 px-4 text-xs font-semibold tracking-tight text-muted-foreground uppercase">
            Ai Assistant
          </h2>
          <Link
            className="group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-primary/10 text-primary hover:bg-primary/20"
            to="/dashboard/aiBots"
          >
            <div class="flex items-center justify-center w-6 h-6 transition-colors text-primary">
              <Bot />
            </div>
            <span>Ai Assistant</span>
          </Link>
        </div>
      </nav>

      <div className="fixed bottom-0">
        heloo
      </div>

      
    </div>
  );
};

export default SideBar;
