import { motion } from 'framer-motion'
import React from 'react'

export const GooeyTextBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative p-6 md:p-10 w-full max-w-4xl">
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ filter: 'url(#goo)' }}>
        <div className="absolute inset-2 bg-background/80 dark:bg-black/60 rounded-3xl" />
        <motion.div animate={{ x: [-10, 10, -10], y: [-10, 20, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -left-4 w-20 h-20 bg-background/80 dark:bg-black/60 rounded-full" />
        <motion.div animate={{ x: [10, -20, 10], y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-6 right-12 w-24 h-24 bg-background/80 dark:bg-black/60 rounded-full" />
        <motion.div animate={{ x: [0, 15, 0], y: [-15, 0, -15] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-1/2 -right-4 w-16 h-16 bg-background/80 dark:bg-black/60 rounded-full" />
      </div>
      <div className="relative z-10 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
