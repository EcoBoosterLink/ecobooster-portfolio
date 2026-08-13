import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const spring = useSpring(0, { bounce: 0, duration: 2500 })
  const display = useTransform(spring, (current) => Math.floor(current))
  
  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])
  
  return <motion.span ref={ref}>{display}</motion.span>
}

export function KeyFiguresSection() {
  const figures = [
    { value: 50, suffix: '+', label: 'Projets livrés', desc: 'Des solutions sur-mesure déployées avec succès' },
    { value: 98, suffix: '%', label: 'Satisfaction', desc: 'De clients recommandent nos services' },
    { value: 7, suffix: 'j/7', label: 'Support', desc: 'Une équipe réactive et toujours à votre écoute' },
  ]

  return (
    <section className="w-full max-w-screen-2xl px-6 py-32 flex flex-col items-center">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Pourquoi nous ?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Des résultats concrets et mesurables qui témoignent de notre engagement envers l'excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-6xl">
        {figures.map((figure, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="flex items-baseline justify-center mb-6 text-foreground">
              <span className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">
                <AnimatedNumber value={figure.value} />
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/50 ml-1">
                {figure.suffix}
              </span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 tracking-tight">
              {figure.label}
            </h3>
            
            <p className="text-muted-foreground max-w-xs">
              {figure.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
