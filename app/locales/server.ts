import { createI18nServer } from "next-international/server";
import { LOCALES } from "./locales";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    [LOCALES.EN]: () => import("./lang/en"),
    [LOCALES.FR]: () => import("./lang/fr"),
  });
