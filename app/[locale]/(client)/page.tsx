// This page is a Server Component by default, but it will render Client Components.

import Header from '@/components/Header'; // Настройте путь
import HeroSection from '@/components/HeroSection'; // Настройте путь
import ServicesSection from '@/components/ServicesSection'; // Настройте путь
import PortfolioSection from '@/components/PortfolioSection'; // Настройте путь
import AboutSection from '@/components/AboutSection'; // Настройте путь
import ContactSection from '@/components/ContactSection'; // Настройте путь

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans"> {/* Основные стили для всей страницы */}
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