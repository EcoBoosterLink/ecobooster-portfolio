import { useEffect, useRef } from 'react'

// ─── Simplex Noise (Inlined, no external dep) ───────────────────────────────
// Based on Stefan Gustavson's simplex noise implementation
const F2 = 0.5 * (Math.sqrt(3.0) - 1.0)
const G2 = (3.0 - Math.sqrt(3.0)) / 6.0
const grad3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
]
function buildPermTable(seed: number) {
  const p = Array.from({ length: 256 }, (_, i) => i)
  let s = seed | 0
  for (let i = 255; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]]
  }
  const perm = new Uint8Array(512)
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]
  return perm
}
function noise2d(perm: Uint8Array, x: number, y: number): number {
  const s = (x + y) * F2
  const i = Math.floor(x + s), j = Math.floor(y + s)
  const t = (i + j) * G2
  const X0 = i - t, Y0 = j - t
  const x0 = x - X0, y0 = y - Y0
  const [i1, j1] = x0 > y0 ? [1, 0] : [0, 1]
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2
  const x2 = x0 - 1.0 + 2.0 * G2, y2 = y0 - 1.0 + 2.0 * G2
  const ii = i & 255, jj = j & 255
  const gi0 = perm[ii + perm[jj]] % 12
  const gi1 = perm[ii + i1 + perm[jj + j1]] % 12
  const gi2 = perm[ii + 1 + perm[jj + 1]] % 12
  let n = 0
  let t0 = 0.5 - x0*x0 - y0*y0; if (t0 > 0) { t0 *= t0; n += t0 * t0 * (grad3[gi0][0]*x0 + grad3[gi0][1]*y0) }
  let t1 = 0.5 - x1*x1 - y1*y1; if (t1 > 0) { t1 *= t1; n += t1 * t1 * (grad3[gi1][0]*x1 + grad3[gi1][1]*y1) }
  let t2 = 0.5 - x2*x2 - y2*y2; if (t2 > 0) { t2 *= t2; n += t2 * t2 * (grad3[gi2][0]*x2 + grad3[gi2][1]*y2) }
  return 70.0 * n // [-1, 1]
}

// ─── Types ───────────────────────────────────────────────────────────────────
export type TextureType = 'liquid' | 'metallic' | 'sand'

interface TextureConfig {
  seed: number
  scale: number         // noise zoom level
  speed: number         // time multiplier
  colorize: (v: number, x: number, y: number, t: number) => [number, number, number]
}

const CONFIGS: Record<TextureType, TextureConfig> = {
  liquid: {
    seed: 42,
    scale: 0.004,
    speed: 0.0003,
    colorize: (v, _x, _y, _t) => {
      // Deep ocean blues shifting to teal/cyan
      const n = (v + 1) / 2  // [0,1]
      const r = Math.round(n * 10 + 0)
      const g = Math.round(n * 80 + 30)
      const b = Math.round(n * 120 + 100)
      return [r, g, b]
    }
  },
  metallic: {
    seed: 17,
    scale: 0.003,
    speed: 0.00015,
    colorize: (v, _x, y, t) => {
      // Gold/silver streaks — high-frequency horizontal banding
      const band = Math.sin(y * 0.025 + t * 0.4) * 0.3
      const n = Math.max(0, Math.min(1, (v + band + 1) / 2))
      // Gold palette
      const r = Math.round(140 + n * 115)
      const g = Math.round(100 + n * 90)
      const b = Math.round(10 + n * 30)
      return [r, g, b]
    }
  },
  sand: {
    seed: 99,
    scale: 0.006,
    speed: 0.0001,
    colorize: (v, x, _y, t) => {
      // Drifting sand dunes — warm beige/brown with wind ripples
      const ripple = Math.sin(x * 0.018 + t * 0.5) * 0.2
      const n = Math.max(0, Math.min(1, (v + ripple + 1) / 2))
      const r = Math.round(80 + n * 100)
      const g = Math.round(60 + n * 70)
      const b = Math.round(20 + n * 35)
      return [r, g, b]
    }
  }
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useTextureCanvas(type: TextureType) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cfg = CONFIGS[type]
    const perm = buildPermTable(cfg.seed)

    // Render at a lower resolution for performance then scale up
    const RENDER_SCALE = 4  // 1px in render = 4px on screen (very smooth at this noise scale)
    let animTime = 0

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / RENDER_SCALE)
      canvas.height = Math.ceil(window.innerHeight / RENDER_SCALE)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }
    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      animTime += cfg.speed
      const W = canvas.width
      const H = canvas.height
      const imageData = ctx.createImageData(W, H)
      const data = imageData.data

      for (let py = 0; py < H; py++) {
        for (let px = 0; px < W; px++) {
          // Sample multiple octaves of noise for richness
          const nx = px * cfg.scale
          const ny = py * cfg.scale
          const v =
            noise2d(perm, nx + animTime,       ny + animTime * 0.7)       * 0.5 +
            noise2d(perm, nx * 2 + animTime * 1.3, ny * 2 - animTime)     * 0.3 +
            noise2d(perm, nx * 4 - animTime * 0.6, ny * 4 + animTime * 0.9) * 0.2

          const [r, g, b] = cfg.colorize(v, px, py, animTime * 1000)
          const idx = (py * W + px) * 4
          data[idx]     = r
          data[idx + 1] = g
          data[idx + 2] = b
          data[idx + 3] = 255
        }
      }
      ctx.putImageData(imageData, 0, 0)
      frameRef.current = requestAnimationFrame(render)
    }

    frameRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [type])

  return canvasRef
}
