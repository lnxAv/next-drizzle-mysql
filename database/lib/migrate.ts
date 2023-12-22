import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { connection, getDb } from "./dbConnection";

// This will run migrations on the database, skipping the ones already applied

const db = await getDb();
if (db) await migrate(db, { migrationsFolder: "./drizzle" });
// Don't forget to close the connection, otherwise the script will hang
await connection.con?.end();
