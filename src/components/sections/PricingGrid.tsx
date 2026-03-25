"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Visita Técnica",
    price: "50",
    features: [
      "Diagnóstico no local",
      "Avaliação de problemas",
      "Orçamento detalhado",
    ],
    highlight: false,
    cta: "SOLICITAR VISITA",
  },
  {
    title: "Atendimento Avulso",
    price: "150",
    features: [
      "Atendimento emergencial",
      "Resolução de problemas pontuais",
      "Orientação técnica",
      "Até 60 minutos",
    ],
    highlight: true,
    cta: "SOLICITAR AGORA",
  },
  {
    title: "Serviço Agendado",
    price: "250",
    features: [
      "Manutenção preventiva",
      "Configurações avançadas",
      "Documentação detalhada",
      "Atendimento completo (até 3h)",
    ],
    highlight: false,
    cta: "AGENDAR SERVIÇO",
  },
];

export default function PricingGrid() {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
        <header className="space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-cyan uppercase tracking-[0.5em] text-xs font-black glow-cyan"
          >
            Eficiência & Custo
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.85]"
          >
            Investimento <br />
            <span className="text-white opacity-40">INTELIGENTE</span>
          </motion.h2>
        </header>
        <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xs text-white/40 font-mono text-xs uppercase leading-relaxed tracking-wider border-l border-brand-cyan pl-6"
          >
            Planos transparentes baseados em performance e resultados reais. Sem custos ocultos.
          </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        {plans.map((plan, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={cn(
              "flex-1 p-6 md:p-8 lg:p-12 border border-white/5 relative group transition-all duration-700",
              plan.highlight ? "border-brand-cyan bg-brand-cyan/5 lg:scale-110 z-10 shadow-[offset-x:0px_offset-y:30px_blur:60px_color:rgba(0,255,255,0.05)]" : "bg-transparent hover:bg-white/5",
              idx === 1 ? "lg:border-x-0" : ""
            )}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-12 transform -translate-y-1/2 py-1 px-4 bg-brand-cyan text-brand-graphite text-[10px] font-black uppercase tracking-widest">
                Recomendado
              </div>
            )}

            <div className="space-y-12">
              <div className="space-y-2">
                <h3 className="text-sm font-black uppercase tracking-widest text-white/40 group-hover:text-brand-cyan transition-colors">
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs md:text-sm font-mono text-brand-cyan/60 uppercase group-hover:text-brand-cyan transition-colors">R$</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white glow-cyan">{plan.price}</span>
                  <span className="text-[10px] md:text-xs font-mono text-white/20 uppercase tracking-tighter">/Fixo</span>
                </div>
              </div>

              <ul className="space-y-5">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 group/item">
                    <Check className="w-4 h-4 text-brand-cyan shrink-0 transition-transform group-hover/item:scale-125" />
                    <span className="text-sm text-white/60 font-light group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="https://wa.me/5511900000000" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${plan.cta} plano ${plan.title} via WhatsApp`}
                className={cn(
                  "w-full py-5 flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all",
                  plan.highlight 
                   ? "bg-brand-cyan text-brand-graphite hover:bg-white" 
                   : "border border-white/10 text-white hover:border-brand-cyan hover:text-brand-cyan"
                )}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
