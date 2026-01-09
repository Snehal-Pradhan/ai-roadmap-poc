import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";

// any new provider can be added in `courseProviderEnum`

export const courseProviderEnum = pgEnum("course_provider", [
  "NPTEL",
  "Coursera",
  "Edx",
]);

export const coursesTable = pgTable("courses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  url: varchar("url").notNull(),
  course_provider: courseProviderEnum("course_provider").notNull(),
  course_name: varchar("course_name"),
});
