import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import React from 'react'

const FeaturesSection = () => {
      const features = [
    {
      id: 0,
      icon: <Zap className="text-amber-500" />,
      title: "Always in Sync",
      desc: "Start on your laptop, finish on your phone. Your life doesn't stop, and neither do we.",
    },
    {
      id: 1,
      icon: <CheckCircle className="text-green-500" />,
      title: "Feel the Progress",
      desc: "Drag, drop, and celebrate. Moving tasks through your workflow feels as good as it looks.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="text-blue-500" />,
      title: "Your Data, Your Business",
      desc: "We use bank-grade security to ensure your notes and plans stay for your eyes only.",
    },
  ];
  return (
          <section className="py-20 px-6 dark:bg-slate-900/30 bg-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built for the way you actually work
            </h2>
            <p className="dark:text-slate-400 ">
              Simple tools that stay out of your way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="p-8 rounded-3xl border dark:border-slate-800 dark:bg-slate-900/50  dark:hover:bg-slate-900 hover:bg-slate-800 hover:text-slate-500 transition-all group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="dark:text-slate-500 text-slate-700 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturesSection