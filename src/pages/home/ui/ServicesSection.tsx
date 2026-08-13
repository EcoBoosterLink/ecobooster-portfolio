export function ServicesSection() {
  return (
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
  )
}
