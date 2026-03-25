"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 border-t border-white/5 bg-brand-graphite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 font-mono text-[10px] uppercase tracking-[.3em] text-white/20 text-center md:text-left">
        <div className="space-y-4 w-full md:w-auto">
          <Link href="/" className="text-xl font-black tracking-tighter text-brand-cyan glow-cyan block">
            Logo
          </Link>
          <span className="block max-w-[280px] sm:max-w-xs mx-auto md:mx-0 leading-relaxed text-balance">© 2026 LOGO INFRAESTRUTURA DE SISTEMAS. TODOS OS DIREITOS RESERVADOS.</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 items-center w-full md:w-auto">
          <Link href="#services" className="hover:text-brand-cyan transition-colors">Serviços</Link>
          <Link href="#pricing" className="hover:text-brand-cyan transition-colors">Preços</Link>
          <Link href="#privacy" className="hover:text-brand-cyan transition-colors">Política_Privacidade</Link>
        </div>

        <div className="flex items-center gap-2 pt-6 md:pt-0 border-t border-white/5 md:border-none w-full md:w-auto justify-center md:justify-end">
          by Andre Maurell - 2026
        </div>
      </div>
    </footer>
  );
}
