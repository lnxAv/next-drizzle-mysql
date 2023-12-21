// ? == Drizzle schemas ==
// ?  https://orm.drizzle.team/docs/schemas

import { int, text, mysqlSchema, varchar } from "drizzle-orm/mysql-core";

export const exempleSchema = mysqlSchema("my_schema");

export const exempleTable = exempleSchema.table("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  lang_id: varchar("lang_id", { length: 2 }).notNull(),
});
