'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarField from '@/components/ui/StarField';
import { COMPANY } from '@/lib/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <StarField />

      {/* Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute"
          style={{
            left: '20%',
            top: '30%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
            animation: 'nebula-drift 38s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute"
          style={{
            left: '75%',
            top: '60%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 65%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
            animation: 'nebula-drift 44s ease-in-out 6s infinite alternate',
          }}
        />
      </div>

      {/* Shooting Star */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '-10%',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 8px #fff, 0 0 24px rgba(255,255,255,0.6)',
            animation: 'shootingStar 12s linear 3s infinite',
            opacity: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '100%',
              width: '140px',
              height: '1.5px',
              background: 'linear-gradient(to left, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 30%, transparent 100%)',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={staggerItem} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Agencia de Marketing Digital
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={staggerItem}
          className="text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tight leading-[0.95] text-white"
        >
          Hacemos
          <br />
          crecer tu <span className="text-gradient italic pr-4">marca.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="mt-8 text-white/50 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          Estrategia, contenido y gestión de redes sociales para empresas y emprendedores
          que buscan resultados reales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center gap-2"
          >
            Empezá tu proyecto
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <Link
            href="/servicios"
            className="px-8 py-4 rounded-xl border border-white/15 text-white/70 font-semibold text-lg hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            Conocé nuestros servicios
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={staggerItem}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-[0.15em] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
