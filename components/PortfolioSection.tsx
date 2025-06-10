'use client';

import Image from "next/image";
import { useI18n } from "@/locales/client";

export default function PortfolioSection() {
  const t = useI18n();
  const portfolioItems = [1, 2, 3, 4, 5, 6]; 

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{t('portfolioSection.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('portfolioSection.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item} className="relative overflow-hidden rounded-2xl group aspect-[3/2] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={`/images/Project-${item}.jpg`} // 600 400
                alt={t('portfolioSection.projectTitle', { number: item })}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 p-2">
                <h3 className="text-lg font-bold text-white">{t('portfolioSection.projectTitle', { number: item })}</h3>
                <p className="text-gray-200 text-sm">{t('portfolioSection.projectType')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}