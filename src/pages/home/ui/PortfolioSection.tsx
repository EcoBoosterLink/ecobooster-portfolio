import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'Fintech NeoBank',
    category: 'Application Mobile',
    image: 'https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=2000&auto=format&fit=crop',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'Plateforme E-commerce',
    category: 'Développement Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 3,
    title: 'Dashboard Analytique',
    category: 'SaaS / B2B',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 4,
    title: 'Marque Premium',
    category: 'Stratégie Marketing',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop',
    color: 'from-zinc-500/20 to-neutral-500/20'
  }
]

// Different layout configurations for the 4 projects
// Each array represents the column span (out of 12) for each project in order
const LAYOUT_STATES = [
  ["md:col-span-8", "md:col-span-4", "md:col-span-4", "md:col-span-8"], // Layout 1: Asymmetrical
  ["md:col-span-4", "md:col-span-8", "md:col-span-8", "md:col-span-4"], // Layout 2: Inverted asymmetrical
  ["md:col-span-6", "md:col-span-6", "md:col-span-6", "md:col-span-6"], // Layout 3: Equal grid
]

export function PortfolioSection() {
  const [layoutIndex, setLayoutIndex] = useState(0)

  // Cycle through layout states every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLayoutIndex((prev) => (prev + 1) % LAYOUT_STATES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentLayout = LAYOUT_STATES[layoutIndex]

  return (
    <section className="w-full py-32 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-screen-2xl px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nos Réalisations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Découvrez une sélection de projets qui repoussent les limites de l'expérience numérique.
        </p>
      </div>

      <div className="w-full max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px] md:auto-rows-[500px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              gridClass={currentLayout[index]} 
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
      className={`relative w-full h-full rounded-[2.5rem] overflow-hidden group cursor-pointer ${gridClass}`}
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

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-10">
        <motion.div 
          layout
          transition={{ layout: { type: "spring", stiffness: 60, damping: 15 } }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex flex-col gap-3"
        >
          <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-white/70 backdrop-blur-sm border border-white/10 bg-white/10 px-4 py-2 rounded-full w-fit">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
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
