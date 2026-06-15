'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative bg-surface border-t border-surface-border/50">
      {/* Top CTA Bar */}
      <div className="border-b border-surface-border/30">
        <div className="w-full px-6 md:px-12 lg:px-20 mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-2xl">
            ¿Listo para hacer crecer tu marca?
          </p>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-xl bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Escribinos →
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-20 mx-auto py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="LR Social Content Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl text-primary leading-tight">
                SOCIAL MEDIA AND CONTENT
              </span>
            </div>
            <p className="text-white/50 text-xl leading-relaxed mb-10">
              Agencia de marketing digital especializada en redes sociales. Transformamos tu presencia digital con estrategia, contenido y resultados reales.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-bold text-2xl mb-8">Servicios</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/servicios" className="text-white/50 hover:text-primary transition-colors text-xl">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/50 hover:text-primary transition-colors text-xl">
                  Creación de Contenido
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/50 hover:text-primary transition-colors text-xl">
                  Publicidad Digital (Ads)
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/50 hover:text-primary transition-colors text-xl">
                  Estrategia Digital
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-bold text-2xl mb-8">Navegación</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-primary transition-colors text-xl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-bold text-2xl mb-8">Contacto</h4>
            <ul className="space-y-6 text-white/50 text-xl">
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-border/30">
        <div className="w-full px-6 md:px-12 lg:px-20 mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-lg">
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-lg">
            Hecho con ❤️ en Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
