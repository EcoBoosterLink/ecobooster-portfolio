import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

export const useCarouselScroll = (cardsLength: number) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, cardsLength - 1)])
  
  useMotionValueEvent(scrollIndex, "change", (latest: number) => {
    setActiveIndex(Math.round(latest))
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
