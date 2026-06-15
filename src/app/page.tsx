import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import Stats from '@/components/home/Stats';
import ServicesPreview from '@/components/home/ServicesPreview';
import ProcessSection from '@/components/home/ProcessSection';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesPreview />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
