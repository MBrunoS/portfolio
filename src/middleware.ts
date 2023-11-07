import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en-US", "pt-BR"];
const DEFAULT_LOCALE = "en-US";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language");
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const [locale] = acceptLanguage.split(",");
  const localeMatch = LOCALES.some((supportedLocale) => {
    if (locale === supportedLocale) return true;
    return false;
  });
  return localeMatch ? locale : DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
