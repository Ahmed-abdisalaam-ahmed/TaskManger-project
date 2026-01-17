import React from 'react'
import Header from "./components/Header"
import { Outlet } from "react-router"
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App