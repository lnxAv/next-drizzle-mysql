import { createI18nServer } from "next-international/server";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("./lang/en"),
    fr: () => import("./lang/fr"),
  });
