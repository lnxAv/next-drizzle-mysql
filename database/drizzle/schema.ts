import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  varchar,
  int,
  index,
  foreignKey,
  tinytext,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const exampleLang = mysqlTable(
  "example_lang",
  {
    kLang: varchar("k_lang", { length: 5 }).notNull(),
  },
  (table) => ({
    exampleLangKLangPk: primaryKey({
      columns: [table.kLang],
      name: "example_lang_k_lang_pk",
    }),
  }),
);

export const examplePost = mysqlTable(
  "example_post",
  {
    kExample: int("k_example").notNull(),
  },
  (table) => ({
    examplePostKExamplePk: primaryKey({
      columns: [table.kExample],
      name: "example_post_k_example_pk",
    }),
  }),
);

export const exampleText = mysqlTable(
  "example_text",
  {
    kText: int("k_text").notNull(),
    fkPost: int("fk_post")
      .notNull()
      .references(() => examplePost.kExample),
    exampleTextcol: tinytext("example_textcol"),
    fkLang: varchar("fk_lang", { length: 5 }).references(
      () => exampleLang.kLang,
      { onDelete: "cascade", onUpdate: "cascade" },
    ),
  },
  (table) => ({
    exampleIdIdx: index("example_id_idx").on(table.fkPost),
    langIdIdx: index("lang_id_idx").on(table.fkLang),
    exampleTextKTextPk: primaryKey({
      columns: [table.kText],
      name: "example_text_k_text_pk",
    }),
  }),
);
