import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'nl'],
  defaultLocale: 'nl', // Your default locale
  urlMappingStrategy: 'rewrite', // Or 'redirect'
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};