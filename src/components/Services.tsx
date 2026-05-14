/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { translations, type Language } from '../lib/translations';
import { Star, Utensils, GraduationCap, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.service-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });
  }, []);

  const services = [
    {
      icon: <Star className="w-8 h-8" />,
      title: t.wedding.title,
      desc: 'Bodas de alta gama, banquetes exclusivos y celebraciones privadas donde la precisión y el sabor se unen para crear momentos inolvidables.',
      color: 'bg-maroon'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: t.fairs.title,
      desc: 'Potencia tu imagen de marca en ferias y stands corporativos. Un show gastronómico que atrae miradas y deleita paladares profesionales.',
      color: 'bg-primary'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t.tastings.title,
      desc: 'Catas guiadas y talleres de corte para grupos reducidos. Aprende los secretos del ibérico de la mano de un maestro cortador certificado.',
      color: 'bg-accent'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-accent font-bold tracking-widest uppercase mb-4">
            <Award className="w-5 h-5" />
            <span>Maestría Ibérica</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div 
              key={i}
              className="service-card group relative p-10 rounded-3xl bg-beige border border-primary/5 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
              
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-maroon transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-8 pt-8 border-t border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-sm font-bold text-accent flex items-center space-x-2">
                  <span>Saber más</span>
                  <span className="w-8 h-[2px] bg-accent inline-block" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Full Width Image */}
      <div className="w-full mt-0 mb-24">
        <img 
          src="https://github.com/sandrosiliuto/NEGRIN-ALJAMON/blob/main/jamon.png?raw=true" 
          alt="Jamón Ibérico" 
          className="w-full h-auto object-cover shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Pricing Table Section */}
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary tracking-tight">
              {t.pricingTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ham Types */}
            <div className="bg-beige p-8 md:p-12 rounded-[2.5rem] border border-primary/5">
              <h3 className="text-2xl font-bold mb-8 text-maroon flex items-center">
                <span className="w-8 h-[2px] bg-maroon mr-4" />
                Variedades de Jamón
              </h3>
              <div className="space-y-6">
                {(t.hams as any[]).map((ham, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-primary/10 pb-4">
                    <div className="max-w-[70%]">
                      <div className="font-bold text-primary">{ham.name}</div>
                      {ham.note && <div className="text-sm text-primary/60 italic">{ham.note}</div>}
                    </div>
                    <div className="text-xl font-display font-bold text-accent whitespace-nowrap">
                      {ham.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Rates */}
            <div className="space-y-8">
              <div className="bg-primary text-white p-8 md:p-12 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-8 text-accent flex items-center">
                  <span className="w-8 h-[2px] bg-accent mr-4" />
                  Tarifas de Servicio
                </h3>
                <div className="space-y-10">
                  {(t.serviceRates as any[]).map((rate, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-accent font-bold uppercase tracking-widest text-sm">{rate.zone}</div>
                      <div className="flex justify-between items-baseline">
                        <div className="text-3xl font-display font-bold">{rate.rate}</div>
                      </div>
                      <div className="text-white/60 text-sm font-medium">{rate.additional}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note about IGIC */}
              <div className="p-8 rounded-3xl border border-dashed border-primary/20 bg-beige/30">
                <p className="text-sm text-primary/60 italic">
                  * Los precios de servicio no incluyen IGIC. Se aplicará el tipo impositivo correspondiente según la normativa vigente en las Islas Canarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
