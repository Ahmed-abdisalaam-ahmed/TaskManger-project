import React from 'react'
import Overview from './Overview'
import SideBar from './SideBar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="flex">
        {/* Sidebar - Fixed width or custom flex ratio */}
        <div className="hidden sm:block min-h-screen p-4 w-64 border-r bg-white dark:bg-slate-900 rounded-lg py-6">
          <SideBar/>
        </div>

        {/* Main Content - Takes up remaining space */}
        <div className="flex-1 p-4">
          <h1 className='font-bold text-2xl px-2'>Overview</h1>
          <Overview />
        </div>
      </div>
    </div>
  )
}

export default Dashboard