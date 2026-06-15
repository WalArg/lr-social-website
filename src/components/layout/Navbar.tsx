'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import { navbarVariants } from '@/lib/animations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-surface-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-6 md:px-12 lg:px-20 mx-auto h-24 md:h-28 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="LR Social Content Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden sm:block text-lg md:text-xl font-black text-primary transition-colors">
            SOCIAL MEDIA AND CONTENT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-primary bg-primary/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-primary text-white text-base font-bold hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Empezá tu proyecto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-6 py-3 rounded-xl text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                className="mt-6"
              >
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
                >
                  Empezá tu proyecto
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
