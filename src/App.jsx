import Hero from './components/Hero';
import Features from './components/Features';
import Value from './components/Value';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="text-lg font-semibold tracking-tight">Sigma</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Login</a>
            <a href="#get-started" className="rounded-md bg-white px-3 py-1.5 font-medium text-slate-900 hover:bg-white/90">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Value />
      </main>

      <Footer />
    </div>
  );
}
