export type course_provider = "NPTEL" | "Coursera" | "Edx";

export interface Apicourse {
  course_name: string;
  course_provider: course_provider;
  course_code: string;
}

export interface DBcourse {
  course_name: string;
  course_provider: course_provider;
  url: string;
}
