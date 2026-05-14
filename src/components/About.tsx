/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { translations, type Language } from '../lib/translations';
import { ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;
  
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://github.com/sandrosiliuto/NEGRIN-ALJAMON/blob/main/kevincortando.png?raw=true" 
                alt="Maestro Cortador - Kevin"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Achievement Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-8 -right-8 bg-maroon text-white p-8 rounded-full shadow-2xl flex flex-col items-center justify-center text-center w-40 h-40"
            >
              <div className="text-3xl font-bold font-display">15+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Años de</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Experiencia</div>
            </motion.div>
          </motion.div>

          <div className="space-y-10">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Sobre el Maestría</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 tracking-tight">
                {t.title}
              </h2>
              <p className="text-lg md:text-xl text-primary/70 leading-relaxed font-light">
                {t.text}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, text: 'Calidad Certificada' },
                { icon: <MapPin className="w-5 h-5" />, text: 'Servicio en Tenerife' },
                { icon: <BadgeCheck className="w-5 h-5" />, text: 'Corte a Cuchillo' },
                { icon: <Star className="w-5 h-5" />, text: 'Eventos de Lujo' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-beige/50 p-4 rounded-2xl border border-primary/5">
                  <div className="text-maroon">
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm text-primary/80 uppercase tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact"
                className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-maroon transition-all hover:scale-105"
              >
                Inicia una consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
