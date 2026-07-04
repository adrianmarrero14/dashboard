import LocaleSync from "@/components/settings/LocaleSync";
import { ModulesProvider } from "@/context/ModulesContext";
import { QueryProvider } from "@/context/QueryProvider";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { rootMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Outfit } from "next/font/google";
import "./globals.css";
import "flatpickr/dist/flatpickr.css";

export async function generateMetadata(): Promise<Metadata> {
  return rootMetadata();
}

const outfit = Outfit({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          <LocaleSync />
          <QueryProvider>
            <ThemeProvider>
              <ModulesProvider>
                <SidebarProvider>{children}</SidebarProvider>
              </ModulesProvider>
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
