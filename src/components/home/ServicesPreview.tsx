'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto relative z-10">
        <SectionHeading
          badge="Servicios"
          title="¿Qué hacemos?"
          subtitle="Hover en cada servicio para explorar lo que podemos hacer por tu marca — o hacé click para ver más."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Link href="/servicios" className="block h-full">
                <div className="glass-card p-8 h-full group cursor-pointer">
                  {/* Icon */}
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <ul className="space-y-3">
                    {service.features.slice(0, 3).map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/60 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary text-base font-semibold transition-colors">
                    Ver más
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA below the grid */}
        <motion.div
          variants={staggerItem}
          className="mt-12 text-center"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white/70 font-semibold text-lg hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
          >
            Ver todos los servicios
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
