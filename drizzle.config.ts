import type { Config } from "drizzle-kit";
// ? == NOTE ==
// ? For local development, use dotenv to load environment variables from a .env file or pull from vercel
// ? (see ...)
import dotenv from "dotenv";

dotenv.config({
  path: "./.env.local",
});

export default {
  schema: "./database/db_tables.ts", // Path to your schema
  out: "./database/drizzle", // Path to the output directory
  driver: "mysql2",
  dbCredentials: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST || "",
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_SCHEMA || "",
  },
} satisfies Config;
