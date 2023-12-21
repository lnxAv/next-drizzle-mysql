"use server";

import { createI18nServer } from "next-international/server";

// ? == i18n ==
// ? https://next-international.vercel.app/docs/app-setup

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("./lang/en"),
    fr: () => import("./lang/fr"),
  });
