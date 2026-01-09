import axios from "axios";
import type { Apicourse, DBcourse } from "../../interfaces/courseInterfaces.js";
import { insertCourses } from "./dbCustomOperations.js";

// NPTEL course data is accessed through their API


export async function CourseDBInsertionNPTEL() {
  await axios.get("https://api.nptelprep.in/courses/").then((res) => {
    let data = res.data.courses;
    let courses: DBcourse[] = [];
    data.forEach((e: Apicourse) => {
      let course: DBcourse = {
        url: `https://nptel.ac.in/courses/${e.course_code}`,
        course_provider: "NPTEL",
        course_name: e.course_name,
      };
      courses.push(course);
    });
    insertCourses(courses);
  });
}
