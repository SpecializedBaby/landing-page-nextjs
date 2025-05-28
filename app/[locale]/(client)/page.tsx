// This page is a Server Component by default, but it will render Client Components.
import AdsBanner from '@/components/AdsBanner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans"> {/* Основные стили для всей страницы */}
      <AdsBanner />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      {/* Footer */}
    </div>
  );
}