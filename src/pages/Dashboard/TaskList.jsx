import React, { useEffect, useState } from "react";
import { Search, Filter, Trash2, CheckCircle, Clock } from "lucide-react";
import toast from "react-hot-toast";
import supabase from "../../lib/supabase";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) toast.error("Error loading tasks");
    else setTasks(data);
    setLoading(false);
  };

  // --- FILTER LOGIC ---
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          task.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border-none bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={18} className="text-slate-400" />
          <select 
            className="bg-white dark:bg-slate-800 border-none rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white shadow-sm cursor-pointer"
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Task List Rendering */}
      <div className="grid gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                   <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">{task.title}</h3>
                  <p className="text-sm text-slate-500">{task.due_date || "No deadline"}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-lg ${
                  task.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30' : 
                  task.priority === 'medium' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' : 
                  'bg-green-100 text-green-600 dark:bg-green-900/30'
                }`}>
                  {task.priority}
                </span>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-slate-400 hover:text-green-500">
                      <CheckCircle size={18} />
                   </button>
                   <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-400 hover:text-red-500">
                      <Trash2 size={18} />
                   </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 italic">No tasks match your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;