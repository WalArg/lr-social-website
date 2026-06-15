'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import StarField from '@/components/ui/StarField';
import SectionHeading from '@/components/ui/SectionHeading';
import { VALUES, COMPANY } from '@/lib/constants';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function NosotrosPage() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-50px' });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
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
              Quiénes Somos
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-[0.95]">
              Más que un servicio.
              <br />
              <span className="text-gradient">Somos un equipo.</span>
            </h1>
            <p className="mt-10 text-white/50 text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
              En LR Social Media & Content ayudamos a marcas y emprendedores a
              transformar sus redes en herramientas reales de venta — con estrategia,
              contenido de calidad y resultados medibles.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Nuestra <span className="text-gradient">historia</span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-xl">
                <p>
                  LR Social Media & Content nació de una convicción simple:
                  <strong className="text-white"> las marcas merecen una presencia digital que esté a la altura de lo que ofrecen.</strong>
                </p>
                <p>
                  Vimos que muchos emprendedores y empresas tenían productos y servicios
                  increíbles, pero sus redes sociales no los representaban. Publicaban sin
                  estrategia, sin datos, sin una voz clara.
                </p>
                <p>
                  Ahí decidimos crear algo diferente: una agencia que no solo publique contenido,
                  sino que <strong className="text-white">entienda cada marca, construya una estrategia real y entregue resultados concretos.</strong>
                </p>
                <p>
                  Hoy trabajamos con marcas de distintas industrias — gastronomía, inmobiliarias,
                  fitness, moda — y cada proyecto es único. Porque cada cliente es único.
                  Y cada plan también.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.04),transparent_60%)]" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <SectionHeading
            badge="Nuestros Valores"
            title="Lo que nos define"
          />

          <motion.div
            ref={valuesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-card p-8 text-center group"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card p-8 md:p-12 border-primary/20">
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Nuestro compromiso
            </p>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed italic">
              &ldquo;No publicamos por publicar.
              <br />
              <strong className="text-white font-bold not-italic">
                Trabajamos para que tu marca crezca de verdad.
              </strong>&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            ¿Querés ser parte del <span className="text-gradient">equipo</span>?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Nos encanta conocer nuevas marcas y proyectos. Escribinos y contanos qué tenés en mente.
          </p>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            Escribinos →
          </a>
        </motion.div>
      </section>
    </>
  );
}
