import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-[40rem] flex flex-col justify-center text-center  items-center gap-3 ">
        <Spotlight
        className="-top-5 left-0 md:left-60 md:-top-20"
        fill="black"  
      />
      <h1 className="text-4xl font-extrabold text-center">Master The Art Of Music</h1>
      <p className=" text-center py-5 opacity-80 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptate fugiat iure sequi temporibus cumque fugit ullam quam ipsa
        dolore, ut necessitatibus ab facilis nostrum labore ducimus ipsam
        mollitia veniam.
      </p>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900text-white border-slate-800"
      >Get Started</Button>
    </div>
  );
}

export default HeroSection;
