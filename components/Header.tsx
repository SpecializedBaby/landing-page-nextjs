'use client';

import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [changeHeaderBackground, setChangeHeaderBackground] = useState(false);

  const ADS_BANNER_HEIGHT_PX = 40;
  const HEADER_HEIGHT_PX = 56;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setChangeHeaderBackground(currentScrollY > 10);
      if (typeof window !== 'undefined') {
        if (currentScrollY > lastScrollY && currentScrollY > (ADS_BANNER_HEIGHT_PX + 50)) {
          if (showHeader) setShowHeader(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= (ADS_BANNER_HEIGHT_PX + 10)) {
          if (!showHeader) setShowHeader(true);
        }
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showHeader]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const totalOffset = showHeader ? ADS_BANNER_HEIGHT_PX + HEADER_HEIGHT_PX : ADS_BANNER_HEIGHT_PX;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.services'), href: "services" },
    { label: t('nav.portfolio'), href: "portfolio" },
    { label: t('nav.about'), href: "about" },
    { label: t('nav.contact'), href: "contact" },
  ];

  const toggleLanguage = () => changeLocale(currentLocale === 'en' ? 'nl' : 'en');
  const targetLocaleDisplay = currentLocale === 'en' ? 'NL' : 'EN';

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 w-full z-50 top-10",
        "transition-all duration-300 ease-in-out",
        changeHeaderBackground ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Image src="/logo.jpg" alt="87 bouwgroep logo" width={36} height={36} className="h-9 w-9"/>
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
              87 <span className="text-green-500">bouwgroep</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-white/90 hover:text-white transition-colors duration-200 font-medium tracking-wide">
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button onClick={() => scrollToSection("contact")} variant="primary" size="default" className="bg-green-600 hover:bg-green-700">
              {t('nav.getAQuote')}
            </Button>
            <Button variant="outline" size="sm" onClick={toggleLanguage} title={t('nav.languageSwitcherTitle', { locale: targetLocaleDisplay})}>
              {targetLocaleDisplay}
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mob menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen 
              ? "max-h-[500px] py-4 bg-white border-t border-gray-200 shadow-xl"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-2 px-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50/50 transition-colors duration-200 font-medium py-2 px-3 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              className="w-full mt-3 text-sm py-2 rounded-md"
            >
              {t('nav.getAQuote')}
            </Button>
            <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full mt-3 text-sm py-2 rounded-md text-gray-700 border-gray-400 hover:bg-gray-100 hover:text-green-600"
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