import axios from "axios";
import type { course } from "../../interfaces/courseInterfaces.js";
import { insertCourses } from "../../db/repository/dbCustomOperations.js";

export async function fetchNPTEL() {
  await axios.get("https://api.nptelprep.in/courses/").then((res) => {
    let data = res.data.courses;
    let courses: course[] = [];
    data.forEach((e: course) => {
      let course: course = {
        course_code: e.course_code,
        course_provider: "NPTEL",
        course_name: e.course_name,
      };
      courses.push(course);
    });
    insertCourses(courses);
  });
}
