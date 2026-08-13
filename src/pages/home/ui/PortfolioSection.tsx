import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { PROJECTS } from '../../../constants/projects'

function mutateRow(row: number[]) {
  const newRow = [...row]
  // Pick a random adjacent pair in this row (0, 1, or 2 since row length is 4)
  const i = Math.floor(Math.random() * 3)
  const sum = newRow[i] + newRow[i+1]
  
  // Valid bounds: min width 2, max width 10
  const minA = Math.max(2, sum - 10)
  const maxA = Math.min(10, sum - 2)
  
  // If no valid mutation possible, just return
  if (minA > maxA) return newRow
  
  // Pick a new A that is DIFFERENT from the current A
  const possibleA = []
  for (let a = minA; a <= maxA; a++) {
    if (a !== newRow[i]) possibleA.push(a)
  }
  
  if (possibleA.length === 0) return newRow
  
  const pickedA = possibleA[Math.floor(Math.random() * possibleA.length)]
  newRow[i] = pickedA
  newRow[i+1] = sum - pickedA
  
  return newRow
}

export function PortfolioSection() {
  const [rows, setRows] = useState([
    [3, 3, 3, 3], // Row 0
    [3, 3, 3, 3], // Row 1
    [3, 3, 3, 3]  // Row 2
  ])

  // Randomize a localized part of the layout every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prevRows => {
        const newRows = [...prevRows]
        // Pick one random row to mutate so the user isn't overwhelmed
        const rowIndexToMutate = Math.floor(Math.random() * 3)
        newRows[rowIndexToMutate] = mutateRow(newRows[rowIndexToMutate])
        return newRows
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Flatten the rows into an array of 12 col-span classes
  const flatLayout = rows.flatMap(row => row.map(span => `md:col-span-${span}`))

  return (
    <section className="w-full py-32 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-screen-2xl px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nos Réalisations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Découvrez une sélection de projets qui repoussent les limites de l'expérience numérique.
        </p>
      </div>

      <div className="w-full max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-row-dense auto-rows-[250px] md:auto-rows-[300px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              gridClass={flatLayout[index]} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, gridClass }: { project: typeof PROJECTS[0], index: number, gridClass: string }) {

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ layout: { type: "spring", stiffness: 60, damping: 15 }, opacity: { duration: 0.8, delay: index * 0.15 }, scale: { duration: 0.8, delay: index * 0.15 } }}
      className={`relative w-full h-full overflow-hidden group cursor-pointer ${gridClass}`}
    >
      {/* Background Image with Parallax/Scale effect on hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          layout
          transition={{ layout: { type: "spring", stiffness: 60, damping: 15 } }}
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 opacity-80 group-hover:opacity-100`} />
      
      {/* Subtle Color Tint Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-700`} />

      {/* Subtracting Top-Left Category Pill */}
      <div className="absolute top-0 left-0 bg-black px-4 py-2.5 rounded-br-2xl z-20 flex items-center justify-center transition-all duration-500">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-white/70">
          {project.category}
        </span>
        {/* Inverted corner right */}
        <svg className="absolute top-0 left-full w-5 h-5 text-black pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
          <path d="M0,0 L20,0 A20,20 0 0,0 0,20 Z" />
        </svg>
        {/* Inverted corner bottom */}
        <svg className="absolute top-full left-0 w-5 h-5 text-black pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
          <path d="M0,0 L20,0 A20,20 0 0,0 0,20 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10 pointer-events-none">
        <motion.div 
          layout
          transition={{ layout: { type: "spring", stiffness: 60, damping: 15 } }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
        </motion.div>
      </div>

      {/* Hover "Voir le projet" button */}
      <div className="absolute top-8 right-8 z-10 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </motion.div>
  )
}
