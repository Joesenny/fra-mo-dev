import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/chick-ink-pic.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/icons'
import HireMe from '../components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joe Senenfelder</title>
        <meta name="description" content="a joe_senny porfolio" />

        
      </Head>
     <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>

        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt='joe_senny' className='w-full h-auto'/>
          </div>

          <div className='w-1/2 flex flex-col items-center self-center' >
             <AnimatedText text= 'Engineering Dreams into Reality Through Code and Design.' className='!text-6xl !text-right '/>
                <p className=' my-4 text-base font-medium'>
                  As a skilled full-stack developer, I am passionate about turning creative ideas into impactful web applications. 
                  Delve into my latest projects and articles, highlighting skills in javascript, Web Development, and UI/UX design.

                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href='/dummy.pdf' target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5
                  px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  '
                download={true}
                  >Resume <LinkArrow className={'w-6 ml-1'}/>
                  </Link>

                  <Link href='mailto:joesenny.dev@gmail.com' target={'_blank'}
                  className='ml-4 text-lg font-medium text-dark underline'
                  >Contact</Link>

                </div>

          </div>

        </div>

        </Layout>

       <HireMe/>
       <div>

       </div>

      </main>
    </>
  )
}