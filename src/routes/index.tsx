import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl mb-6"
        >
          Propulsez votre <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500">croissance digitale.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg text-muted-foreground mb-10"
        >
          Ecobooster Link accompagne les entreprises dans leur transformation numérique : création de plateformes, applications mobiles, et stratégies marketing sur-mesure.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
            Démarrer un projet
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 px-8">
            Découvrir notre expertise
          </button>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full max-w-screen-2xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col p-8 rounded-3xl bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Développement Web</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Des sites vitrines et plateformes e-commerce rapides, sécurisés et optimisés pour le référencement.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group flex flex-col p-8 rounded-3xl bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Applications Mobiles</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Création d'applications iOS et Android natives ou hybrides pour rester au plus proche de vos clients.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group flex flex-col p-8 rounded-3xl bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Marketing Digital</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stratégies d'acquisition, community management et publicité ciblée pour maximiser votre ROI.
            </p>
          </div>
          {/* Card 4 */}
          <div className="group flex flex-col p-8 rounded-3xl bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Formation & Conseil</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Accompagnement et montée en compétences de vos équipes sur les nouveaux outils du numérique.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
