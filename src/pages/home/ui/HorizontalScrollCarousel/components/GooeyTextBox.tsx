import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

export const GooeyTextBox = ({ children, index = 0 }: { children: React.ReactNode, index?: number }) => {
  // Use useMemo to ensure the pseudo-random values are stable per-card
  const blobs = useMemo(() => {
    // Generate pseudo-random deterministic variations based on the card's index
    const v1 = (index * 7.13) % 1
    const v2 = (index * 13.7) % 1
    const v3 = (index * 3.14) % 1
    const v4 = (index * 5.91) % 1
    const v5 = (index * 11.3) % 1

    // Blob 1: Randomly placed along the top edge
    const blob1X = v1 * 90 // 0 to 90%
    // Blob 2: Randomly placed along the bottom edge
    const blob2X = v2 * 90
    // Blob 3: Randomly placed along the left or right edge
    const blob3Y = v3 * 80
    const isLeft = v4 > 0.5

    return [
      {
        id: 1,
        style: { top: -20, left: `${blob1X}%`, width: 60 + v2*40, height: 60 + v2*40 },
        animate: { x: [-10, 15, -10], y: [-5, 10, -5] },
        duration: 4 + v1*2,
        delay: v3
      },
      {
        id: 2,
        style: { bottom: -25, left: `${blob2X}%`, width: 70 + v3*50, height: 70 + v3*50 },
        animate: { x: [10, -20, 10], y: [10, -5, 10] },
        duration: 5 + v2*3,
        delay: v1*2
      },
      {
        id: 3,
        style: { top: `${blob3Y}%`, [isLeft ? 'left' : 'right']: -20, width: 50 + v4*30, height: 50 + v4*30 },
        animate: { x: [isLeft ? -15 : 15, 0, isLeft ? -15 : 15], y: [-10, 15, -10] },
        duration: 3.5 + v5*2,
        delay: v2
      }
    ]
  }, [index])

  return (
    <div className="relative p-6 md:p-10 w-full max-w-4xl">
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={`goo-${index}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ filter: `url(#goo-${index})` }}>
        <div className="absolute inset-2 bg-background/80 dark:bg-black/60 rounded-3xl" />
        
        {blobs.map((blob) => (
          <motion.div 
            key={blob.id}
            animate={blob.animate} 
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut", delay: blob.delay }} 
            className="absolute bg-background/80 dark:bg-black/60 rounded-full" 
            style={blob.style}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
