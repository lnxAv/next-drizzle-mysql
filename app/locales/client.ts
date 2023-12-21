"use client";

import { createI18nClient } from "next-international/client";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import("./lang/en"),
  fr: () => import("./lang/fr"),
});
