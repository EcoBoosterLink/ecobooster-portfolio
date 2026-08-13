import MoltenMetal from './MoltenMetal'
import Waves from './Waves'
import Aurora from './Aurora'
import GradientBlinds from './GradientBlinds'
import Silk from './Silk'

// ─── Gradient Blinds (Marketing) ────────────────────────────────────────────
// Futuristic layered blinds effect
export const GradientBlindsTexture = () => (
  <GradientBlinds 
    gradientColors={['#0066ff', '#5227FF', '#a0d8ff']}
    angle={45}
    noise={0.4}
    blindCount={12}
    blindMinWidth={40}
    spotlightRadius={0.6}
    spotlightSoftness={1.5}
    spotlightOpacity={0.8}
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

// ─── Silk (Marketing) ────────────────────────────────────────────────────────
// Smooth elegant waves — premium branding feel
export const SilkTexture = () => (
  <Silk 
    speed={2} 
    scale={0.8} 
    color="#FF3366" 
    noiseIntensity={0.8} 
    rotation={0.5}
  />
)

// ─── Sand / Desert (Alt Marketing) ───────────────────────────────────────────
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
// Gradient Waves / Aurora style
export const CosmicTexture = () => (
  <Aurora 
    colorStops={['#04010e', '#5227ff', '#1a0033']}
    amplitude={1.2}
    blend={0.6}
    speed={0.5}
  />
)

// ─── Waves Alternative ──────────────────────────────────────────────────────
// Pure line-based waves if preferred
export const GradientWavesTexture = () => (
  <Waves 
    lineColor="#5227ff"
    backgroundColor="#04010e"
    waveSpeedX={0.02}
    waveSpeedY={0.01}
    waveAmpX={40}
    waveAmpY={20}
    friction={0.9}
    tension={0.01}
    maxCursorMove={120}
    xGap={12}
    yGap={36}
  />
)
