// components/ServicesSection.tsx
'use client';

import { Shield, Zap, Phone } from "lucide-react";
import { useI18n } from "@/locales/client"; // Убедитесь, что путь верный

export default function ServicesSection() {
  const t = useI18n();

  // Используем "as const" для массива, чтобы titleKey и descKey
  // были типизированы как строковые литералы, а не просто string
  const services = [
    { 
      icon: <Shield className="w-12 h-12 text-green-500 mb-4" />, 
      titleKey: "servicesSection.item1_title", 
      descKey: "servicesSection.item1_desc" 
    },
    { 
      icon: <Zap className="w-12 h-12 text-green-500 mb-4" />, 
      titleKey: "servicesSection.item2_title", 
      descKey: "servicesSection.item2_desc" 
    },
    { 
      icon: <Phone className="w-12 h-12 text-green-500 mb-4" />, 
      titleKey: "servicesSection.item3_title", 
      descKey: "servicesSection.item3_desc" 
    },
  ] as const; // <--- ВАЖНОЕ ИЗМЕНЕНИЕ

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Для этих ключей также передаем {}, так как ошибка "Expected 2 arguments" 
            могла возникать из-за того, что тип t ожидает второй параметр.
            Если эти ключи точно не имеют переменных, и после фиксации service.titleKey 
            ошибка для них не возникает без {}, их можно убрать. Но безопаснее оставить.
          */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{t('servicesSection.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesSection.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.titleKey} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"> 
              {service.icon}
              {/* Теперь service.titleKey будет иметь конкретный строковый тип 
                (например, "servicesSection.item1_title"), который соответствует ожиданиям t.
                Второй аргумент {} передаем, так как предыдущая ошибка "Expected 2 arguments"
                указывала на то, что TypeScript для функции t ожидает два аргумента 
                для рассматриваемых перегрузок.
              */}
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t(service.titleKey)}</h3>
              <p className="text-gray-700">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}