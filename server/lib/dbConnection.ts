import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "admin",
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 3306,
  database: process.env.DATABASE_DATABASE || "database",
});

export const getDb = async () => {
  const results = await drizzle(connection);
  return results;
};
