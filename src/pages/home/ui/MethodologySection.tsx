import { useState, useMemo } from 'react'
import { HorizontalScrollCarousel } from './HorizontalScrollCarousel'
import { METHODOLOGY_DATA } from '../helpers/constants'
import { CATEGORIES } from '../../../constants/categories'
import type { CategoryId } from '../../../constants/categories'

export function MethodologySection() {
  const [activeTab, setActiveTab] = useState<CategoryId>('web')

  const allCards = useMemo(() => {
    const cards: (typeof METHODOLOGY_DATA['web'][0] & { tabId: CategoryId })[] = []
    CATEGORIES.forEach(tab => {
      METHODOLOGY_DATA[tab.id].forEach(card => {
        cards.push({ ...card, tabId: tab.id })
      })
    })
    return cards
  }, [])

  return (
    <section className="w-full max-w-screen-2xl px-6 py-32 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Notre Approche</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Une méthodologie éprouvée et transparente, adaptée à chaque type de projet pour garantir des résultats exceptionnels.
        </p>
      </div>

      {/* TABS CONTENT - HORIZONTAL STICKY SCROLL WITH EMBEDDED TIMELINE */}
      <div className="w-full">
        <HorizontalScrollCarousel cards={allCards} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  )
}
