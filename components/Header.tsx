'use client'; // Crucial for client-side hooks

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Import hooks from your client i18n setup
import { useI18n, useChangeLocale, useCurrentLocale } from '@/locales/client';

const Header = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  // ... rest of your Header component logic from before ...

  // Example usage (ensure your translation keys match)
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-transparent`} // Simplified for example
    >
      <div className="bg-gray-800 bg-opacity-80 text-center py-2 text-sm">
        <p>{t('header.ads')}</p>
      </div>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold">
          FlatRoof NL
        </Link>
        <div className="space-x-6 flex items-center">
          <Link href="#services">{t('header.nav.services')}</Link>
          {/* Language Switcher */}
          <button onClick={() => changeLocale(currentLocale === 'en' ? 'nl' : 'en')}>
            Switch to {currentLocale === 'en' ? 'NL' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;