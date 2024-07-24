import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-[36rem] relative overflow-hidden flex flex-col justify-center text-center  items-center gap-3 ">
        <Spotlight
        className="-top-5 sm:-top-50 left-0 md:left-60 md:-top-20"
        fill="black"  
      />
      <div className="relative top-14">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center">Master The Art Of Music</h1>
        <p className=" text-center py-5 opacity-80 max-w-lg mx-auto ">
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
      
      
    </div>
  );
}

export default HeroSection;
