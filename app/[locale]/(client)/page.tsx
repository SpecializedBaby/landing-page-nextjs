// This page is a Server Component by default, but it will render Client Components.

import Header from '@/components/Header';
import AdsBanner from '@/components/AdsBanner';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    // font-sans и text-white должны применяться глобально через layout.tsx или globals.css
    // min-h-screen для общего контейнера, если нужно, чтобы страница всегда занимала минимум высоту экрана
    <div className="relative w-full"> {/* Удален min-h-screen отсюда, т.к. HeroSection уже h-screen */}
      <AdsBanner /> {/* Этот баннер будет вверху и прокрутится */}
      <Header />    {/* Шапка фиксирована */}
      <HeroSection />
      {/* Здесь будут другие секции вашей страницы */}
    </div>
  );
}