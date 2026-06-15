'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { COMPANY } from '@/lib/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[80px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={staggerItem}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={staggerItem}
          className="text-5xl md:text-6xl lg:text-[6rem] font-black tracking-tight leading-[0.95] mb-8"
        >
          ¿Listo para dar el
          <br />
          <span className="text-gradient italic">siguiente paso?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="text-white/50 text-xl max-w-2xl mx-auto mb-12"
        >
          Escribinos y contanos sobre tu proyecto. Te armamos una propuesta a medida sin compromiso.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] group"
          >
            Escribinos
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-white/15 text-white/70 font-semibold hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            📸 Seguinos en Instagram
          </a>
        </motion.div>

        {/* Rotating badge */}
        <motion.div
          variants={staggerItem}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] fill-white/30 font-bold tracking-[0.3em] uppercase">
                  <textPath href="#circlePath">
                    LR SOCIAL CONTENT · ARGENTINA ·&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary text-xl">✦</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
