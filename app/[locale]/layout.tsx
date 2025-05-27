import { ReactNode } from 'react';
import './globals.css'; // Your global styles
import { Montserrat } from 'next/font/google'; // Assuming you still want this

const montserrat = Montserrat({ // Example font setup
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
});

export async function generateStaticParams() {
  // If you're not using getStaticParams from server.ts for some reason,
  // you can define locales manually, but using the server helper is better.
  // import { getStaticParams } from '../../locales/server';
  // return getStaticParams();
  return [{ locale: 'en' }, { locale: 'nl' }];
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={`${montserrat.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}