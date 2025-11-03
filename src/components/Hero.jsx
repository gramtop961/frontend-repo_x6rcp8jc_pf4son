import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="relative h-[72vh] min-h-[560px] w-full">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end gap-6 px-6 pb-12 text-center sm:items-center sm:justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            Introducing Sigma — the designer's playground
          </div>

          <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl leading-tight">
            Design faster. Collaborate smarter. Pay less.
          </h1>
          <p className="max-w-2xl text-white/70 text-base sm:text-lg">
            Sigma is a modern, playful tool that blends the best of product design and whiteboarding —
            a sleek alternative to Figma and Miro at a fraction of the cost.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 font-medium text-white shadow-md shadow-violet-500/30 transition hover:bg-violet-400"
            >
              <Rocket className="h-4 w-4" /> Start free
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See features <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <span>No credit card required</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Unlimited viewers included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
