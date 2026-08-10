import CourseData from "@/Data/music_courses.json";

export interface ICourse {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  description: string;
  IsFeature: boolean;
  image: string;
  price: number;
}

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export const allCourses: ICourse[] = CourseData.courses;

export function coursesByLevel(level: CourseLevel): ICourse[] {
  return allCourses.filter((course) => course.level === level);
}

export const featuredCourses: ICourse[] = allCourses.filter(
  (course) => course.IsFeature
);

/** Tailwind classes for the coloured level pill on a course card. */
export const levelStyles: Record<string, string> = {
  Beginner: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  Intermediate: "border-sky-400/25 bg-sky-400/10 text-sky-300",
  Advanced: "border-amber-400/25 bg-amber-400/10 text-amber-300",
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
}
