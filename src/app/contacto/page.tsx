'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import StarField from '@/components/ui/StarField';
import { SERVICES, COMPANY } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export default function ContactoPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `¡Hola! 👋 Soy *${formData.name}*${formData.company ? ` de *${formData.company}*` : ''}.%0A%0A` +
      `Estoy interesado/a en: ${selectedServices.join(', ') || 'Consulta general'}%0A%0A` +
      `${formData.message}%0A%0A` +
      `📧 ${formData.email}${formData.phone ? `%0A📱 ${formData.phone}` : ''}`;

    window.open(`https://wa.me/5491100000000?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <StarField />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_60%)]" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Contacto
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-[0.95]">
              Empezá tu
              <br />
              <span className="text-gradient italic">proyecto.</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <span className="text-6xl mb-4 block">🎉</span>
                    <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                    <p className="text-white/50 mb-6">
                      Te vamos a responder lo antes posible por WhatsApp.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                          Tu Nombre *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Juan Pérez"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="juan@empresa.com"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+54 11 0000 0000"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                          Empresa / Marca
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Tu empresa"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Services Selection */}
                    <div>
                      <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">
                        Servicios que te interesan
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                              selectedServices.includes(service)
                                ? 'bg-primary text-white border border-primary'
                                : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/25 hover:text-white/70'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                        Contanos sobre tu proyecto *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="¿Cuáles son tus objetivos? ¿Qué necesitás? ¿Cuál es tu presupuesto estimado?"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] tracking-wide uppercase"
                    >
                      Enviar mensaje →
                    </button>

                    <p className="text-center text-white/30 text-xs">
                      Te respondemos lo antes posible — generalmente en menos de 1 hora.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* WhatsApp Card */}
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">WhatsApp</p>
                  <p className="text-white/40 text-sm">Escribinos directo</p>
                </div>
                <span className="ml-auto text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">Instagram</p>
                  <p className="text-white/40 text-sm">@lr.socialcontent</p>
                </div>
                <span className="ml-auto text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="glass-card p-6 flex items-center gap-4 group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">Email</p>
                  <p className="text-white/40 text-sm">{COMPANY.email}</p>
                </div>
                <span className="ml-auto text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

                {/* Info Card */}
              <div className="glass-card p-8 border-primary/20">
                <h3 className="text-base font-bold text-primary tracking-[0.15em] uppercase mb-6">
                  Info
                </h3>
                <ul className="space-y-4 text-base text-white/50">
                  <li className="flex items-center gap-3">
                    <span>📍</span>
                    <span>{COMPANY.location}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🕐</span>
                    <span>Lun - Vie · 9:00 a 18:00</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>⚡</span>
                    <span>Respuesta en menos de 1 hora</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
