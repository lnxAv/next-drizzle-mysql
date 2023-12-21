import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_DATABASE,
});

export const getDb = async () => {
  try {
    const db = await drizzle(connection);
    return db;
  } catch (e) {
    return null;
  }
};
