/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { translations, type Language } from '../lib/translations';

import Logo from './Logo';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="bg-primary text-white/40 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Logo light />
          <p className="text-sm max-w-xs text-center md:text-left">
            Elevando el arte del corte a cuchillo en las Islas Canarias. Eventos exclusivos y sabores inolvidables.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-accent transition-colors">{t.nav.home}</a>
          <a href="#services" className="hover:text-accent transition-colors">{t.nav.services}</a>
          <a href="#gallery" className="hover:text-accent transition-colors">{t.nav.gallery}</a>
          <a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{t.nav.contact}</a>
        </div>

        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} NEGRIN-ALJAMON. {t.footer.rights}
          <div className="mt-2 text-[10px] uppercase tracking-widest opacity-50">
            Diseño por SSILIUTO DESIGN
          </div>
        </div>
      </div>
    </footer>
  );
}
