import { getCurrentLocale } from "@/app/locales/server";
import { eq } from "drizzle-orm";
import { getDb } from "../dbConnection";
import { exempleTable } from "../../db_tables";

/* 
    SELECT * FROM exemple_table
    WHERE exemple_table.lang_id = ${language}
*/

export default async function getExemple() {
  const lang = getCurrentLocale();
  const db = await getDb();
  if (!db) return null; // Connection Failed
  const results = await db
    .select()
    .from(exempleTable)
    .where(eq(exempleTable.lang_id, lang));
  return results;
}

export type ExempleDataType = ReturnType<typeof getExemple>;
