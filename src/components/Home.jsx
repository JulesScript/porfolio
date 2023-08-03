import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import dp from '../assets/pic.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col items-center md:flex-row'>
        <div className='flex flex-col justify-center text-center md:text-left md:w-1/2'>
          <h3 className='text-4xl sm:text-7xl font-bold'>
            I'm a Web Developer
          </h3>
          <p className='text-gray-500 py-4 max-w-md mx-auto md:mx-0'>
            I am Deo Jules Sarmiento, a dedicated and passionate individual in the realm of web development. With a strong academic foundation from City College of Calamba, I have honed my skills and knowledge to become a proficient web developer. Over the course of my journey, I have had the privilege of gaining valuable hands-on experience, amassing a rewarding 9 months of practical application in the field.
          </p>

          <div>
            <Link to='skills' smooth={true} duration={500}>
              <button className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform hover:rotate-90 duration-300'>
                Skills
                <HiArrowNarrowRight size={15} className='ml-3 transform group-hover:rotate-90'/>
              </button>
            </Link>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={dp} alt="react" className='rounded-2xl mx-auto w-full h-auto md:h-full'/>
        </div>
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//         <p className='text-pink-600'>Hi, my name is</p>
//         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//           SAI KUMAR
//         </h1>
//         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//           I'm a Full Stack Developer.
//         </h2>
//         <p className='text-[#8892b0] py-4 max-w-[700px]'>
//           I’m a full-stack developer specializing in building (and occasionally
//           designing) exceptional digital experiences. Currently, I’m focused on
//           building responsive full-stack web applications.
//         </p>
//         <div>
//           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//             View Work
//             <span className='group-hover:rotate-90 duration-300'>
//               <HiArrowNarrowRight className='ml-3 ' />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
