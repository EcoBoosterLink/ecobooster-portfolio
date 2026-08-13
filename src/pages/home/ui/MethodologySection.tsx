import { useState } from 'react'
import { motion } from 'framer-motion'
import { HorizontalScrollCarousel } from './HorizontalScrollCarousel'
import { METHODOLOGY_DATA, TABS, type TabType } from '../helpers/constants'

export function MethodologySection() {
  const [activeTab, setActiveTab] = useState<TabType>('web')

  return (
    <section className="w-full max-w-screen-2xl px-6 py-32 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Notre Approche</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Une méthodologie éprouvée et transparente, adaptée à chaque type de projet pour garantir des résultats exceptionnels.
        </p>
      </div>

      {/* TABS HEADER */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 bg-secondary/20 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-secondary rounded-full shadow-sm border border-white/10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TABS CONTENT - HORIZONTAL STICKY SCROLL */}
      <div className="w-full mt-10">
        <HorizontalScrollCarousel cards={METHODOLOGY_DATA[activeTab]} />
      </div>
    </section>
  )
}
