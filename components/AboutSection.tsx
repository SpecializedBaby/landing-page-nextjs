'use client';

import Image from "next/image";
import { useI18n } from "@/locales/client";

export default function AboutSection() {
  const t = useI18n();
  const points = [
    t('aboutSection.point1'), t('aboutSection.point2'),
    t('aboutSection.point3'), t('aboutSection.point4'),
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{t('aboutSection.title')}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('aboutSection.description')}
            </p>
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg" // 500x600 /image.jpg
              alt={t('aboutSection.title')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}