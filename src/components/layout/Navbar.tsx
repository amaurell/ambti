"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-brand-graphite/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-brand-cyan glow-cyan relative z-50">
          Logo
        </Link>
        <div className="flex items-center gap-4 md:gap-8 relative z-50">
          <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-white/60">
            <Link href="#services" className="hover:text-brand-cyan transition-colors uppercase">Serviços</Link>
            <Link href="#pricing" className="hover:text-brand-cyan transition-colors uppercase">Preços</Link>
            <Link href="#contact" className="hover:text-brand-cyan transition-colors uppercase">Contato</Link>
          </div>
          <Link 
            href="https://wa.me/5511900000000" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Orçar Agora via WhatsApp"
            className="px-3 py-1.5 md:px-4 md:py-2 border border-brand-cyan text-brand-cyan text-xs md:text-sm font-bold hover:bg-brand-cyan hover:text-brand-graphite transition-all shadow-[2px_2px_var(--color-brand-cyan)] md:shadow-[4px_4px_var(--color-brand-cyan)] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase whitespace-nowrap"
          >
            Orçar_Agora
          </Link>
          <button 
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fade/Slide */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-brand-graphite/98 backdrop-blur-xl flex flex-col items-center justify-start pt-12 gap-8 text-lg font-mono tracking-widest text-white/60 border-t border-white/5 z-40 h-[calc(100vh-80px)]">
          <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-brand-cyan transition-colors uppercase">Serviços</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-brand-cyan transition-colors uppercase">Preços</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-brand-cyan transition-colors uppercase">Contato</Link>
        </div>
      )}
    </nav>
  );
}
