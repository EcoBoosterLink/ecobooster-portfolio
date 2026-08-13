import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

export const useCarouselScroll = (cardsLength: number, onIndexChange?: (index: number) => void) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, cardsLength - 1)])
  
  useMotionValueEvent(scrollIndex, "change", (latest: number) => {
    const newIndex = Math.round(latest)
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
      onIndexChange?.(newIndex)
    }
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", () => {
    if (!targetRef.current) return
    
    const rect = targetRef.current.getBoundingClientRect()
    // The section is considered "active" (sticky) when its top is at or above the viewport top,
    // and its bottom is at or below the viewport bottom.
    // We add a small 50px buffer to ensure it stays dark even at the very edges.
    const isActive = rect.top <= 50 && rect.bottom >= window.innerHeight - 50

    const navbar = document.querySelector('header')
    
    if (isActive) {
      document.documentElement.classList.add('dark')
      if (navbar) {
        navbar.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        navbar.style.transform = 'translateY(-100%)'
      }
    } else {
      document.documentElement.classList.remove('dark')
      if (navbar) {
        navbar.style.transform = 'translateY(0)'
      }
    }
  })

  const xTranslation = useTransform(
    scrollIndex, 
    (val) => `calc(-1 * var(--card-w, 70vw) * ${val} - var(--card-gap, 4rem) * ${val})`
  )

  return {
    targetRef,
    activeIndex,
    xTranslation,
  }
}
