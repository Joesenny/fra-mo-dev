import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/chick-ink-pic.png'
import AnimatedText from '@/components/AnimatedText'


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

          <div className='w-1/2 flex flex-col items-center' >
             <AnimatedText text= 'Engineering Dreams into Reality Through Code and Design.' className='!text-6xl '/>
                <p>
                  As a skilled full-stack developer, I am passionate about turning creative ideas into impactful web applications. Delve into my latest projects and articles, highlighting my mastery in React.js and web development.
                </p>

          </div>

        </div>

        </Layout>

      </main>
    </>
  )
}