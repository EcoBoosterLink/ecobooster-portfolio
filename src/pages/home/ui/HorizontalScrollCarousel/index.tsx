import { motion } from 'framer-motion'
import { Card } from './components/Card'
import { type CardType } from './types'
import { useCarouselScroll } from '../../hooks/useCarouselScroll'

export const HorizontalScrollCarousel = ({ 
  cards, 
  onActiveIndexChange 
}: { 
  cards: CardType[]
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

