'use client';

import { Button } from "@/components/Button";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function Header() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Добавляем смещение, равное общей высоте фиксированных элементов
      const adsBannerHeight = 40; // 2.5rem или h-10
      const headerHeight = window.innerWidth < 1024 ? 64 : 80; // h-16 или h-20
      const offset = adsBannerHeight + headerHeight;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.services'), href: "services" },
    { label: t('nav.portfolio'), href: "portfolio" },
    { label: t('nav.about'), href: "about" },
    { label: t('nav.contact'), href: "contact" },
  ];

  const toggleLanguage = () => {
    const targetLocale = currentLocale === 'en' ? 'nl' : 'en';
    changeLocale(targetLocale);
  };
  const targetLocaleDisplay = currentLocale === 'en' ? 'NL' : 'EN';

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
              {t('nav.logoPart1')}<span className="text-blue-400">{t('nav.logoPart2')}</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <Button
              onClick={() => scrollToSection("contact")}
              size="default"
              variant="primary"
              // className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              {t('nav.getAQuote')}
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                // className="text-white border-white/50 hover:bg-white/10 hover:text-white px-3 py-1 rounded-full"
                title={t('nav.languageSwitcherTitle', { locale: targetLocaleDisplay})}
            >
                {targetLocaleDisplay}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden" // text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2 px-2 rounded-md hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full mt-3"
            >
              {t('nav.getAQuote')}
            </Button>
            <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full text-white border-white/50 hover:bg-white/10 hover:text-white py-3 rounded-full mt-3"
                title={t('nav.languageSwitcherTitle', { locale: targetLocaleDisplay})}
            >
                {targetLocaleDisplay}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}