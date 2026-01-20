import { Coffee } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const FinalCall = () => {
  return (
    <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-linear-to-b from-blue-600 to-blue-800 text-white">
          <Coffee className="mx-auto mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-4">Ready to clear your mind?</h2>
          <p className="mb-8 opacity-90 text-lg">Join thousands of others who are getting more done with less stress.</p>
          <Link to="/dashboard" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
            Let's get started
          </Link>
        </div>
      </section>
  )
}

export default FinalCall