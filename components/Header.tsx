'use client';

import Link from 'next/link';
import { useI18n, useChangeLocale, useCurrentLocale } from '@/locales/client';

export default function Header() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const toggleLanguage = () => {
    const targetLocale = currentLocale === 'en' ? 'nl' : 'en';
    changeLocale(targetLocale);
  };

  const targetLocaleDisplay = currentLocale === 'en' ? 'NL' : 'EN';

  return (
    // Шапка фиксирована поверх всего. ADS баннер выше не фиксирован, поэтому он прокрутится.
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-white">{t('header.logoText')}</div>
        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 text-sm text-white">
          <Link href="#" className="hover:underline hidden md:inline">{t('header.nav.home')}</Link>
          <Link href="#" className="hover:underline hidden md:inline">{t('header.nav.about')}</Link>
          {/* <Link href="#" className="hover:underline hidden md:inline">{t('header.nav.roofTypes')}</Link> */}
          {/* <Link href="#" className="hover:underline hidden md:inline">{t('header.nav.portfolio')}</Link> */}
          <Link href="#" className="hover:underline hidden sm:inline">{t('header.nav.services')}</Link>
          <Link href="#" className="hover:underline">{t('header.nav.contact')}</Link>
          <button className="ml-2 md:ml-4 border border-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm hover:bg-white hover:text-black transition">
            {t('header.nav.ctaButton')}
          </button>
          <button
            onClick={toggleLanguage}
            className="ml-2 border border-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm hover:bg-white hover:text-black transition"
            title={t('header.languageSwitcher', { locale: targetLocaleDisplay })}
          >
            {targetLocaleDisplay}
          </button>
        </nav>
      </div>
    </header>
  );
}