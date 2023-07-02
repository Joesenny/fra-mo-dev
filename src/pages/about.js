import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import JoeSenny from '../../public/images/profile/picresize.png'

const about = () => {
  return (
    <>
    
        <Head>
            <title>Joe Senenfelder | About Page</title>
            <meta name="description" content="a joe_senny porfolio" />

        </Head>

        <main className='flex w-full flex-col-3 items-center justify-center mb-10 '>
           <Layout className='pt-16'>
            <AnimatedText text="Driven by Dreams, Defined by Dedication" 
            className='mb-16'/>
            <div className='flex flex-row-4 justify-center'>
            

                <div className=' w-1/2 mb-10 flex flex-col items-start justify-start '>
                    <h2 className='mb-4 px-8 py-2 text-lg font-bold uppercase text-dark/70'> Biography</h2>
                      <p className='px-8 font-medium'>
                      Hello there! I am JoeSenny, a dedicated web developer and UI/UX designer with a knack for 
                      shaping aesthetically pleasing, functional, and user-centric digital solutions. My drive 
                      for innovation and ability to bring the vision of a client to life is unwavering. I constantly 
                      embrace new technologies and design methods to stay at the forefront of the digital landscape.
                        
                      </p>
                      <p className='px-8 font-medium my-4'>
                      I firmly uphold that design is beyond mere ornamentation. It is about tackling 
                      obstacles, sound architecting, and curating intuitive, rewarding user experiences.
                        
                      </p>
                      <p className='px-8 font-medium mb-4'>
                      Regardless of the nature of the project - a website, mobile app, or any digital product, 
                      each task I undertake is fueled by my commitment to design excellence and a 
                      user-centric approach. I eagerly anticipate bringing my skill set and passion to
                      your next venture.

                      </p> 
              
                </div>
                < div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light mb-5 ml-3 '>
                  <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                <Image src={JoeSenny} alt="Joe Senenfelder" 
                 className='w-full h-auto rounded-2xl px-2 py-2 '/>
                </div>

              <div>

                <div>
                  <span>  </span>
                  <h2> </h2>
                </div>

                <div>
                  <span>  </span>
                  <h2> </h2>
                </div>
                
                <div>
                  <span>  </span>
                  <h2> </h2>
                </div>
                




                </div>
                

            </div>




            </Layout>
            </main>




    </>
  )
}

export default about