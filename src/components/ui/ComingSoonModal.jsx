import { ArrowLeft, Construction } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { useNavigate } from 'react-router'

const ComingSoonModal = () => {
  const navigate = useNavigate()
  return (
    <div className='fixed z-999 inset-0 backdrop-blur-md bg-white/30 dark:bg-slate-900/30 flex items-center justify-center p-6 overflow-hidden '>
      <div className=''>

      </div>
      <motion.div
        initial={{rotate: [0, -10, 10, 0]}}
        transition={{repeat: Infinity , duration: 2}}
        className='text-4xl mb-4'>
        <Construction />
      </motion.div>
        <h2 className=''>Under Construction</h2>
        <p>We are currently hand-crafting this experience to make it perfect for you. This journey will be available very soon! 🚀</p>

        <div>
        <button
          className=''
          navigate={-1}
        > <ArrowLeft />
          Take me back
        </button>
        </div>

  </div>
  )
}

export default ComingSoonModal