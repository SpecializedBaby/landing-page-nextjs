import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', ],
      },
      // Здесь вы можете добавлять другие расширения темы, если понадобятся,
      // например, пользовательские цвета, брейкпоинты и т.д.
      // colors: {
      //   'brand-blue': '#007bff', // Пример
      // },
    },
  },
  plugins: [
    // Здесь можно подключить плагины Tailwind, если они нужны
    // require('tailwindcss-animate'),
  ],
};

export default config;