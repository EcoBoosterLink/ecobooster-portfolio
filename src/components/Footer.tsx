export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container max-w-screen-2xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2026 Ecobooster Link. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
