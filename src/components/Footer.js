import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solic border-dark
    font-medium text-lg
    '>

        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
            <div className='flex items-center'>
                Build With <span className='text-red-500 text-lg'>&#9825;</span> 
                by&nbsp; <Link href='Https://www.twitter.com/joesenny' target={'_blank'}
                className='underline underline-offset-2'>joeSenny</Link>
                
            </div>
            
            <Link href='Https://www.twitter.com/joesenny' target={'_blank'}
            className='underline underline-offset-2 text-blue'
            >Say hello</Link>
            

        </Layout>
    </footer>
  )
}

export default Footer
