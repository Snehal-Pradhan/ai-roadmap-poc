import { db } from "../connection/db.js";
import { coursesTable } from "../schema/courseSchema.js";
import type { course } from "../../interfaces/courseInterfaces.js";

export async function insertCourses(courseList: course[]) {
  const courses: (typeof coursesTable.$inferInsert)[] = courseList;
  await db.insert(coursesTable).values(courses);
  console.log(`number of ${courses.length} courses added.`);
}
