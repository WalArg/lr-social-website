'use client';

import { INDUSTRIES } from '@/lib/constants';

export default function Marquee() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="relative py-12 bg-surface/50 border-y border-surface-border/30 overflow-hidden">
      {/* Label */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
          Industrias que confían en nosotros
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative overflow-hidden">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface/50 to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap marquee-track">
          {items.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="flex items-center gap-6 mx-8"
            >
              <span className="text-white/40 font-semibold text-sm tracking-[0.1em] uppercase hover:text-primary transition-colors duration-300 cursor-default">
                {industry}
              </span>
              <span className="text-primary/30 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
