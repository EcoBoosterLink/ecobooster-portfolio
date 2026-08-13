import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  baseAlpha: number

  constructor(width: number, height: number) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = Math.random() * 1.5 + 0.5 // Taille de la poussière
    this.baseAlpha = Math.random() * 0.5 + 0.1
    this.alpha = this.baseAlpha
  }

  update(width: number, height: number, mouseX: number, mouseY: number) {
    this.x += this.vx
    this.y += this.vy

    // Rebondir sur les bords
    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1

    // Effet organique : légère dérive aléatoire (bruit)
    this.vx += (Math.random() - 0.5) * 0.02
    this.vy += (Math.random() - 0.5) * 0.02

    // Limiter la vitesse maximale
    const maxSpeed = 1
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed
      this.vy = (this.vy / speed) * maxSpeed
    }

    // Réaction à la souris (répulsion douce)
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 150) {
      const force = (150 - distance) / 150
      this.vx -= (dx / distance) * force * 0.5
      this.vy -= (dy / distance) * force * 0.5
      this.alpha = Math.min(this.baseAlpha * 2, 0.8) // Brille un peu près de la souris
    } else {
      // Retour progressif à l'opacité de base
      this.alpha += (this.baseAlpha - this.alpha) * 0.1
    }
  }

  draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    // Couleur de la poussière selon le thème
    ctx.fillStyle = isDarkMode 
      ? `rgba(255, 255, 255, ${this.alpha})` 
      : `rgba(0, 0, 0, ${this.alpha * 0.6})`
    ctx.fill()
  }
}

export default function OrganicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = -1000
    let mouseY = -1000
    let isDarkMode = document.documentElement.classList.contains('dark')

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      
      // Nombre de particules de poussière selon la taille de l'écran
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner un fond très subtil (optionnel, on laisse bg-background gérer ça)
      particles.forEach(p => {
        p.update(canvas.width, canvas.height, mouseX, mouseY)
        p.draw(ctx, isDarkMode)
      })

      // Tracer des liens très fins entre les poussières proches (effet réseau/organique)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            ctx.beginPath()
            ctx.strokeStyle = isDarkMode 
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 80)})` 
              : `rgba(0, 0, 0, ${0.1 * (1 - distance / 80)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDarkMode = document.documentElement.classList.contains('dark')
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)

    init()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

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
