import { HeroSection } from './ui/HeroSection'
import { ServicesSection } from './ui/ServicesSection'
import { MethodologySection } from './ui/MethodologySection'
import { KeyFiguresSection } from './ui/KeyFiguresSection'
import { PortfolioSection } from './ui/PortfolioSection'
import { PartnersSection } from './ui/PartnersSection'
import { CTASection } from './ui/CTASection'

export function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <KeyFiguresSection />
      <PortfolioSection />
      <PartnersSection />
      <CTASection />
    </div>
  )
}
