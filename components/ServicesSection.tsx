'use client';

import { Shield, Zap, Phone } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function ServicesSection() {
  const t = useI18n();
  const services = [
    { 
      icon: <Shield className="w-8 h-8 text-green-600" />, 
      titleKey: "servicesSection.item1_title", 
      descKey: "servicesSection.item1_desc" 
    },
    { 
      icon: <Zap className="w-8 h-8 text-green-600" />, 
      titleKey: "servicesSection.item2_title", 
      descKey: "servicesSection.item2_desc" 
    },
    { 
      icon: <Phone className="w-8 h-8 text-green-600" />, 
      titleKey: "servicesSection.item3_title", 
      descKey: "servicesSection.item3_desc" 
    },
  ] as const;

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-sm font-bold tracking-wider uppercase text-green-600">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">{t('servicesSection.title')}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('servicesSection.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.titleKey} 
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            > 
              <div className="flex-shrink-0 w-20 h-20 mb-6 flex items-center justify-center bg-green-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t(service.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}