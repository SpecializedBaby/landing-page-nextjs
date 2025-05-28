'use client';

import { useI18n } from '@/locales/client'; // Adjust path based on your structure

export default function AdsBanner() {
  const t = useI18n();
  return (
    <div className="bg-black text-sm text-center py-2 px-4 text-white">
      {t('ads.bannerText')}
    </div>
  );
}