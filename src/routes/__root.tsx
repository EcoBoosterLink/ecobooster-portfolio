import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
