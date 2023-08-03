import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Laravel from '../assets/laravel.jpg';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col justify-center h-auto md:h-screen'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Skills
          </p>
          <p className='text-sm md:text-base'>
            {/* Comment: These are the technologies I've worked with */}
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4'>
          <div className='shadow-md shadow-[#dcc75f] hover:scale-110 duration-500 p-4'>
            <img className='w-16 mx-auto mb-2' src={HTML} alt='HTML icon' />
            <p className='text-xs md:text-sm'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#5eb7c3] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#edff65] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT </p>
              </div>
              <div className='shadow-md shadow-[#a99be0] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#68e2f7] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#6785ff] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#fc6c6c] hover:scale-110 duration-500 p-4'>
                  <img className='w-16 mx-auto mb-2' src={Laravel} alt="HTML icon" />
                  <p className='my-4'>Laravel</p>
              </div>
          {/* Repeat similar blocks for other skills */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
