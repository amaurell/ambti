"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, PenToolIcon as Tool, HardDrive } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
} as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 lg:pt-28 lg:pb-16 items-center flex flex-col justify-center overflow-hidden max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row w-full gap-8 lg:gap-12 items-center">
        {/* Background Layer: Scanline & Grain */}
        <motion.div 
          animate={{ y: ["-100%", "1000%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="scanline absolute inset-0 pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

        {/* Radical Vertical Headline */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block w-20 lg:w-32 shrink-0 h-full relative"
        >
          <span className="text-6xl lg:text-8xl font-black tracking-tighter text-transparent uppercase leading-[.8] [writing-mode:vertical-rl] select-none opacity-20" style={{ WebkitTextStroke: '2px var(--color-brand-cyan)' }}>
            Sistemas Robustos
          </span>
        </motion.div>

        {/* Main Content Area: Asymmetric Layout */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 lg:gap-12 items-center w-full">
          <div className="flex-1 space-y-6 lg:space-y-8">
            <motion.div {...fadeInUp} className="space-y-3 lg:space-y-4">
              <span className="inline-block py-1 px-3 border border-brand-cyan/30 text-[10px] uppercase font-bold tracking-[0.3em] text-brand-cyan bg-brand-cyan/5">
                Especialistas em Infraestrutura
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white">
                Soluções Técnicas de <br />
                <span className="text-brand-cyan glow-cyan">ALTA PERFORMANCE</span>
              </h1>
            </motion.div>

            <motion.p 
              {...fadeInUp} 
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed"
            >
              Sistemas robustos para manter sua empresa operando com eficiência total. Suporte técnico premium, infraestrutura de rede resiliente e upgrades essenciais.
            </motion.p>

            <motion.div 
              {...fadeInUp} 
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="flex flex-col sm:flex-row w-full gap-3 lg:gap-4 pt-4"
            >
            <Link 
              href="https://wa.me/5511900000000" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar Orçamento via WhatsApp"
              className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-5 bg-brand-cyan text-brand-graphite text-xs sm:text-sm font-black flex items-center justify-center gap-3 group tracking-tight hover:bg-white transition-all shadow-[offset-x:4px_offset-y:4px_color:rgba(0,255,255,0.2)] md:shadow-[offset-x:8px_offset-y:8px_color:rgba(0,255,255,0.2)] text-center"
            >
              SOLICITAR ORÇAMENTO <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              aria-label="Conheça nossos serviços"
              className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-5 border border-white/20 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all text-center"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </Link>
          </motion.div>
        </div>

        {/* Floating Abstract Tech Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full md:w-[300px] lg:w-[400px] aspect-square hidden md:flex items-center justify-center"
        >
          <div className="absolute inset-0 border-[0.5px] border-brand-cyan/10 rotate-45 transform-gpu" />
          <div className="absolute inset-10 border-[0.5px] border-brand-cyan/20 -rotate-12 transform-gpu" />
          <div className="absolute inset-20 border-[2px] border-brand-cyan/40 glow-cyan transform-gpu" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-40 border-t-[4px] border-brand-cyan rounded-full border-r-transparent border-b-transparent border-l-transparent" 
          />

          <div className="relative z-10 grid grid-cols-2 gap-4">
            {[Cpu, Network, Tool, HardDrive].map((Icon, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.1, rotate: 3, backgroundColor: 'rgba(0,255,255,0.1)' }}
                className="w-20 h-20 border border-brand-cyan/20 flex items-center justify-center bg-brand-graphite/40 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-brand-cyan" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
