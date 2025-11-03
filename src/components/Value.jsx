import { Check, ArrowRight, DollarSign } from 'lucide-react';

export default function Value() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 bottom-[-10%] h-64 w-64 translate-x-1/3 rounded-full bg-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <DollarSign className="h-3.5 w-3.5" />
            Designed to be cost-light, not feature-light
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Replace multiple tools and cut costs by 60%+
          </h2>
          <p className="mt-3 text-white/70">
            One platform for wireframing, design systems, prototyping, and whiteboarding. Everything teams
            love in Figma and Miro — streamlined, snappy, and radically affordable.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              'Unlimited files on all paid plans',
              'Unlimited viewers and commenters',
              'Design + whiteboard in one workspace',
              'Version history and component libraries'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-emerald-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Start your free trial <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              View pricing
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="text-white/60">Design tool</div>
              <div className="mt-2 text-2xl font-semibold">$6</div>
              <div className="text-xs text-white/50">per editor / month</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="text-white/60">Whiteboard</div>
              <div className="mt-2 text-2xl font-semibold">Included</div>
              <div className="text-xs text-white/50">no extra add-ons</div>
            </div>
            <div className="col-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-indigo-500/20 p-4">
              <div className="text-white/70">Compared to others</div>
              <div className="mt-2 text-sm text-white/70">
                Similar Figma + Miro stack often exceeds $20–$25 per editor. Sigma gives you both, beautifully integrated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
