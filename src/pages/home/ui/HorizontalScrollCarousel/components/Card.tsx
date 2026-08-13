import { GooeyTextBox } from './GooeyTextBox'
import { LiquidTexture, GoldMetalTexture, SandTexture, CosmicTexture } from './Textures'
import { type CardType } from '../types'

export const Card = ({ card, index, activeIndex }: { card: CardType; index: number; activeIndex: number }) => {
  const isActive = index === activeIndex
  
  return (
    <div 
      className={`group relative h-[100vh] w-[100vw] shrink-0 overflow-hidden bg-background/50 p-10 pt-48 md:p-24 md:pt-48 border-none backdrop-blur-xl transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-50'}`}
    >
      {card.tabId === 'web' && <LiquidTexture />}
      {card.tabId === 'mobile' && <GoldMetalTexture />}
      {card.tabId === 'marketing' && <SandTexture />}
      {card.tabId === 'formation' && <CosmicTexture />}
      
      <div className="absolute -inset-px rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between mix-blend-normal">
         <div className="flex justify-between items-start">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl text-foreground tracking-tight drop-shadow-md">
              {card.title}
            </h3>
            <span className="text-8xl md:text-[12rem] font-black text-foreground/10 select-none drop-shadow-lg leading-none">
              {card.id}
            </span>
         </div>
         
         <GooeyTextBox index={index}>
            <p className="text-2xl md:text-4xl text-foreground leading-relaxed font-medium">
                {card.desc}
            </p>
         </GooeyTextBox>
      </div>
    </div>
  )
}
