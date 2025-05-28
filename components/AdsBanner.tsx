'use client';

import { useI18n } from '@/locales/client';

export default function AdsBanner() {
  const t = useI18n();
  return (
    <div className="fixed top-0 left-0 right-0 w-full h-10 flex items-center justify-center bg-black text-sm text-white px-4 z-[60]">
      {t('ads.bannerText')}
    </div>
  );
}