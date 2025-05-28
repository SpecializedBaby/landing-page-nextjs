'use client';

import Image from "next/image";
import { Button } from "@/components/Button";
import { useI18n } from "@/locales/client";

// Вынесем функцию скролла, чтобы ее можно было переиспользовать или передать
// Но для простоты пока кнопки будут сами скроллить
const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        // Для кнопок в Hero, которые не являются частью основной навигации,
        // можно использовать более простой скролл или также учитывать offset,
        // если они тоже должны точно позиционировать начало секции под шапкой.
        // Пока оставим простой скролл, т.к. scrollToSection в Header уже учитывает offset.
        const adsBannerHeight = 40; 
        const headerHeight = window.innerWidth < 1024 ? 64 : 80; 
        const offset = adsBannerHeight + headerHeight;
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
    }
};

export default function HeroSection() {
  const t = useI18n();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.png"
          alt={t('hero.mainHeadingPart1')} // alt-описание
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Оверлей */}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Добавлен отступ сверху, чтобы контент не был под шапкой. 
            Можно сделать более точным, зная высоту шапки (H-20 из Header = 80px) */}
        <div className="pt-[110px] lg:pt-[128px]"> 
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.mainHeadingPart1')}
            <br />
            <span className="text-blue-400">{t('hero.mainHeadingPart2')}</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t('hero.subheading')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleScrollTo("contact")}
              size="lg"
              variant="primary"
              className="font-semibold"
              // className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105"
            >
              {t('hero.ctaStartProject')}
            </Button>
            <Button
              onClick={() => handleScrollTo("portfolio")}
              size="lg"
              variant="outline"
              className="font-semibold"
              // className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              {t('hero.ctaViewWork')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}