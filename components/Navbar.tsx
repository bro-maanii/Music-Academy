"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg text-sm sm:text-base md:max-w-xl lg:max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
      <Link href="/"><MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        
        <MenuItem setActive={setActive} active={active} item="Our Cousers">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/"><MenuItem setActive={setActive} active={active} item="About Us">
        </MenuItem>
        </Link>
        <Link href="/"><MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
        
      </Menu>
    </div>
  );
}
