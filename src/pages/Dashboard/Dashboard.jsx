import React, { useState } from 'react'
import SideBar from './SideBar'
import { Menu, X } from 'lucide-react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      
      {/* Mobile Toggle Button */}
      <div className="sm:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex relative">
        {/* Desktop Sidebar */}
        <div className="hidden sm:block min-h-screen p-4 w-64 border-r bg-white dark:bg-slate-900 py-6">
          <SideBar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 z-50 p-6 shadow-2xl sm:hidden">
               <div className="mb-8">
                  <h1 className="text-xl font-bold">SwiftTask</h1>
               </div>
               <SideBar closeMenu={() => setSidebarOpen(false)} />
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h1 className='font-bold text-2xl px-2'>Welcome to Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard