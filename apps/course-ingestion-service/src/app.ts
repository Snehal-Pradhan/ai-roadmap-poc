import { dbConnect } from "./db/connection/db.js";
import { insertCourses } from "./db/repository/dbCustomOperations.js";
import type { course } from "./interfaces/courseInterfaces.js";

dbConnect();

const coursesData: course[] = [
  {
    course_code: "101020",
    course_provider: "NPTEL",
    course_name: "Aerospace Engineering",
    material: ["spaceship.pdf", "rocket.mp4"],
  },
  {
    course_code: "101021",
    course_provider: "Coursera",
    course_name: "Data Structures",
    material: ["arrays.pdf", "linked_lists.mp4"],
  },
  {
    course_code: "101022",
    course_provider: "Edx",
    course_name: "Quantum Physics",
    material: ["schrodinger.pdf"],
  },
];

insertCourses(coursesData);
