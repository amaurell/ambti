"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-gray/30 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Matrix Background Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grid grid-cols-12 gap-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-brand-cyan aspect-square" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <header className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-brand-cyan uppercase tracking-[0.5em] text-xs font-black glow-cyan"
            >
              Ciclo de Comunicação
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.85]"
            >
              Entre em <br />
              <span className="text-white opacity-40">CONTATO</span>
            </motion.h2>
          </header>

          <div className="space-y-8">
            {[
              { icon: Phone, label: "Telefone", val: "(11) 90000-0000", href: "tel:+5511900000000" },
              { icon: Mail, label: "E-mail", val: "contato@empresa.com.br", href: "mailto:contato@empresa.com.br" },
              { icon: MapPin, label: "Endereço", val: "Avenida Paulista, 1000, São Paulo - SP", href: "https://maps.google.com" },
            ].map((item, idx) => (
              <motion.a 
                key={idx}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-brand-cyan/20 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                  <item.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase font-black tracking-widest text-white/20 group-hover:text-brand-cyan/40 transition-colors">{item.label}</span>
                  <span className="block text-lg font-light text-white/60 group-hover:text-white transition-colors">{item.val}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-12 text-white/20 font-mono text-[10px] uppercase tracking-widest border-t border-white/5">
            Horário de Atendimento: <br />
            Segunda a Sexta: 08:00 - 18:00 <br />
            Sábado: 09:00 - 13:00
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-8 lg:p-10 border border-brand-cyan/30 bg-brand-graphite shadow-[offset-x:15px_offset-y:15px_blur:0px_color:rgba(0,255,255,0.02)] lg:shadow-[offset-x:30px_offset-y:30px_blur:0px_color:rgba(0,255,255,0.02)]"
        >
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-xl md:text-2xl font-black uppercase text-white">Configurar Protocolo <br /> <span className="text-brand-cyan">DE ATENDIMENTO</span></h3>
            
            <p className="text-white/40 font-light leading-relaxed">
              Inicie uma conversa direta via WhatsApp para acelerar seu orçamento ou suporte imediato. Nosso time técnico está online para configurar sua solução.
            </p>

            <Link 
              href="https://wa.me/5511900000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20meus%20sistemas."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar Protocolo WhatsApp"
              className="group w-full py-8 bg-brand-cyan hover:bg-white text-brand-graphite font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-2xl active:translate-y-1 active:shadow-none"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" /> 
              INICIAR PROTOCOLO WHATSAPP
            </Link>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">Comunicação Segura</span>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
