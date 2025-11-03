import { PenTool, Layers, Users, Shield, Sparkles, DollarSign } from 'lucide-react';

const features = [
  {
    title: 'Pixel-perfect design',
    icon: PenTool,
    desc: 'Intuitive vectors, smart constraints, and components that scale across your system.'
  },
  {
    title: 'Infinite canvas',
    icon: Layers,
    desc: 'Sketch flows, brainstorm, and map ideas on an endless multiplayer board.'
  },
  {
    title: 'Real-time collaboration',
    icon: Users,
    desc: 'Comment, co-edit, and present in sync. Bring stakeholders along with shared views.'
  },
  {
    title: 'Smart libraries',
    icon: Sparkles,
    desc: 'Token-driven styles, variables, and assets that keep teams consistent by default.'
  },
  {
    title: 'Enterprise-ready',
    icon: Shield,
    desc: 'SSO, granular permissions, and audit logs that scale with your org.'
  },
  {
    title: 'Radically affordable',
    icon: DollarSign,
    desc: 'A powerful alternative to Figma and Miro — at a fraction of the price.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to design and ideate</h2>
          <p className="mt-3 text-white/70">Built for product teams that move fast and care about craft.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-inset ring-violet-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
