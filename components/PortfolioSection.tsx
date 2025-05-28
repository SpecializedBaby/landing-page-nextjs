'use client';

import Image from "next/image";
import { useI18n } from "@/locales/client";

export default function PortfolioSection() {
  const t = useI18n();
  const portfolioItems = [1, 2, 3, 4, 5, 6]; // Changing

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('portfolioSection.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('portfolioSection.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item}
              className="relative overflow-hidden rounded-2xl group"
            >
              <Image
                src={`/placeholder.svg`} // ?height=400&width=600&text=Project+${item}
                alt={t('portfolioSection.projectTitle', { number: item })}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold">{t('portfolioSection.projectTitle', { number: item })}</h3>
                <p className="text-gray-300 text-sm">{t('portfolioSection.projectType')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}