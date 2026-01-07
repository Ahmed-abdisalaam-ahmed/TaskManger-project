import React from 'react'
import { motion } from "motion/react"
import { FiAlertTriangle } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-xl"
      >
        <FiAlertTriangle className="h-12 w-12 text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-center text-gray-500 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button  className='cursor-pointer shadow-lg rounded-lg px-2 py-4 bg-gray-200 hover:bg-red-500 transition-all '  onClick={() => (window.location.href = "/")}>Go Home</button>
      </motion.div>
    </div>
  )
}

export default NotFound