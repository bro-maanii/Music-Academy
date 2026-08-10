import React from "react";
import type { Metadata } from "next";
import CourseListing from "@/components/CourseListing";
import { allCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Every course at Harmonia — performance, production and theory, across beginner, intermediate and advanced levels.",
};

export default function AllCoursesPage() {
  return (
    <CourseListing
      eyebrow="Catalogue"
      title="Every course we teach"
      description="From your first chord to a finished master. Browse the full programme and pick the level that fits where you are today."
      courses={allCourses}
      activeHref="/courses/AllCourses"
    />
  );
}
