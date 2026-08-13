import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OrganicBackground from '../components/OrganicBackground'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-foreground relative">
      <OrganicBackground />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
