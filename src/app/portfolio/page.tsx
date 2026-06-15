'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import StarField from '@/components/ui/StarField';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROJECTS, COMPANY } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl bg-surface-light border border-surface-border/50 hover:border-primary/30 transition-all duration-500"
    >
      {/* Color Accent Bar */}
      <div
        className="h-1 w-full"
        style={{ background: project.color }}
      />

      {/* Image Placeholder */}
      <div
        className="h-64 md:h-80 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-20 h-20 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${project.color}, transparent)`,
            }}
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
            style={{
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Number */}
        <div className="absolute bottom-4 right-4">
          <span className="text-white/10 text-6xl font-black">
            0{index + 1}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            Ver proyecto →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Results */}
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full" style={{ background: project.color }} />
          <span className="text-base font-bold" style={{ color: project.color }}>
            {project.results}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-50px' });

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
              Portfolio
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-[0.95]">
              Nuestro trabajo
              <br />
              <span className="text-gradient">habla por nosotros.</span>
            </h1>
            <p className="mt-8 text-white/50 text-2xl md:text-3xl max-w-4xl mx-auto">
              Cada proyecto es un desafío único. Mirá algunos de nuestros resultados.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* More Projects Coming */}
      <section className="section-padding bg-surface text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-10 border-primary/20">
            <span className="text-4xl mb-4 block">🚀</span>
            <h2 className="text-2xl font-bold mb-4">
              Más proyectos <span className="text-gradient">en camino</span>
            </h2>
            <p className="text-white/50 mb-8">
              Estamos constantemente trabajando en nuevos proyectos.
              ¿Querés que el tuyo sea el próximo?
            </p>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              Empezá tu proyecto →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
