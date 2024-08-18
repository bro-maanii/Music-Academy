"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const webinars = [
    {
      title: "Music Production Masterclass",
      description: "Learn the essentials of music production, including mixing, mastering, and sound design with industry experts.",
      link: "https://example.com/masterclass",
      isFeatured: true,
    },
    {
      title: "Songwriting Techniques",
      description: "Discover advanced songwriting techniques to craft compelling lyrics and melodies.",
      link: "https://example.com/masterclass",
      isFeatured: false,
    },
    {
      title: "Live Performance Tips",
      description: "Enhance your stage presence and performance skills with this interactive webinar.",
      link: "https://example.com/masterclass",
      isFeatured: true,
    },
    {
      title: "Music Marketing Strategies",
      description: "Learn how to promote your music effectively and grow your fanbase.",
      link: "https://example.com/masterclass",
      isFeatured: true,
    },
    {
      title: "Recording Techniques for Home Studios",
      description: "Maximize the potential of your home studio setup with professional recording techniques.",
      link: "https://example.com/masterclass",
      isFeatured: true,
    },
  ];
  

function Webniar() {
  return (
    <div className="max-w-6xl mx-auto text-center  ">
      {/*main tilte*/}
      <div className="text-blue-900 font-extrabold italic text-lg py-4">
        Feature Webniars
      </div>
      {/* Text */}
      <div className="font-normal text-3xl">
        Enhance Your Musical Journey With Us
      </div>
      {/* Webniar */}
      <div className="flex justify-center">
        <HoverEffect items={webinars.map(item => (
            { title:item.title , description:item.description , link:item.link , isFeatured:item.isFeatured }
        ))} />
      </div>
      {/* bUTTON  */}
      <div className="pb-3">
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg mt-4">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Webniar;
