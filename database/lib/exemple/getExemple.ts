import { getCurrentLocale } from "@/app/locales/server";
import { eq } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { getDb } from "../dbConnection";
import { exempleTable } from "../../db_tables";

export default async function getExemple() {
  const lang = getCurrentLocale();
  const db: MySql2Database<Record<string, never>> | null = await getDb();

  if (!db) return null; // Connection Failed

  const results = await db
    .select()
    .from(exempleTable)
    .where(eq(exempleTable.lang_id, lang));
  return results;
}

export type ExempleDataType = Awaited<ReturnType<typeof getExemple>>;
