import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type CardType = {
  id: string
  title: string
  desc: string
}

const SandTexture = () => (
  <>
    {/* Dégradé sablé beige/doré très doux */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#e5d9c5] via-[#d4c3a3] to-[#b3a182] opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen" />
    {/* Bruit haute fréquence pour simuler les grains de sable */}
    <div 
      className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sand'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sand)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

const GoldMetalTexture = () => (
  <>
    {/* Dégradé métallique doré complexe (ombres et lumières) */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#BF953F_0%,#FCF6BA_25%,#B38728_50%,#FBF5B7_75%,#AA771C_100%)] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    {/* Effet métal brossé : bruit étiré sur l'axe Y */}
    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='metal'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01 0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23metal)'/%3E%3C/svg%3E")` }} 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
  </>
)

const LiquidTexture = () => (
  <>
    {/* Dégradé liquide cyan/bleu profond */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe] to-[#4facfe] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    {/* Bruit basse fréquence pour simuler des vagues ou du liquide visqueux */}
    <div 
      className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='liquid'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 4 -1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23liquid)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

const GooeyTextBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative p-6 md:p-10 w-full max-w-4xl">
      {/* SVG Gooey Filter Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Le conteneur qui applique l'effet Merged/Gooey */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ filter: 'url(#goo)' }}
      >
        {/* Boîte principale */}
        <div className="absolute inset-2 bg-background/80 dark:bg-black/60 rounded-3xl" />
        
        {/* Gouttes organiques animées fusionnant avec la boîte (Merged Borders) */}
        <motion.div 
          animate={{ x: [-10, 10, -10], y: [-10, 20, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -left-4 w-20 h-20 bg-background/80 dark:bg-black/60 rounded-full" 
        />
        <motion.div 
          animate={{ x: [10, -20, 10], y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-6 right-12 w-24 h-24 bg-background/80 dark:bg-black/60 rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, 15, 0], y: [-15, 0, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 -right-4 w-16 h-16 bg-background/80 dark:bg-black/60 rounded-full" 
        />
      </div>

      {/* Le vrai contenu textuel (au-dessus du filtre) */}
      <div className="relative z-10 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

const Card = ({ card, index }: { card: CardType; index: number }) => {
  return (
    <div className="group relative h-[70vh] w-[90vw] md:w-[70vw] shrink-0 overflow-hidden bg-background/50 rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:scale-[1.02]">
      
      {/* Application conditionnelle de la texture selon l'index */}
      {index === 0 && <LiquidTexture />}
      {index === 1 && <GoldMetalTexture />}
      {index === 2 && <SandTexture />}
      
      {/* Halo lumineux subtil qui suit (effet CSS) */}
      <div className="absolute -inset-px rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Contenu textuel */}
      <div className="relative z-10 h-full flex flex-col justify-between mix-blend-normal">
         <div className="flex justify-between items-start">
            <h3 className="text-4xl md:text-6xl font-bold max-w-2xl text-foreground tracking-tight drop-shadow-md">
              {card.title}
            </h3>
            <span className="text-7xl md:text-9xl font-black text-foreground/20 select-none drop-shadow-lg">
              {card.id}
            </span>
         </div>
         
         {/* Le bloc de texte insolite (Merged SVG Border) */}
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
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Translation ajustée pour être fluide
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-20">
          {cards.map((card, index) => (
            <Card card={card} index={index} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
