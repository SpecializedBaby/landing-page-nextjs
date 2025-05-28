'use client';

import { useI18n } from '@/locales/client';

export default function HeroSection() {
  const t = useI18n();
  const heroImageUrl = '/hero-image.png';

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Наложение для затемнения */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Контент Hero-секции */}
      {/* pt-[calc(value)] нужен, чтобы контент не перекрывался фиксированной шапкой */}
      {/* Предположим, высота шапки примерно 60-80px. Можно подобрать точнее. */}
      <div className="relative z-10 text-center px-4 pt-[80px] sm:pt-[100px]"> {/* Добавлен padding-top */}
        <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-white">
          {t('hero.mainHeading')}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white">
          {t('hero.subheading')}
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            {t('hero.ctaCustomOrder')}
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
            {t('hero.ctaLearnMore')}
          </button>
        </div>
      </div>
    </section>
  );
}