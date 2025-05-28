'use client';

import { Button } from "@/components/ui/Button";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // Управляет видимостью шапки
  const [lastScrollY, setLastScrollY] = useState(0);    // Последняя позиция скролла
  const [changeHeaderBackground, setChangeHeaderBackground] = useState(false); // Для смены фона

  const ADS_BANNER_HEIGHT_PX = 40; // Высота ADS баннера в пикселях (соответствует h-10)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Логика для смены фона шапки (когда немного проскроллили)
      setChangeHeaderBackground(currentScrollY > 10);

      // Логика для показа/скрытия шапки
      if (typeof window !== 'undefined') { // Убедимся, что window определен
        if (currentScrollY > lastScrollY && currentScrollY > (ADS_BANNER_HEIGHT_PX + 50)) {
          // Скролл вниз и прошли порог (высота ADS + 50px)
          if (showHeader) setShowHeader(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= (ADS_BANNER_HEIGHT_PX + 10)) {
          // Скролл вверх ИЛИ находимся очень близко к верху (сразу под ADS баннером + 10px)
          if (!showHeader) setShowHeader(true);
        }
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Обновляем lastScrollY
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showHeader]); // Добавляем showHeader в зависимости

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth < 1024 ? 64 : 80; // h-16 или lg:h-20
      // Общий отступ от верха окна браузера до начала контента секции
      // Учитываем, что Header может быть скрыт, но ADS баннер всегда на месте
      const totalOffset = showHeader ? ADS_BANNER_HEIGHT_PX + headerHeight : ADS_BANNER_HEIGHT_PX;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - totalOffset;

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
      className={cn(
        "fixed left-0 right-0 w-full z-50 top-10", // Базовая позиция ПОД ADS баннером (h-10 = 40px)
        "transition-all duration-300 ease-in-out", // Плавность для фона и transform
        changeHeaderBackground ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent",
        showHeader ? "translate-y-0" : "-translate-y-full" // Анимация сдвига вверх/вниз
      )}
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

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="default"
            >
              {t('nav.getAQuote')}
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                title={t('nav.languageSwitcherTitle', { locale: targetLocaleDisplay})}
            >
                {targetLocaleDisplay}
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] py-4 border-t border-white/10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 px-2">
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
              variant="primary"
              className="w-full mt-3 py-3"
            >
              {t('nav.getAQuote')}
            </Button>
            <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full mt-3 py-3"
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