import React from "react";
import Image from "next/image";
import CourseData from "@/Data/music_courses.json";

function page() {
  const allcourses = CourseData.courses.filter(course => course.level === "Beginner");
  return (
    <div className="relative top-32">
      <h1 className="font-bold text-4xl  text-center">
        Total Courses: ( {allcourses.length} )
      </h1>
      <div className="grid grid-cols-3 mx-auto max-w-7xl gap-3   pt-4 ">
        {allcourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col gap-2 h-full mb-3 mt-auto p-3 border-4 border-white rounded-md bg-black  "
          >
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={300}
              loading="lazy"
              className="flex mx-auto object-cover"
            />

            <p className="text-base sm:text-xl text-white  dark:text-neutral-200 mt-auto">
              {course.title}
            </p>
            <p className="text-sm  text-white  dark:text-neutral-400">
              Instructor:{" "}
              <span className="font-semibold italic">{course.instructor}</span>
            </p>
            <p className="text-sm text-white dark:text-neutral-400">
              Duration:{" "}
              <span className="font-semibold italic">{course.duration}</span>
            </p>
            <p className="text-sm text-white dark:text-neutral-400">
              Description:{" "}
              <span className="font-semibold italic">{course.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
