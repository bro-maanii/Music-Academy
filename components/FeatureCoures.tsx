"use client"
import React from "react";
import CourseData from "../Data/music_courses.json";
import Image from "next/image";
import p1 from "../public/Image/SaxophoneBasics.jpg";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface ICourse {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  description: string;
  IsFeature: boolean;
  image: string;
}

function FeatureCoures() {
  const courses = CourseData.courses.filter(
    (course: ICourse) => course.IsFeature === true
  );
  return (
    <div className="py-12  bg-black dark:bg-white  bg-grid-white/[0.2] dark:bg-grid-black/[0.2] relative">
      {/* text */}
      <div className="flex flex-col text-center gap-4 pb-4 text-white">
        <h2 className="text-2xl font-bold">Featured Courses</h2>
        <p className="text-4xl font-medium">
          Explore our top courses and start learning today
        </p>
      </div>
      {/* Course Card */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3">
          {courses.map((course: ICourse) => (
            <div key={course.id} className="flex justify-evenly align-middle">
            <BackgroundGradient className="flex flex-col h-full rounded-[22px] w-full p-5 md:p-7 lg:p-12 bg-white dark:bg-zinc-900 transition duration-300">
              <Image
                src={p1}
                alt="jordans"
                height="500"
                width="700"
                className="flex object-cover"
              />

              
              <div className="flex flex-col gap-2 mb-3 mt-auto">
                <p className="text-center text-base sm:text-xl text-black  dark:text-neutral-200 mt-auto">
                {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Instructor: <span className="font-semibold italic">{course.instructor}</span> 
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: <span className="font-semibold italic">{course.duration}</span>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: <span className="font-semibold italic">{course.description}</span>
              </p>
              
              </div>
              
              <button className="flex justify-center gap-1 hover:text-red-600  hover:gap-4  transition duration-500 rounded-full pl-4 pr-1 py-1  text-white space-x-1 bg-black mt-auto text-sm font-bold dark:bg-zinc-800">
                see more <span className="ml-1 hover:ml-3">&rarr;</span>
              </button>
            </BackgroundGradient>
          </div>
          ))}
        </div>
     
      {/* Button */}
      <div className="flex justify-center items-center py-6">
        <Link href={"/"}>
          <button className=" bg-gradient-to-br from-slate-800 to-cyan-950  text-white p-2 rounded-3xl ">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCoures;
