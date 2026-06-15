'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });

  const rocketY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.04),transparent_60%)]" />

      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto relative z-10">
        <SectionHeading
          badge="Proceso"
          title="Cómo trabajamos"
          subtitle="Un proceso simple, claro y orientado a resultados."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative py-12"
        >
          {/* Vertical Line & Animated Rocket */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent">
            <motion.div
              style={{ top: rocketY }}
              className="absolute left-1/2 z-30 -translate-x-1/2 -mt-6"
            >
              <div className="relative flex justify-center items-center w-[96px] h-[128px]">
                {/* Thruster glow */}
                <motion.div 
                  animate={{ scaleX: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" 
                  style={{ width: 64, height: 44, background: 'radial-gradient(rgba(139, 92, 246, 0.8) 0%, transparent 70%)' }}
                />
                
                <svg width="80" height="120" viewBox="0 0 40 60" fill="none">
                  {/* Flames */}
                  <motion.g 
                    animate={{ scaleY: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "20px 8px" }}
                    opacity={0.8}
                  >
                    <ellipse cx="20" cy="8" rx="7" ry="9" fill="#8B5CF6" />
                  </motion.g>
                  <motion.g 
                    animate={{ scaleY: [0.9, 1.2, 0.9] }}
                    transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    style={{ transformOrigin: "20px 10px" }}
                  >
                    <ellipse cx="20" cy="10" rx="4" ry="6" fill="#C084FC" />
                  </motion.g>
                  <motion.g 
                    animate={{ scaleY: [1, 1.3, 1] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ transformOrigin: "20px 12px" }}
                  >
                    <ellipse cx="20" cy="12" rx="2" ry="3.5" fill="white" />
                  </motion.g>
                  
                  {/* Rocket body */}
                  <ellipse cx="20" cy="34" rx="12" ry="18" fill="#e8e8e8" />
                  <path d="M20 58 C12 58 8 46 8 40 H32 C32 46 28 58 20 58Z" fill="white" />
                  
                  {/* Window */}
                  <circle cx="20" cy="30" r="7" fill="#0a0a12" />
                  <circle cx="20" cy="30" r="7" fill="rgba(139,92,246,0.2)" />
                  <circle cx="23" cy="27" r="2.5" fill="rgba(255,255,255,0.6)" />
                  
                  {/* Fins & Details */}
                  <path d="M8 22 L1 14 L8 16 Z" fill="#8B5CF6" />
                  <path d="M32 22 L39 14 L32 16 Z" fill="#8B5CF6" />
                  <rect x="8" y="36" width="24" height="4" rx="2" fill="rgba(139,92,246,0.3)" />
                </svg>
              </div>
            </motion.div>
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-16 last:mb-0 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number Circle */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <span className="text-primary font-bold text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] glass-card p-8 hover:border-primary/50 transition-colors ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-[calc(50%-4rem)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
