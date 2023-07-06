import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'
import React, { useRef } from 'react'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
      <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon refrence={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: 'spring'}}
        >
          <h3 className='capitalize font-bold text-2xl'>
            {type}
          </h3>
          <spam className='capitalize font-medium text-dark/75'>
            {time} | {place }
          </spam>
          <p className='font-medium w-fuill'>
            {info}
          </p>
        </motion.div>

        </li>
    )
  }


const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref, 
      offset: ['start end', 'center start']
  }
  )

  return (
    <div className='my-64'>
        
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
             Education

        </h2>
    
        <div ref={ref} className='w-[75%] mx-auto relative'> 

        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/ >


            <ul className='w-full flex flex-col items-start justify-between'>
                <Details
                type= 'Continuing Education'
                time= 'Present'
                place= 'Online - Coursera '
                info= 'Pursuing AWS Certification, and learning more about the cloud and DevOps.'

                />

                <Details
                type= 'Meta Back-End Developer Professional Certificate'
                time= '2023' 
                place= 'Coursera'
                info= 'Linux commands and Git repositories to implement version control; 
                The world of data storage and databases using MySQL and how to craft sophisticated SQL queries; 
                Django web framework and how the front-end consumes data from the REST APIs; Python Syntax.'
                />

                <Details
                  type='Coding BootCamp Back-End'
                  time='2022' 
                  place={<a href='https://nucamp.co/' target='_blank' rel='noopener noreferrer'>Nucamp.co</a>}
                  info='Back End, SQL, and DevOps with Python. Including Python Fundamentals, Data Structures, and Algorithms.
                  SQL With Python specifically used PostgreSQL to link databases to Python applications.
                  Modern software engineering practices, including Agile, SDLC, and GitHub, while deploying applications to
                  the top 3 cloud providers AWS Microsoft Azure and Google Cloud/Firestore.'
                />
                <Details
                  type='a/A Open - Software Engineering'
                  time='2022'
                  place={<a href='https://www.appacademy.io/' target='_blank' rel='noopener noreferrer'>appacademy.io</a>}
                  info='Full-stack Web Development. Learned to build from scratch with JavaScript, HTML and CSS.'
                />
              
            </ul>

        </div>
    
    </div>
  )
}

export default Education