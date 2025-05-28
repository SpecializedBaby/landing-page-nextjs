'use client';

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/locales/client";

const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const ADS_BANNER_HEIGHT_PX = 40;
        const HEADER_HEIGHT_PX = 56;
        const totalOffset = ADS_BANNER_HEIGHT_PX + HEADER_HEIGHT_PX;
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - totalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
    }
};

export default function HeroSection() {
  const t = useI18n();
  const heroImageUrl = "/images/hero-image.png";

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt={t('hero.mainHeadingPart1')} 
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col h-full">
        <div className="text-center max-w-4xl mx-auto pt-[165px]">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {t('hero.mainHeadingPart1')}
          </h1>
          <p className="text-2xl font-semibold mb-8 text-gray-200 max-w-2xl mx-auto"> 
            {t('hero.subheading')}
          </p>
        </div>

        <div className="mt-auto text-center w-full max-w-4xl mx-auto pb-[50px]">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              onClick={() => handleScrollTo("contact")}
              variant="primary"
              className="w-full sm:w-[264px] text-sm py-2 sm:py-3 rounded-md bg-green-600 hover:bg-green-700 font-medium" 
            >
              {t('hero.ctaStartProject')}
            </Button>
            <Button
              onClick={() => handleScrollTo("portfolio")}
              variant="outline"
              className="w-full sm:w-[264px] text-sm py-2 sm:py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-black font-medium" 
            >
              {t('hero.ctaViewWork')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}