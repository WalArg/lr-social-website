'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import StarField from '@/components/ui/StarField';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES, COMPANY } from '@/lib/constants';
import { staggerItem, fadeInUp } from '@/lib/animations';
import type { Metadata } from 'next';

function ServiceDetailCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-8 md:p-10 group"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Icon + Number */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>
          <span className="block mt-3 text-xs font-bold text-white/20 tracking-[0.2em]">
            0{index + 1}
          </span>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-white/50 text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, j) => (
              <div
                key={j}
                className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <StarField />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_60%)]" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Nuestros Servicios
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-[0.95]">
              Soluciones para
              <br />
              <span className="text-gradient">tu marca.</span>
            </h1>
            <p className="mt-8 text-white/50 text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
              Todo lo que tu marca necesita para crecer en redes sociales, en un solo lugar.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="max-w-[1400px] mx-auto space-y-10">
          {SERVICES.map((service, i) => (
            <ServiceDetailCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            ¿Listo para <span className="text-gradient">empezar</span>?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Escribinos por WhatsApp y contanos sobre tu proyecto. La primera consulta es sin cargo.
          </p>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            Empezá tu proyecto →
          </a>
        </motion.div>
      </section>
    </>
  );
}
