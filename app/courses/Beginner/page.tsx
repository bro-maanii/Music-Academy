import React from "react";
import type { Metadata } from "next";
import CourseListing from "@/components/CourseListing";
import { coursesByLevel } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Beginner Courses",
  description:
    "No experience needed. Beginner courses at Harmonia cover the fundamentals of voice, ukulele and music theory.",
};

export default function BeginnerCoursesPage() {
  return (
    <CourseListing
      eyebrow="Beginner"
      title="Start from your first note"
      description="No experience assumed and nothing skipped. These courses build the fundamentals — pitch, rhythm and technique — at a pace you can sustain."
      courses={coursesByLevel("Beginner")}
      activeHref="/courses/Beginner"
    />
  );
}
