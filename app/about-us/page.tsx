import React from 'react'

function page() {
return (
    <div className='relative top-32'>
        <div className='w-full mx-auto max-w-6xl text-black p-3'>
            <h1 className="font-bold text-4xl text-center">About Us</h1>
            <p className="text-base sm:text-xl  mt-auto p-4">
                We are a group of passionate music lovers who want to share our love for music with the world. 
                We believe that music is a universal language that can bring people together and create a sense of community. 
                Our mission is to provide high-quality music education to students of all ages and skill levels. 
                Whether you are a beginner or an advanced musician, we have a course that is perfect for you. 
                Our team of experienced instructors is dedicated to helping you achieve your musical goals and reach your full potential. 
                Join us today and start your musical journey with us!
            </p>
            <h6 className='font-bold text-4xl p-6'>Our Mission</h6>
            <p className='text-base sm:text-xl p-4'>
                Our mission is to provide high-quality music education to students of all ages and skill levels. 
                We believe that music is a universal language that can bring people together and create a sense of community. 
                Our team of experienced instructors is dedicated to helping you achieve your musical goals and reach your full potential. 
                Join us today and start your musical journey with us!
            </p>
            <h1 className='font-bold text-4xl p-6'>What We Offer</h1>
            <ol className='text-base sm:text-xl p-4 list-disc pl-16'>
                <li>High-quality music education</li>
                <li>Experienced instructors</li>
                <li>Beginner and advanced courses</li>
                <li>Personalized instruction</li>
                <li>Flexible scheduling</li>
                <li>Competitive pricing</li>
                <li>Online and in-person lessons</li>
            </ol>
            <p className='text-base sm:text-xl p-4'>Our curriculum is designed to blend traditional techniques with modern approaches, ensuring that our students are well-versed in both the fundamentals and the latest trends in the music world.</p>
            <p className='font-bold italic text-center p-5 pb-40'>Contact us today to schedule a trial lesson or learn more about our programs. Lets make music together!</p>
        </div>
    </div>
)
}

export default page