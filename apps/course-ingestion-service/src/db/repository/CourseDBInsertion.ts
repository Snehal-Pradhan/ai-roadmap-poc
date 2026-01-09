import { insertCourses } from "./dbCustomOperations.js";
import type { DBcourse } from "../../interfaces/courseInterfaces.js";

/*
any third party course provider can be added via `CourseDBInsertion()` function.

Coursera & Edx support is added via this function.

read "" for more details.

*/

interface InputData {
  course_name: string;
  url: string;
}

const data: InputData[] = [];

export async function CourseDBInsertion() {
  let NormalizedData: DBcourse[] = [];
  data.forEach(({ course_name, url }) => {
    let NormalizedCourse: DBcourse = {
      course_name: course_name,
      url: url,
      course_provider: "Coursera",
    };
    NormalizedData.push(NormalizedCourse);
  });

  insertCourses(NormalizedData);
}
