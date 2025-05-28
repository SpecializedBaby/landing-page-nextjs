'use client';

import { Shield, Zap, Phone } from "lucide-react";
import { useI18n } from "@/locales/client";
export default function ServicesSection() {
  const t = useI18n();

  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400 mb-4" />,
      titleKey: "servicesSection.item1_title",
      descKey: "servicesSection.item1_desc",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400 mb-4" />,
      titleKey: "servicesSection.item2_title",
      descKey: "servicesSection.item2_desc",
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-400 mb-4" />,
      titleKey: "servicesSection.item3_title",
      descKey: "servicesSection.item3_desc",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('servicesSection.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('servicesSection.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.titleKey} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300"> {/* Исправлен hover:bg-gray-750 на hover:bg-gray-700, т.к. 750 не стандартный Tailwind цвет */}
              {service.icon}
              <h3 className="text-xl font-bold mb-4">{t(service.titleKey as any)}</h3> {/* as any - для обхода TS, если ключи не строго типизированы для t */}
              <p className="text-gray-400">{t(service.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}