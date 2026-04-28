/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { translations, type Language } from '../lib/translations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const t = translations[lang].nav;
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=800',
      title: 'Arte en cada loncha',
      desc: 'Corte artesanal a cuchillo por expertos.',
      colSpan: 'md:col-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1628103130541-2b62d31e9c20?auto=format&fit=crop&q=80&w=800',
      title: 'Veteado Único',
      desc: 'Selección de las mejores piezas 100% ibéricas.'
    },
    {
      url: 'https://images.unsplash.com/photo-1628103130539-803fac599424?auto=format&fit=crop&q=80&w=800',
      title: 'Presentación Gourmet',
      desc: 'Estética y sabor en perfecta armonía.'
    },
    {
      url: 'https://images.unsplash.com/photo-1511216173041-697917289ab0?auto=format&fit=crop&q=80&w=800',
      title: 'Eventos Corporativos',
      desc: 'Presencia y profesionalidad en tu stand.',
      colSpan: 'md:col-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1541329164087-02830319ca03?auto=format&fit=crop&q=80&w=800',
      title: 'Show Gastronómico',
      desc: 'Un espectáculo inolvidable para tus invitados.'
    },
    {
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
      title: 'Bodas de Ensueño',
      desc: 'El toque de distinción que tu boda merece.'
    }
  ];

  useEffect(() => {
    const items = gsap.utils.toArray('.gallery-item');
    
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'expo.out'
      });
    });
  }, []);

  return (
    <section id="gallery" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase mb-2 block text-sm">Experiencia Visual</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary leading-none tracking-tighter">{t.gallery}</h2>
          </div>
          <div className="max-w-sm text-primary/60 text-lg leading-relaxed flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-maroon shrink-0" />
            <p>Cada loncha es una obra de arte, cada evento una experiencia sensorial inolvidable.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[350px]">
          {images.map((img, i) => (
            <div 
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-[2.5rem] shadow-xl shadow-primary/5 ${img.colSpan || ''}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold font-display">{img.title}</h4>
                <p className="text-sm text-beige/80 mt-2 font-medium">{img.desc}</p>
                <div className="mt-4 w-10 h-1 bg-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform delay-300 duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
