import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

export function dbConnect() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    console.log("DATABASE_URL obtained ✅");
  } catch (_) {
    console.log("Error: DATABASE_URL not found ");
    console.log("Exiting process");
    process.exit(0);
  }

  try {
    const db = drizzle({ client: sql });
    console.log("db connected successfully ✅");
  } catch (_) {
    console.log(
      "Error: db client unable to connect even if DATABASE_URL is present"
    );
    console.log("Exiting process");
    process.exit(0);
  }
}
