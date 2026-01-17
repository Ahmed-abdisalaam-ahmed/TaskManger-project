import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Sparkles size={16} /> Now with AI Assistant
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Master Your Workflow with <span className="text-blue-500">SwiftTask</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            The modern way to track tasks, travel through your timeline, and get things done with the help of AI.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/dashboard" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-amber-500" />, title: "Real-time Sync", desc: "Your tasks update instantly across all your devices." },
            { icon: <CheckCircle className="text-green-500" />, title: "Status Travel", desc: "Move tasks from 'To Do' to 'Completed' with a simple dropdown." },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Secure Data", desc: "Powered by Supabase to keep your information safe and private." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;