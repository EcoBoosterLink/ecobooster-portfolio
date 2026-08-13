import { motion } from 'framer-motion'
import { PROJECTS } from '../../../../constants/projects'

interface PortfolioCardProps {
  project: typeof PROJECTS[0]
  index: number
  gridClass: string
}

export function PortfolioCard({ project, index, gridClass }: PortfolioCardProps) {
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </div>
      </div>
    </motion.div>
  )
}
