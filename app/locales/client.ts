"use client";

import { createI18nClient } from "next-international/client";

// ? == i18n ==
// ? https://next-international.vercel.app/docs/app-setup

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
