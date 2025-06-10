'use client';

import { Button } from "@/components/ui/Button";
import { useI18n } from "@/locales/client";

export default function ContactSection() {
  const t = useI18n();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  
  // Get values
  const name = data.name || '';
  const phone = data.phone || '';
  const email = data.email || '';
  const message = data.message || '';

  const whatsappNumber = "31616498559";

  // The Request form
  const messageText = `
New message from 87BouwGroep:
-----------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
-----------------------------
Message:
${message}
  `.trim();

  // Encode
  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{t('contactSection.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSection.subheading')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={t('contactSection.form.namePlaceholder')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('contactSection.form.phonePlaceholder')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t('contactSection.form.emailPlaceholder')}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <textarea
              name="message"
              placeholder={t('contactSection.form.messagePlaceholder')}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            ></textarea>
            <Button
              type="submit" 
              variant="primary"
              className="w-full text-sm py-3 rounded-md" 
            >
              {t('contactSection.form.sendButton')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}