import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";



const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-2 md:px-4 md:py-6'>
        <div className='flex flex-shrink-0 items-center'>
    <a href="/" aria-label='Home'>
    <img src="/logo.jpg" alt="logo" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full object-cover  " />

    {/* <span className='font-bold text-white bg-black text-3xl'>AR</span> */}
    </a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/archana-r-38b4b22ba">
            <FaLinkedin />
</a>

<a href="https://rarchanaportfolio.netlify.app" target="_blank" rel="noopener noreferrer">
<SiNetlify />
</a>
<a href="https://github.com/archanaradha95">
             <FaGithub />
</a>
        </div>

    </nav>
   
  )
}

export default Navbar
