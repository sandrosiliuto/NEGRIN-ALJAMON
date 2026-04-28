/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { translations, type Language } from '../lib/translations';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-maroon/10 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Hablemos de tu evento</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              {t.title}
            </h2>
            <p className="text-beige/60 text-lg md:text-xl max-w-md leading-relaxed mb-12">
              Disponible para eventos en Tenerife y resto de las Islas Canarias. Calidad inigualable garantizada.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-beige/40 uppercase font-bold tracking-wider mb-1">WhatsApp</div>
                  <div className="text-xl font-bold">+34 670 76 53 94</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-beige/40 uppercase font-bold tracking-wider mb-1">Ubicación</div>
                  <div className="text-xl font-bold">{t.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-beige/40 uppercase font-bold tracking-wider mb-1">Email</div>
                  <div className="text-xl font-bold">info@negrinaljamon.com</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 text-primary flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold tracking-tight">Solicita Presupuesto</h3>
              <p className="text-primary/60 leading-relaxed">
                Cada evento es único. Cuéntanos qué necesitas y te responderemos en menos de 24 horas con una propuesta personalizada.
              </p>
              
              <div className="h-[300px] w-full rounded-2xl overflow-hidden border border-primary/5">
                {/* Embedded Google Map - Tenerife */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510196238!2d-16.837894200000002!3d28.2915637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41ace549514707%3A0xf510a75adca7db0!2sTenerife!5e0!3m2!1sen!2ses!4v1714275000000!5m2!1sen!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <a 
              href="https://wa.me/34670765394"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full bg-maroon text-white p-6 rounded-2xl text-center font-bold text-xl hover:bg-primary transition-all flex items-center justify-center space-x-3 group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>{t.whatsapp}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
