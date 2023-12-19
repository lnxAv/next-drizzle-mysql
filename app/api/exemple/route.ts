import { getCurrentLocale, getI18n } from "@/app/locales/server";
import getExemple from "@/server/lib/exemple/getExemple";
import { NextResponse } from "next/server";

export async function GET() {
  const t = await getI18n();
  const lang = getCurrentLocale();
  const message = t("info");
  try {
    const server = await getExemple();
    return NextResponse.json({ lang, message, server });
  } catch (error) {
    return NextResponse.json({ lang, message, server: t("connection_failed") });
  }
}

export type ExempleGetResponse = { lang: string; message: string; server: any };
