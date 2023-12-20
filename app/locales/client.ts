"use client";

import { createI18nClient } from "next-international/client";
import { LOCALES } from "./locales";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  [LOCALES.EN]: () => import("./lang/en"),
  [LOCALES.FR]: () => import("./lang/fr"),
});
