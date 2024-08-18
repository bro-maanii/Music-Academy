"use client";
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import Teachers from './Teachers'

export default function Instructors() {
  return (
    <div className='relative h-screen w-full flex justify-center align-middle overflow-hidden'>
      
      <WavyBackground className='flex max-w-full mx-auto justify-center '>
        <div className='w-full max-w-2xl flex flex-col gap-3'>
            <h1 className="text-4xl font-bold text-center text-white">Our Instructors</h1>
            <p className="text-center text-white text-base md:text-xl">Our instructors are the best in the industry. They are highly skilled and experienced professionals who are passionate about teaching and helping students achieve their goals.</p>
            <Teachers />
        </div>

      </WavyBackground>
    </div>
  )
}
