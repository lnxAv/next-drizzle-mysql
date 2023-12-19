import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env.local",
});

export default {
  schema: "./server/db_tables.ts",
  out: "./server/drizzle",
  driver: "mysql2",
  dbCredentials: {
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOST || "",
    port: Number(process.env.RDS_PORT),
    database: process.env.RDS_DATABASE || "",
  },
} satisfies Config;
