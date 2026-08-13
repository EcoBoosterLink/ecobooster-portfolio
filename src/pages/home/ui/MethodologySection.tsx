import { useState, useMemo } from 'react'
import { HorizontalScrollCarousel } from './HorizontalScrollCarousel'
import { METHODOLOGY_DATA, type TabType } from '../helpers/constants'

export function MethodologySection() {
  const [activeTab, setActiveTab] = useState<TabType>('web')

  const activeCards = useMemo(() => {
    return METHODOLOGY_DATA[activeTab].map(card => ({
      ...card,
      tabId: activeTab
    }))
  }, [activeTab])

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
        <HorizontalScrollCarousel cards={activeCards} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  )
}
