import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
 
const intlMiddleware = createMiddleware({
  locales: ['en', 'de', 'hr', 'it'],
  defaultLocale: 'en'
});

const locales = new Set(['en', 'de', 'hr', 'it']);

export default function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split('/').filter(Boolean);

  if (segments.length > 1 && locales.has(segments[0]) && segments[0] === segments[1]) {
    const url = request.nextUrl.clone();
    url.pathname = `/${[segments[0], ...segments.slice(2)].join('/')}`;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}
 
export const config = {
  matcher: ['/', '/(de|en|hr|it)/:path*']
};