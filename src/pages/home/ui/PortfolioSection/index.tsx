import { PROJECTS } from '../../../../constants/projects'
import { usePortfolioGrid } from '../../hooks/usePortfolioGrid'
import { PortfolioCard } from './PortfolioCard'

export function PortfolioSection() {
  const { flatLayout } = usePortfolioGrid()

  return (
    <section className="w-full py-32 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-screen-2xl px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nos Réalisations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Découvrez une sélection de projets qui repoussent les limites de l'expérience numérique.
        </p>
      </div>

      <div className="w-full max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-row-dense auto-rows-[250px] md:auto-rows-[300px]">
          {PROJECTS.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              gridClass={flatLayout[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
