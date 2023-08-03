import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import dp from '../assets/pic.jpg';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-[80%] px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Web Developer
                </h3>
                <p className='text-gray-500 py-4 max-w-md'>
                I am Deo Jules Sarmiento, a dedicated and passionate individual in the realm of web development. With a strong academic foundation from City College of Calamba, I have honed my skills and knowledge to become a proficient web developer. Over the course of my journey, I have had the privilege of gaining valuable hands-on experience, amassing a rewarding 9 months of practical application in the field.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    <Link to='skills' smooth={true} duration={500}>
                         Skills
                    </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={15} className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
            <div className='md:flex-row'>
                <img src={dp} alt="react" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  ) 
}

export default Home