import MoltenMetal from './MoltenMetal'

// ─── Liquid / Water (Web) ───────────────────────────────────────────────────
// Deep ocean blues — dark navy → electric blue → icy white
export const LiquidTexture = () => (
  <MoltenMetal
    color1="#001a3a"
    color2="#0066ff"
    color3="#a0d8ff"
    speed={0.2}
    scale={3.5}
    detail={4}
    glow={1.8}
    coreSize={0.12}
    swirl={1.2}
    fold={-0.18}
    blackPoint={0.04}
    brightness={1.1}
    colorMode="molten"
    grain={true}
    grainIntensity={0.04}
    mouseInteraction={true}
    mouseStrength={0.25}
    opacity={0.85}
  />
)

// ─── Metallic / Gold (Mobile) ────────────────────────────────────────────────
// Molten gold — dark bronze → liquid gold → white-hot core
export const GoldMetalTexture = () => (
  <MoltenMetal
    color1="#1a0800"
    color2="#b8860b"
    color3="#fff5cc"
    speed={0.25}
    scale={4}
    detail={4}
    glow={2.0}
    coreSize={0.08}
    swirl={0.8}
    fold={-0.22}
    blackPoint={0.03}
    brightness={1.4}
    colorMode="ember"
    grain={true}
    grainIntensity={0.06}
    mouseInteraction={true}
    mouseStrength={0.2}
    opacity={0.9}
  />
)

// ─── Sand / Desert (Marketing) ───────────────────────────────────────────────
// Dune sands — deep terracotta → warm sand → bleached white
export const SandTexture = () => (
  <MoltenMetal
    color1="#1c0a00"
    color2="#c47a2b"
    color3="#f5e4c3"
    speed={0.15}
    scale={5}
    detail={3}
    glow={1.5}
    coreSize={0.15}
    swirl={0.6}
    fold={-0.15}
    blackPoint={0.06}
    brightness={1.2}
    colorMode="molten"
    grain={true}
    grainIntensity={0.08}
    mouseInteraction={true}
    mouseStrength={0.15}
    opacity={0.8}
  />
)

// ─── Cosmic / Formation ──────────────────────────────────────────────────────
// Deep space plasma — void black → electric violet → nebula white
export const CosmicTexture = () => (
  <MoltenMetal
    color1="#04010e"
    color2="#5227ff"
    color3="#e8d5ff"
    speed={0.18}
    scale={3}
    detail={5}
    glow={2.2}
    coreSize={0.1}
    swirl={1.5}
    fold={-0.25}
    blackPoint={0.03}
    brightness={1.0}
    colorMode="frost"
    grain={true}
    grainIntensity={0.05}
    mouseInteraction={true}
    mouseStrength={0.3}
    opacity={0.88}
  />
)
