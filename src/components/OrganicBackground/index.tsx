import { useRef } from 'react'
import { useOrganicParticles } from './hooks/useOrganicParticles'

export default function OrganicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useOrganicParticles(canvasRef)

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] bg-background overflow-hidden">
      {/* Halos lumineux subtils en arrière-plan (statiques) */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-400/5" />
      <div className="absolute bottom-0 left-0 h-[800px] w-[800px] -translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-400/5" />
      
      {/* Le Canvas pour la poussière organique interactive */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
      />
    </div>
  )
}
