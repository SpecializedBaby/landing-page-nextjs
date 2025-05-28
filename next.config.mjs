/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Рекомендуется для разработки
  // Здесь могут быть другие ваши настройки в будущем
  // Например, для изображений с внешних доменов:
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com', // Замените на нужный хост
  //       port: '',
  //       pathname: '/images/**', // Замените на нужный путь
  //     },
  //   ],
  // },
};

export default nextConfig;