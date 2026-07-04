import {
  defaultLocale,
  isValidLocale,
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (!raw || !isValidLocale(raw)) {
    return null;
  }

  return raw;
}

export function writeStoredLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export function setLocaleCookie(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export async function setLocale(locale: Locale): Promise<void> {
  if (!isValidLocale(locale)) {
    return;
  }

  writeStoredLocale(locale);
  setLocaleCookie(locale);
}

export function getClientLocale(): Locale {
  return readStoredLocale() ?? defaultLocale;
}
