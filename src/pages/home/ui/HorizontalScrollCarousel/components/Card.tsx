import { GooeyTextBox } from './GooeyTextBox'
import { LiquidTexture, GoldMetalTexture, SandTexture } from './Textures'
import { type CardType } from '../types'

export const Card = ({ card, index, activeIndex }: { card: CardType; index: number; activeIndex: number }) => {
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
