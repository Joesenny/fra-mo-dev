import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons'
import {motion} from 'framer-motion'


const CustomLink = ({ href, title, className='' }) => {
  const router = useRouter();
 

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

    <span className={`
    h-[1px] inline-block bg-dark
    absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    ${router.pathname === href ? 'w-full' : 'w-0'}
    `}>&nbsp;</span>
     
    </Link>
  )
}

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between '
    >
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/> 
            <CustomLink href='/about' title='About'className='mx-4'/> 
            <CustomLink href='/projects' title='Projects'className='mx-4'/> 
            <CustomLink href='/articles' title='Articles'className='ml-4'/> 
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
       <Logo />
        </div>

        <nav className='flex items-center justify-between flex-wrao '>


            <motion.a href='https://twitter.com/joesenny' target={'_blank'}
            whileHover={{y:-3}} 
            whileTap={{y:3}}
            className='mr-4'  
            > <TwitterIcon/> </motion.a>

            <motion.a href='https://github.com/Joesenny' target={'_blank'}
            whileHover={{scale:1.5}}
            whileTap={{rotate:360}}
            className= 'mx-4'
            > <GithubIcon/> </motion.a>

            <motion.a href='https://www.linkedin.com/in/joe-senenfelder-159496260/' target={'_blank'}
            whileHover={{y:-3}}
            whileTap={{y:3}}
            className=' ml-4'
            > <LinkedInIcon/> </motion.a>
          
    
        </nav>


    </header> 
  )
}

export default NavBar

