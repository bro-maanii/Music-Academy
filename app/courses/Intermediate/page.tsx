import React from "react";
import type { Metadata } from "next";
import CourseListing from "@/components/CourseListing";
import { coursesByLevel } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Intermediate Courses",
  description:
    "Build real technique with intermediate courses in bass guitar, saxophone, music production and marketing.",
};

export default function IntermediateCoursesPage() {
  return (
    <CourseListing
      eyebrow="Intermediate"
      title="Build real technique"
      description="You know the basics — now sharpen them. These courses focus on tone, timing and the craft that separates practice from performance."
      courses={coursesByLevel("Intermediate")}
      activeHref="/courses/Intermediate"
    />
  );
}
