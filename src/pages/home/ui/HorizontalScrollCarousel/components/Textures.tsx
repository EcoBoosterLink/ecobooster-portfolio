export const SandTexture = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#e5d9c5] via-[#d4c3a3] to-[#b3a182] opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen" />
    <div 
      className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sand'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sand)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

export const GoldMetalTexture = () => (
  <>
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#BF953F_0%,#FCF6BA_25%,#B38728_50%,#FBF5B7_75%,#AA771C_100%)] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='metal'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01 0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23metal)'/%3E%3C/svg%3E")` }} 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
  </>
)

export const LiquidTexture = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe] to-[#4facfe] opacity-30 dark:opacity-20 mix-blend-color-dodge" />
    <div 
      className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='liquid'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 4 -1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23liquid)'/%3E%3C/svg%3E")` }} 
    />
  </>
)

export const CosmicTexture = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#2a0845] to-[#6441A5] opacity-40 dark:opacity-30 mix-blend-color-dodge" />
    <div 
      className="absolute inset-0 opacity-[0.3] mix-blend-screen pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cosmic'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 3 -1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cosmic)'/%3E%3C/svg%3E")` }} 
    />
  </>
)
