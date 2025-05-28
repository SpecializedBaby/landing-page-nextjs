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
      colors: {
        'brand-green': {
          DEFAULT: '#77B95C',
          light: '#8BC63F',
          dark: '#5E9D48',
        },
      },
    },
  },
  plugins: [
    // Здесь можно подключить плагины Tailwind, если они нужны
    // require('tailwindcss-animate'),
  ],
};

export default config;