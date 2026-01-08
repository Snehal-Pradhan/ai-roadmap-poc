import { pgTable, varchar, pgEnum } from "drizzle-orm/pg-core";

export const courseProviderEnum = pgEnum("course_provider", [
  "NPTEL",
  "Coursera",
  "Edx",
]);

export const coursesTable = pgTable("courses", {
  course_code: varchar("course_code").primaryKey(),
  course_provider: courseProviderEnum("course_provider").notNull(),
  course_name: varchar("course_name"),
  material: varchar("material").array(),
});
