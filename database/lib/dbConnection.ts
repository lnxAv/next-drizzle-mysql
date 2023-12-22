import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const connection: { con: mysql.Connection | null } = { con: null };

//! RUNNED AT BUILD TIME
try {
  connection.con = await mysql.createConnection({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_SCHEMA,
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn("WARNING: Connection failed, read README.MD : \n ", error);
}

export const getDb = async (): Promise<MySql2Database<
  Record<string, never>
> | null> => {
  if (!connection.con) {
    // eslint-disable-next-line no-console
    console.warn("WARNING: Connection failed, read README.MD.");
    return null;
  }
  try {
    const db = drizzle(connection.con);
    return db;
  } catch (e) {
    return null;
  }
};
