"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import p1 from '@/public/Image/VocalTraining.png'
import p2 from '@/public/Image/SaxophoneBasics.jpg'
import p3 from '@/public/Image/BassGuitar.webp'
const aboutUs = [
    {
        title: "Expert Instructors",
        description:
        "Learn from industry professionals with years of experience in the music industry. Our instructors are not only skilled musicians but also passionate educators dedicated to helping you achieve your musical goals. They bring real-world experience and insights to the classroom, ensuring you get the most relevant and practical knowledge.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image src={p1} width={350} height={350} alt="Expert Instructors" className="h-full w-full "/>
            </div>
        ),
    },
    {
        title: "Comprehensive Curriculum",
        description:
        "Our courses cover a wide range of topics, from music theory to production techniques. Whether you're a beginner looking to understand the basics or an advanced student aiming to refine your skills, our curriculum is designed to cater to all levels. We provide in-depth lessons on various genres, instruments, and software, ensuring a well-rounded musical education.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image src={p2} width={350} height={350} alt="Comprehensive Curriculum" className="h-full w-full "/>
            </div>
        ),
    },
    {
        title: "Flexible Learning",
        description:
        "Learn at your own pace with our flexible online courses, available 24/7. Our platform is designed to fit into your busy schedule, allowing you to access course materials and complete assignments whenever it’s convenient for you. Whether you prefer to study early in the morning or late at night, our courses are always accessible.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image src={p3} width={350} height={350} alt="Flexible Learning" className="h-full w-full "/>
            </div>
        ),
    },
    {
        title: "Community Support",
        description:
        "Join a community of fellow learners and get support from our dedicated team. Our platform fosters a collaborative learning environment where you can share your progress, ask questions, and receive feedback from both peers and instructors. We believe that learning is a social experience, and our community is here to support you every step of the way.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image src={p1} width={350} height={350} alt="Community Support" className="h-full w-full "/>
            </div>
        ),
    },
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={aboutUs} />
    </div>
  )
}

export default WhyChooseUs