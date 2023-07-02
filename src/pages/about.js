import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
    
        <Head>
            <title>Joe Senenfelder | About Page</title>
            <meta name="description" content="a joe_senny porfolio" />

        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
           <Layout className='pt-16'>
            <AnimatedText text="Driven by Dreams, Defined by Dedication"/>
            <div className='grid w-full grid-cols-8 gap-16'>
               
              <div>
                 {/* this div is creating speace */}
              </div>

                <div className='col-span-3 flex flex-col pr- justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/70'>
                        Biography</h2>
                       <p className='font-medium'>
                       Hello there! I'm JoeSenny, a dedicated web developer and UI/UX designer with a knack for 
                       shaping aesthetically pleasing, functional, and user-centric digital solutions. My drive 
                       for innovation and ability to bring the vision of a client life is unwavering. I constantly 
                       embrace new technologies and design methods to stay at the forefront of the digital landscape.
                        
                        </p>
                        <p className='font-medium my-4'>
                        I firmly uphold that design is beyond mere ornamentation. It is about tackling 
                        obstacles, sound architecting, and curating intuitive, rewarding user experiences.
                        
                        </p>
                        <p className='font-medium mb-4'>
                        Regardless of the nature of the project - a website, mobile app, or any digital product, 
                        each task I undertake is fueled by my commitment to design excellence and a 
                        user-centric approach. I eagerly anticipate bringing my skill set and passion to
                        your next venture.

                        </p> 
                </div>

            </div>




            </Layout>
            </main>




    </>
  )
}

export default about