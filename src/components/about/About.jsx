import React from 'react';
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opecity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className='md:h-80'  src={AboutImg} alt="" />
                <ul>
                  <div className='flex gap-3 py-4'>
                    <IoMdArrowRoundForward size={30} className='mt-1'/>
                    <span className='w-96'>
                      <h1 className='text-xl md:text-2xl font-semibold loading-normal'>Frontend developer</h1>
                      <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda dolorem minima rem autem laudantium fugit nostrum, ut harum ad sunt optio doloribus veritatis maxime molestias tempora adipisci quas modi?</p>
                    </span>
                  </div>
                   <div className='flex gap-3 py-4'>
                    <IoMdArrowRoundForward size={30} className='mt-1'/>
                    <span className='w-96'>
                      <h1 className='text-xl md:text-2xl font-semibold loading-normal'>Backend developer</h1>
                      <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda dolorem minima rem autem laudantium fugit nostrum, ut harum ad sunt optio doloribus veritatis maxime molestias tempora adipisci quas modi?</p>
                    </span>
                  </div>
                   <div className='flex gap-3 py-4'>
                    <IoMdArrowRoundForward size={30} className='mt-1'/>
                    <span className='w-96'>
                      <h1 className='text-xl md:text-2xl font-semibold loading-normal'>Database</h1>
                      <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda dolorem minima rem autem laudantium fugit nostrum, ut harum ad sunt optio doloribus veritatis maxime molestias tempora adipisci quas modi?</p>
                    </span>
                  </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About