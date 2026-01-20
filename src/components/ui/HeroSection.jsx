import { Sparkles } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Sparkles size={16} />
            Your new productivity sidekick is here
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Focus on what matters, leave the{" "}
            <span className="text-blue-500">busywork</span> to us.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            SwiftTask isn't just a list—it's your space to breathe. Organize
            your day, track your progress, and let our AI handle the mental
            heavy lifting.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
            >
              Start for free
            </Link>
          </div>
        </div>
      </section>
  )
}

export default HeroSection