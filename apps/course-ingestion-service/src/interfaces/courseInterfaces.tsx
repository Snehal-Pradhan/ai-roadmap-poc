export type course_provider = "NPTEL" | "Coursera" | "Edx";

export interface course {
  course_code: string;
  course_provider: course_provider;
  course_name: string;
  material: string[];
}
