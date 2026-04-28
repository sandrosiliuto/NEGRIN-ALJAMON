/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { translations, type Language } from '../lib/translations';
import { Phone, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const knifeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animation for the "knife" effect
    if (knifeRef.current) {
      gsap.to(knifeRef.current, {
        x: '110%',
        duration: 3,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
      });
    }

    // Entrance animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power4.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541329164087-02830319ca03?q=80&w=2070&auto=format&fit=crop" 
          alt="Ham cutting"
          className="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </div>

      {/* Decorative Knife/Slice Element */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-accent/30 z-10 overflow-hidden pointer-events-none">
        <div ref={knifeRef} className="w-40 h-full bg-gradient-to-r from-transparent via-accent to-transparent -translate-x-[100%]" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
        <div className="hero-content space-y-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-maroon/20 border border-maroon/30 text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            Premium Maestro Cortador
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white leading-[1.1] tracking-tighter">
            {t.title}
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-beige/80 leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="https://wa.me/34670765394"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center space-x-3 transform transition-all hover:bg-white hover:scale-105 shadow-2xl shadow-accent/20"
            >
              <Phone className="w-5 h-5" />
              <span>{t.cta}</span>
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-5 rounded-full text-white border border-white/20 hover:bg-white/10 transition-colors font-medium text-lg backdrop-blur-sm"
            >
              {translations[lang].nav.services}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-accent"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
