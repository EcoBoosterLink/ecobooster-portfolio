import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'
import { MethodologySection } from './ui/MethodologySection'
import { KeyFiguresSection } from './ui/KeyFiguresSection'
import { PortfolioSection } from './ui/PortfolioSection'

export function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <KeyFiguresSection />
      <PortfolioSection />
    </div>
  )
}
