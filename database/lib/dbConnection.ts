import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection: { con: mysql.Connection | null } = { con: null };

try {
  connection.con = await mysql.createConnection({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DATABASE,
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn("WARNING: Connection failed, read README.MD : \n ", error);
}

export const getDb = async () => {
  if (!connection.con) {
    // eslint-disable-next-line no-console
    console.warn("WARNING: Connection failed, read README.MD.");
    return null;
  }
  try {
    const db = await drizzle(connection.con);
    return db;
  } catch (e) {
    return null;
  }
};
