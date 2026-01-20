import React, {
  useEffect,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import {
  Search,
  Filter,
  Trash2,
  CheckCircle,
  Clock,
  Edit,
  ChartBarBig,
  Loader,
  Loader2,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";
import supabase from "../../lib/supabase";
import { Link, useNavigate, useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { DeleteTasks, UpdateTaskStatus } from "../../lib/Tasks";
import { motion } from "motion/react"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("status");
  const [filterDate, setFilterDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [tasksToDelete, setTasksToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [optimisticTasks, updateOptimisticTasks] = useOptimistic(
    tasks,
    (state, taskId) => state.filter((tasks) => tasks.id !== taskId),
  );

  const HandleReset = () => {
    setFilterStatus("status")
    setFilterPriority("all")
    setFilterDate("")
    setSearchTerm("")
  };

  const confrimDelete = (tasks) => {
    setTasksToDelete(tasks);
  };

  const HandleDelete = async () => {
    if (!tasksToDelete) return;

    try {
      setIsDeleting(true);
      console.log("Starting deletion process ");

      // wrap the optimistic update in a transition
      startTransition(() => updateOptimisticTasks(tasksToDelete.id));

      const result = await DeleteTasks(tasksToDelete.id);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== tasksToDelete.id),
      );

      setTasksToDelete(null);
    } catch (error) {
      console.error("Error fetching Tasks:", error);
      setError("Failed to load your Tasks. Please try again.");
      toast.error("Failed to load your Tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
       fetchTasks();
      const channel = supabase
        .channel("realtime-task-updates")
        .on("postgres_changes", {
            event: "*", 
            schema: "public",
            table: "tasks" ,
          },

    payload => {
      console.log("update event recevied: ",payload)
      fetchTasks();
    }).subscribe();

      return () => {
        console.log("Clean up channel subsciption");
        supabase.removeChannel(channel) 
      }
    } else {
      navigate("/login");
    }
  }, [user?.id]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) toast.error("Error loading tasks");
    else setTasks(data);
    setLoading(false);
  };

  // filter logic
  const filteredTasks = optimisticTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority =
      filterPriority === "all" || task.priority === filterPriority;

    const matchesStatus =
      filterStatus === "status" || task.status === filterStatus;

    const matchesDate = !filterDate || task.due_date?.includes(filterDate);

    return matchesSearch && matchesPriority && matchesDate && matchesStatus;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border-none bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={18} className="text-slate-400" />
          <select
            className="bg-white dark:bg-slate-800 border-none rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white shadow-sm cursor-pointer"
            onChange={(e) => setFilterPriority(e.target.value)}
            value={filterPriority}
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Filter bu status */}
        <div className="flex flex-wrap gap-2 items-center">
          <ChartBarBig size={18} className="text-slate-400" />
          <select
            className="bg-white dark:bg-slate-800 rounded-xl px-4 py-2 outline-none shadow-sm"
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus}
          >
            <option value="status">All status</option>
            <option value="todo">Not Started</option>
            <option value="in_progress">in-progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {/* Search by date */}
        <input
          type="date"
          className="bg-white dark:bg-slate-800 rounded-xl px-4 py-2 shadow-sm md:w-auto"
          onChange={(e) => setFilterDate(e.target.value)}
          value={filterDate}
        />
        <motion.button
          whileHover={{ rotate: -60 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 p-2 cursor-pointer"
          onClick={HandleReset}
        >
          <RotateCcw />
        </motion.button>
      </div>

      {/* Task List Rendering */}
      <div className="grid gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {task.due_date || "No deadline"}
                  </p>
                </div>
              </div>
                
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                {/* STATUS TRAVEL DROPDOWN (NEW) */}
                <div className="relative">
                  <select
                    value={task.status}
                    onChange={async (e) => {
                      const newStatus = e.target.value;
                      await UpdateTaskStatus(task.id, newStatus);
                      toast.success(`Journey updated to ${newStatus}! ✨`);
                    }}
                    className={`appearance-none pl-4 pr-10 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all border-none outline-none cursor-pointer ${
                      task.status === "completed" ? "bg-emerald-500/10 text-emerald-600" :
                      task.status === "in_progress" ? "bg-blue-500/10 text-blue-600" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    <option value="todo">Not Started</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Achieved</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                </div>
              </div>



              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <span
                  className={`text-[10px] font-bold uppercase px-3 py-1 rounded-lg ${
                    task.priority === "high"
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                      : task.priority === "medium"
                        ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                        : "bg-green-100 text-green-600 dark:bg-green-900/30"
                  }`}
                >
                  {task.priority}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase px-3 py-1 rounded-lg ${
                    task.status === "todo"
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                      : task.status === "in_progress"
                        ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                        : "bg-green-100 text-green-600 dark:bg-green-900/30"
                  }`}
                >
                  {task.status}
                </span>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link className="p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-slate-400 hover:text-green-500">
                    <CheckCircle size={18} />
                  </Link>
                  <Link
                    to={`/dashboard/editorTasks/${task.id}`}
                    className="p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-slate-400 hover:text-orange-500"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => confrimDelete(task)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 italic">
              No tasks match your search or filter.
            </p>
          </div>
        )}
      </div>
      {/* // Modal Delet confrim */}
      {tasksToDelete && (
        <div className="fixed z-999inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "
              {tasksToDelete.title || "Untitled Article"}"? This action cannot
              be undone.
            </p>
            <div className="flex justify-center space-x-3 mt-2">
              <button
                // onClick={cancelDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>

              <button
                onClick={HandleDelete}
                // disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="mr-2" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
