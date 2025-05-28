'use client';

import { Button } from "@/components/Button";
import { useI18n } from "@/locales/client";

export default function ContactSection() {
  const t = useI18n();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    alert("Form submitted (not really, this is a placeholder)");
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('contactSection.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contactSection.subheading')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={t('contactSection.form.namePlaceholder')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('contactSection.form.phonePlaceholder')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t('contactSection.form.emailPlaceholder')}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <textarea
              name="message"
              placeholder={t('contactSection.form.messagePlaceholder')}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-lg transition-all duration-200 hover:scale-105">
              {t('contactSection.form.sendButton')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}