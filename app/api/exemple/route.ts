import { getI18n } from "@/app/locales/server";
import getExemple, { ExempleDataType } from "@/server/lib/exemple/getExemple";
import { NextResponse } from "next/server";

export async function GET() {
  const t = await getI18n();
  // const lang = getCurrentLocale();
  try {
    const ping = await getExemple();
    return NextResponse.json({ ping, server: t("connectionSuccess") });
  } catch (error) {
    return NextResponse.json({ ping: null, server: t("connectionFailed") });
  }
}

export type ExempleGetResponse = { ping: ExempleDataType; server: any };
