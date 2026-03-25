"use client";

import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Cpu, 
  Network, 
  Monitor, 
  Settings, 
  Wrench, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: HelpCircle,
    title: "Helpdesk",
    desc: "Suporte técnico remoto e presencial para resolver seus problemas rapidamente.",
    tag: "SUPPORT_L1"
  },
  {
    icon: Cpu,
    title: "Upgrade",
    desc: "Melhorias de hardware e software para aumentar a performance do seu sistema.",
    tag: "PERF_MGMT"
  },
  {
    icon: Network,
    title: "Rede",
    desc: "Implementação e suporte em redes locais e remotas com segurança total.",
    tag: "INFRA_SOC"
  },
  {
    icon: Monitor,
    title: "Montagem & Instalação",
    desc: "Montagem e instalação de estações de trabalho completas e eficientes.",
    tag: "DEPLOY_HW"
  },
  {
    icon: Settings,
    title: "Configuração",
    desc: "Personalização e configuração de softwares críticos para suas necessidades.",
    tag: "SYS_OPTIM"
  },
  {
    icon: Wrench,
    title: "Troca de Peças",
    desc: "Substituição de componentes para garantir o máximo desempenho dos equipamentos.",
    tag: "MAINT_HARD"
  }
];

export default function ServiceBricks() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-brand-gray/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 lg:mb-12 space-y-3">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-cyan uppercase tracking-[0.5em] text-xs font-black glow-cyan"
          >
            Expertise Técnica
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase"
          >
            Nossas Soluções <br />
            <span className="text-white opacity-40">DE ALTO IMPACTO</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group p-6 lg:p-8 border border-white/5 transition-all relative overflow-hidden",
                // Staggered height/width logic (simulating asymmetry)
                idx % 2 === 0 ? "md:pb-12 lg:pb-16" : "md:pt-12 lg:pt-16",
                idx === 1 ? "md:border-x-0" : "",
                idx > 2 ? "border-t-0" : ""
              )}
            >
              {/* Background Accent Element */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/10 group-hover:text-brand-cyan/20 select-none">
                {item.tag}
              </div>

              <div className="relative z-10 space-y-4 lg:space-y-5">
                <div className="w-12 h-12 lg:w-14 lg:h-14 border border-brand-cyan/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                  <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-brand-cyan" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black uppercase text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm lg:text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>


              </div>

              {/* Hover Effect Layer */}
              <div className="absolute inset-0 bg-brand-cyan/0 group-hover:bg-brand-cyan/[0.02] transition-colors pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 shadow-[offset-y:4px_blur:10px_color:var(--color-brand-cyan)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
