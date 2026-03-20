import { ArrowLeft, ArrowRight, Construction } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useNavigate } from "react-router";

const ComingSoonModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-99 backdrop-blur-md bg-white/30 dark:bg-slate-900/30 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 text-center max-w-sm">
        {/* Icon yar oo animation leh */}
        <motion.div
            initial={{rotate: [0, -10, 10 ,0]}}
            transition={{repeat: Infinity, duration: 2}}
            className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="text-blue-500" size={40}/>
        </motion.div>

        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
          Under Construction
          
        </h2>

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          We are currently hand-crafting this experience to make it perfect for you. This journey will be available very soon! 🚀
        </p>

        <button
          onClick={()=> navigate(-1)} 
          className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/30 cursor-pointer transition-all active:scale-95"
        > 
          <ArrowLeft />
          Go Back
        </button>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">SwiftTask AI • Version 2.0 Coming Soon</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;
