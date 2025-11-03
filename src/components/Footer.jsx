import { Heart, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-lg font-semibold">Sigma</div>
          <p className="text-sm text-white/60">Design and ideation for modern teams.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Changelog</a>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
          <a aria-label="GitHub" href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-white/50">
        Made with <Heart className="mx-1 inline-block h-3.5 w-3.5 text-rose-400" /> for creators.
      </div>
    </footer>
  );
}
