import { motion } from 'framer-motion'
import { Card } from './components/Card'
import { type CardType } from './types'
import { useCarouselScroll } from '../../hooks/useCarouselScroll'
import { TABS, type TabType } from '../../helpers/constants'

export const HorizontalScrollCarousel = ({ 
  cards, 
  activeTab,
  setActiveTab,
  onActiveIndexChange 
}: { 
  cards: CardType[]
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  onActiveIndexChange?: (index: number) => void
}) => {
  const { targetRef, activeIndex, xTranslation } = useCarouselScroll(cards.length, onActiveIndexChange)

  return (
    <section id="methodology-carousel" ref={targetRef} className="relative w-full" style={{ height: `${cards.length * 100}vh` }}>
      <style>{`
        html {
          scroll-snap-type: y proximity;
        }
        .scroll-carousel-container {
          --card-w: 100vw;
          --card-gap: 0px;
        }
        @media (min-width: 768px) {
          .scroll-carousel-container {
            --card-w: 100vw;
            --card-gap: 0px;
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

      <div className="sticky top-0 flex flex-col h-screen overflow-hidden z-10 scroll-carousel-container pointer-events-none">
        
        <motion.div 
          style={{ x: xTranslation }}
          className="flex h-full pointer-events-auto"
        >
          {cards.map((card, index) => (
            <Card card={card} index={index} activeIndex={activeIndex} key={card.id} />
          ))}
        </motion.div>

        {/* TIMELINE STEPPER PINNED AT THE BOTTOM */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90vw] md:w-[60vw] max-w-4xl z-50 pointer-events-auto">
          <div className="relative flex justify-between items-center w-full">
            {/* The background line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 rounded-full" />
            
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex flex-col items-center justify-center group"
                >
                  <div 
                    className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-300 z-10 ${
                      isActive 
                        ? 'border-white bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                        : 'border-white/30 bg-black hover:border-white/70 hover:scale-110'
                    }`} 
                  />
                  
                  <span 
                    className={`absolute top-8 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

