import {
  Bot,
  CalendarCheck,
  LayoutDashboard,
  ListChecks,
  Settings,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom"; // Fixed 'react-router' to 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";
import { FaUser } from "react-icons/fa";

const SideBar = ({ closeMenu }) => {
  const { profile, user } = useAuth();
  return (
    <div className="min-w-full">
      <nav className="flex flex-col justify-between gap-8">
        {/* Overview Section */}
        <div className="space-y-4">
          <h2 className="px-4 text-xs font-semibold tracking-tight text-slate-500 uppercase">
            Overview
          </h2>
          <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              `group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all 
            ${
              isActive
                ? "bg-blue-50 dark:bg-slate-800 text-green-500 font-bold" // Styles when link is ACTIVE
                : "text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800" // Styles when NOT active
            }`
            }
            to="/dashboard"
          >
            <LayoutDashboard size={20} className="text-blue-500" />
            <span>Dashboard</span>
          </NavLink>
        </div>

        {/* Tasks Section */}
        <div className="space-y-2">
          <h2 className="px-4 text-xs font-semibold tracking-tight text-slate-500 uppercase">
            Tasks
          </h2>
          <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              `group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all 
            ${
              isActive
                ? "bg-blue-50 dark:bg-slate-800 text-green-500 font-bold" // Styles when link is ACTIVE
                : "text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800" // Styles when NOT active
            }`
            }
            to="/dashboard/tasks"
          >
            <CalendarCheck size={20} className="text-blue-500" />
            <span>Tasks</span>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              `group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all 
            ${
              isActive
                ? "bg-blue-50 dark:bg-slate-800 text-green-500 font-bold" // Styles when link is ACTIVE
                : "text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800" // Styles when NOT active
            }`
            }
            to="/dashboard/taskList"
          >
            <ListChecks size={20} className="text-blue-500" />
            <span>Task Lists</span>
          </NavLink>
        </div>

        {/* AI Section */}
        <div className="space-y-2">
          <h2 className="px-4 text-xs font-semibold tracking-tight text-slate-500 uppercase">
            AI Assistant
          </h2>
          <NavLink
            to="/dashboard/aiBots"
            onClick={closeMenu}
            className={({ isActive }) =>
              `group flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all 
            ${
              isActive
                ? "bg-blue-50 dark:bg-slate-800 text-green-500 font-bold" // Styles when link is ACTIVE
                : "text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800" // Styles when NOT active
            }`
            }
          >
            <Bot size={20} className="text-blue-500" />
            <span>AI Assistant</span>
          </NavLink>
        </div>

        <div class="relative z-50 px-2 py-2 mt-auto">
          <div class="relative rounded-lg overflow-hidden">
            <div class="relative p-2">
              <div class="flex items-center gap-3">
                <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border border-border">
                  <span class="flex h-full w-full items-center justify-center rounded-full font-semibold text-xs bg-primary/10 text-primary">
                    <img
                      className="w-8 h-8 rounded-full "
                      src={
                        profile?.avatar_url || (
                          <FaUser className="text-slate-600" />
                        )
                      }
                    />
                  </span>
                </span>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium leading-none truncate">
                    {profile?.username}
                  </p>
                  <p class="text-xs text-muted-foreground mt-1 truncate">
                    {user?.email}
                  </p>
                </div>
                <Link to="/dashboard/settings">
                  <button class="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-8 w-8 hover:bg-accent/50">
                    <Settings />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
