import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isValidLocale,
  locales,
  LOCALE_COOKIE,
} from "@/i18n/config";

function negotiateLocale(request: NextRequest): string {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isValidLocale(cookie)) {
    return cookie;
  }

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  for (const locale of locales) {
    if (accept.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.has(LOCALE_COOKIE)) {
    const locale = negotiateLocale(request);
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
