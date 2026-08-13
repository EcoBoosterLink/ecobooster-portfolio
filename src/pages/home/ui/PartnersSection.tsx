import { motion } from 'framer-motion'

import { PARTNERS } from '../../../constants/partners'

export function PartnersSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-black relative overflow-hidden">
      
      {/* Background gradients for smooth transition */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Fade edges left & right for the marquee */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-white/50 text-center">
          Nos Partenaires & Technologies
        </h2>
      </div>

      <div className="relative w-full flex items-center h-24">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-500 group cursor-default"
            >
              <span className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
                {partner}
              </span>
              <span className="text-white/20 mx-8 md:mx-16 text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
