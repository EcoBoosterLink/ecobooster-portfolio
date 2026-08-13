import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { HorizontalScrollCarousel } from '../components/ui/HorizontalScrollCarousel'

export const Route = createFileRoute('/')({
  component: Index,
})

const METHODOLOGY_DATA = {
  web: [
    { id: '01', title: 'Audit & Maquettage', desc: "Nous analysons vos besoins et concevons des prototypes interactifs pour valider l'ergonomie avant toute ligne de code." },
    { id: '02', title: 'Développement Sur-mesure', desc: "Nos ingénieurs créent une architecture robuste, rapide et sécurisée, en utilisant les meilleurs frameworks modernes (React, Node.js)." },
    { id: '03', title: 'Tests & Déploiement', desc: "Phase de recette rigoureuse pour garantir l'absence de bugs, suivie d'une mise en production fluide." },
  ],
  mobile: [
    { id: '01', title: 'UX/UI Design Natif', desc: "Conception d'interfaces fluides respectant les guidelines strictes d'Apple (Human Interface) et de Google (Material Design)." },
    { id: '02', title: 'Développement iOS/Android', desc: "Programmation des fonctionnalités avec une attention maniaque aux performances, à la fluidité et à la gestion de la batterie." },
    { id: '03', title: 'Lancement sur les Stores', desc: "Gestion des soumissions App Store et Google Play, avec optimisations ASO pour une visibilité immédiate." },
  ],
  marketing: [
    { id: '01', title: "Stratégie d'Acquisition", desc: "Identification de vos cibles, définition des canaux rentables et budgétisation précise de vos futures campagnes." },
    { id: '02', title: 'Création de Contenu', desc: "Production de visuels, vidéos et copywriting percutants conçus spécifiquement pour maximiser le taux de clic." },
    { id: '03', title: 'Optimisation du ROI', desc: "Suivi quotidien des métriques, itérations en temps réel et scaling budgétaire des campagnes qui performent le mieux." },
  ],
  formation: [
    { id: '01', title: 'Évaluation des Besoins', desc: "Audit des compétences actuelles de vos équipes pour concevoir un programme de formation ultra-personnalisé." },
    { id: '02', title: 'Ateliers Pratiques', desc: "Apprentissage basé sur le \"learning-by-doing\" avec des cas concrets applicables immédiatement à votre entreprise." },
    { id: '03', title: 'Suivi & Ancrage', desc: "Accompagnement post-formation pour valider les acquis et ancrer les nouvelles méthodologies sur le long terme." },
  ]
}

type TabType = keyof typeof METHODOLOGY_DATA
const TABS: { id: TabType; label: string }[] = [
  { id: 'web', label: 'Développement Web' },
  { id: 'mobile', label: 'Applications Mobiles' },
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'formation', label: 'Formation & Conseil' },
]

function Index() {
  const [activeTab, setActiveTab] = useState<TabType>('web')

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

      {/* SERVICES SECTION - BENTO GRID INSOLITE */}
      <section className="w-full max-w-screen-2xl px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
          
          {/* Card 1 - Développement Web (Grande carte) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-secondary/30 backdrop-blur-md border border-white/10 p-10 md:col-span-2 transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <h3 className="text-3xl font-bold tracking-tight mb-4">Développement Web</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Transformez vos visiteurs en clients fidèles grâce à des interfaces web immersives et ultra-performantes. De la vitrine élégante à la plateforme e-commerce complexe, nous concevons des expériences sur-mesure, sécurisées et propulsées par les dernières technologies pour vous imposer comme le leader de votre marché.
              </p>
            </div>
            {/* Watermark insolite */}
            <div className="absolute -bottom-10 -right-10 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:text-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
            </div>
          </div>

          {/* Card 2 - Applications Mobiles (Carte verticale) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-secondary/30 backdrop-blur-md border border-white/10 p-8 md:row-span-2 flex flex-col justify-between transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-1">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Applications Mobiles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prenez place dans la poche de vos utilisateurs. Nous développons des applications iOS et Android natives ou hybrides qui engagent votre audience à chaque interaction. Un design fluide, des parcours sans friction et une rétention maximale pour garantir à votre marque une présence quotidienne et indispensable.
              </p>
            </div>
            <div className="relative z-10 mt-8 flex justify-end">
               <div className="h-20 w-12 rounded-full border-4 border-primary/20 flex items-start justify-center pt-2 group-hover:border-primary/40 transition-colors">
                 <div className="w-1.5 h-4 bg-primary/40 rounded-full animate-pulse" />
               </div>
            </div>
          </div>

          {/* Card 3 - Marketing Digital (Carte carrée) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/30 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <h3 className="text-xl font-bold tracking-tight mb-4">Marketing Digital</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Faites exploser votre visibilité. Grâce à des stratégies d'acquisition chirurgicales, des campagnes publicitaires millimétrées et un community management impactant, nous captons l'attention de vos cibles et propulsons votre retour sur investissement vers de nouveaux sommets.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
          </div>

          {/* Card 4 - Formation (Carte rectangulaire) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-secondary/30 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h3 className="text-xl font-bold tracking-tight mb-4">Formation & Conseil</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gardez toujours un temps d'avance. Nous formons vos équipes aux outils numériques de demain et vous offrons un accompagnement stratégique sur-mesure pour transformer vos collaborateurs en véritables leviers de croissance.
              </p>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full border-[12px] border-primary/5 group-hover:scale-150 transition-transform duration-700 ease-out" />
          </div>

        </div>
      </section>

      {/* METHODOLOGY SECTION (TABS) */}
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
    </div>
  )
}
