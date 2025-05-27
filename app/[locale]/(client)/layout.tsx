import { ReactElement } from 'react';
import { I18nProviderClient } from '@/locales/client'; // Adjust path if locales is not at root

// The params structure depends on your Next.js version and how you fetch/await them.
// This follows your provided snippet for Next.js >= 15 style if params is a Promise.
// For many cases in Next.js 15+, params might be directly available without await if the component is async.
export default async function ClientPagesLayout({
  params, // Type it as { locale: string } if not a Promise in your specific case
  children,
}: {
  params: Promise<{ locale: string }>; // As per your snippet
  children: ReactElement;
}) {
  const { locale } = await params; // As per your snippet

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}