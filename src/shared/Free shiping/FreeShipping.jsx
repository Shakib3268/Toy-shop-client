import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FreeShipping = () => {
    useEffect(() =>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold text-center underline mt-4 mb-4'>About<span className='text-yellow-400'> Avengers</span></h1>
            <div className='grid text-center ml-[450px] text-black'>
               <div className="card w-96 bg-[#2196b1] shadow-xl mb-4"  data-aos="flip-right">
            <div className='card-body'>
            <p>Avengers toys are a popular line of merchandise based on the Marvel Comics superhero team, the Avengers. The Avengers consist of a group of superheroes including Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, among others.</p>
            </div>
            </div>
            <div className="card w-96 bg-[#2196b1] shadow-xl mb-4">
            <div className='card-body' data-aos="flip-right">
            <p>Avengers toys come in various forms and sizes, catering to different age groups and preferences. Some of the common types of Avengers toys include action figures, playsets, vehicles, role-playing costumes, and collectible items. These toys are designed to resemble the characters from the Avengers comics and movies, and they often feature articulated joints, detailed sculpting, and various accessories to enhance playability.</p>
            </div>
            </div>
            <div className="card w-96 bg-[#2196b1] shadow-xl mb-4">
            <div className='card-body' data-aos="flip-right">
        <p>Many Avengers toys are produced by major toy companies, such as Hasbro, LEGO, and Funko, which hold official licenses to create merchandise based on the Marvel Cinematic Universe (MCU). These toys often tie in with the release of Avengers movies and other Marvel-related media, allowing fans to recreate their favorite scenes or come up with new adventures for the characters.</p>
            </div>
            </div>
            <div className="card w-96 bg-[#2196b1] shadow-xl mb-4">
            <div className='card-body' data-aos="flip-right">
        <p>It's important to note that as an AI, I don't have real-time information about specific Avengers toy releases or availability. The toy market is ever-changing, so it's best to check with local toy stores, online retailers, or official Marvel merchandise outlets for the most up-to-date information on Avengers toys.</p>
            </div>
            </div>
            <div className="card w-96 bg-[#2196b1] shadow-xl mb-4">
            <div className='card-body' data-aos="flip-right">
        <p>Many Avengers toys are produced by major toy companies, such as Hasbro, LEGO, and Funko, which hold official licenses to create merchandise based on the Marvel Cinematic Universe (MCU). These toys often tie in with the release of Avengers movies and other Marvel-related media, allowing fans to recreate their favorite scenes or come up with new adventures for the characters.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default FreeShipping;