'use client';

import Image from "next/image";
import { useI18n } from "@/locales/client";
import { Check } from "lucide-react"

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
            <span className="text-sm font-bold tracking-wider uppercase text-green-600">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-gray-900">{t('aboutSection.title')}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutSection.description')}
            </p>
            <div className="space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-first lg:order-last">
            <Image
              src="/images/About.jpg" // 500x600
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