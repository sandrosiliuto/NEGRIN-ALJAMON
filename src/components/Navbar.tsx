/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { translations, type Language } from '../lib/translations';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

import Logo from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.services, href: '#services' },
    { name: t.gallery, href: '#gallery' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'fr', label: 'FR' },
    { code: 'ru', label: 'RU' },
    { code: 'zh', label: 'ZH' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Logo light={!isScrolled} />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-accent transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-primary/10">
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-primary/5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-beige transition-colors",
                    lang === l.code && "bg-maroon text-white hover:bg-maroon"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <a 
            href="https://wa.me/34670765394"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-maroon transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>WA</span>
          </a>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-beige/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-primary/10"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/34670765394"
            className="bg-primary text-white p-4 rounded-xl text-center font-bold"
          >
            {translations[lang].contact.whatsapp}
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
