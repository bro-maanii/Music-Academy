import React from "react";
import type { Metadata } from "next";
import CourseListing from "@/components/CourseListing";
import { coursesByLevel } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Advanced Courses",
  description:
    "Advanced courses in songwriting, violin technique and electronic music production for experienced musicians.",
};

export default function AdvancedCoursesPage() {
  return (
    <CourseListing
      eyebrow="Advanced"
      title="Refine, and perform"
      description="For musicians with real hours behind them. Expect detailed critique, harder repertoire and work you would be happy to release."
      courses={coursesByLevel("Advanced")}
      activeHref="/courses/Advanced"
    />
  );
}
