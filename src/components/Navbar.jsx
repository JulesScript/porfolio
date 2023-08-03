import React, {useState} from 'react'
import {FaBars,  FaTimes, FaGithub, FaLinkedin,FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo2.png'
import {Link} from 'react-scroll'
import resume from '../assets/resume.pdf'



export const Navbar = () => { 
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center  bg-[#f7f7f7] text-black-300 px-20'>
        <div>
            <img src={Logo} alt="logo" style={{width:'100px'}}/> 
        </div>
        {/* start of menu*/}
            <div>
            <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
   
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
            </div> 
        {/* end of menu*/}

        {/* hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10' >
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* mobile view*/}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#f7f7f7] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
    
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
   
        {/* social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%]  left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/deo-jules-sarmiento-91a8bb235/" target="_blank">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/JulesScript" target="_blank">
                        Github <FaGithub size={30} />
                    </a>
                </li>

          
                
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f6569]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                     href={resume} 
                     download="Deo Jules Resume.pdf" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>

            </ul>
        </div>
    </div>
  )
}
