import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const ChartTasks = ({ tasks }) => {

  const data = [
    {
      name: "To Do",
      count: tasks.filter((t) => t.status === "todo").length,
      color: "#f87171", // Red
    },
    {
      name: "In Progress",
      count: tasks.filter((t) => t.status === "in_progress").length,
      color: "#60a5fa", // Blue
    },
    {
      name: "Completed",
      count: tasks.filter((t) => t.status === "completed").length,
      color: "#34d399", // Green
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-3 shadow-xl rounded-xl border border-slate-100 dark:border-slate-700">
          <p className="text-xs font-black uppercase text-slate-400">{payload[0].payload.name}</p>
          <p className="text-lg font-bold dark:text-white">{payload[0].value} Tasks</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          {/* Subtle Grid Lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
            dy={10}
          />
          
          <YAxis hide domain={[0, 'dataMax + 2']} />
          
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

          <Bar 
            dataKey="count" 
            radius={[10, 10, 10, 10]} 
            barSize={50}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTasks;