import { motion } from 'framer-motion'
// @ts-ignore
import WarpText from '../../../../@/components/WarpText.jsx'
import '../../../../@/components/WarpText.css'

export function CTASection() {
  return (
    <section className="w-full relative pt-0 pb-40 md:pb-56 overflow-hidden flex items-center justify-center bg-black">
      {/* Subtle glowing ambient light behind */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">
        
        <div className="mb-0 w-full overflow-hidden flex justify-center h-[300px] md:h-[400px]">
          <WarpText
            text="Prêt à lancer votre prochain grand projet ?"
            color="#ffffff"
            warpStrength={0.08}
            warpScale={2.4}
            speed={0.55}
            pointerInfluence={0.42}
            pointerStrength={0.7}
            refraction={0.044}
            ripple={false}
            fontSize={160}
            fontWeight={800}
            letterSpacing={-0.06}
            lineHeight={0.92}
            style={{ width: '100%', height: '100%' }}
            fontFamily="inherit"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/60 mb-16 max-w-2xl mx-auto"
        >
          Transformons votre vision en une expérience numérique exceptionnelle. Contactez-nous dès aujourd'hui pour en discuter.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center gap-4 bg-white text-black px-10 py-6 rounded-full text-xl md:text-2xl font-bold tracking-tight shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-shadow duration-500"
        >
          <span>Démarrer maintenant</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-2 transition-transform duration-300" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  )
}
