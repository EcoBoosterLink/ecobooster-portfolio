import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

type CardType = {
  id: string
  title: string
  desc: string
}

const SandTexture = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#e5d9c5] via-[#d4c3a3] to-[#b3a182] opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen" />
    <div 
      className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sand'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sand)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

const GoldMetalTexture = () => (
  <>
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#BF953F_0%,#FCF6BA_25%,#B38728_50%,#FBF5B7_75%,#AA771C_100%)] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='metal'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01 0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23metal)'/%3E%3C/svg%3E")` }} 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
  </>
)

const LiquidTexture = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe] to-[#4facfe] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    <div 
      className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='liquid'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 4 -1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23liquid)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

const GooeyTextBox = ({ children }: { children: React.ReactNode }) => {
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

const Card = ({ card, index, activeIndex }: { card: CardType; index: number; activeIndex: number }) => {
  const isActive = index === activeIndex
  
  return (
    <div 
      className={`group relative h-[70vh] w-[90vw] md:w-[70vw] shrink-0 overflow-hidden bg-background/50 rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-700 ${isActive ? 'scale-[1.02] opacity-100' : 'scale-95 opacity-50'}`}
    >
      {index === 0 && <LiquidTexture />}
      {index === 1 && <GoldMetalTexture />}
      {index === 2 && <SandTexture />}
      
      <div className="absolute -inset-px rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between mix-blend-normal">
         <div className="flex justify-between items-start">
            <h3 className="text-4xl md:text-6xl font-bold max-w-2xl text-foreground tracking-tight drop-shadow-md">
              {card.title}
            </h3>
            <span className="text-7xl md:text-9xl font-black text-foreground/20 select-none drop-shadow-lg">
              {card.id}
            </span>
         </div>
         
         <GooeyTextBox>
            <p className="text-xl md:text-3xl text-foreground leading-relaxed font-medium">
                {card.desc}
            </p>
         </GooeyTextBox>
      </div>
    </div>
  )
}

export const HorizontalScrollCarousel = ({ cards }: { cards: CardType[] }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, cards.length - 1])
  
  useMotionValueEvent(scrollIndex, "change", (latest: number) => {
    setActiveIndex(Math.round(latest))
  })

  const xTranslation = useTransform(
    scrollIndex, 
    (val) => `calc(-1 * var(--card-w, 70vw) * ${val} - var(--card-gap, 4rem) * ${val})`
  )

  return (
    <section ref={targetRef} className="relative w-full" style={{ height: `${cards.length * 100}vh` }}>
      <style>{`
        html {
          scroll-snap-type: y proximity;
        }
        .scroll-carousel-container {
          --card-w: 90vw;
          --card-gap: 2rem;
        }
        @media (min-width: 768px) {
          .scroll-carousel-container {
            --card-w: 70vw;
            --card-gap: 4rem;
          }
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col pointer-events-none z-0">
        {cards.map((_, i) => (
          <div 
            key={i} 
            className="w-full snap-center" 
            style={{ height: '100vh' }} 
          />
        ))}
      </div>

      <div className="sticky top-0 flex h-screen items-center z-10 scroll-carousel-container pointer-events-none">
        
        <motion.div 
          style={{ x: xTranslation }}
          className="flex gap-8 md:gap-16 px-6 md:px-[15vw] pointer-events-auto"
        >
          {cards.map((card, index) => (
            <Card card={card} index={index} activeIndex={activeIndex} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
