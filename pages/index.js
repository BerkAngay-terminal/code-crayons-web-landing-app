import React from 'react'
import Header from '../components/Header'
import Stars from '../components/Stars'
import Hero from '../components/Hero'
import Head from 'next/head';

function index() {
  return (
    <>
      <Head>
        <title>Code Crayons: We build future</title>
      </Head>
      <div className='bg-black w-full h-screen'>

        <div className='absolute inset-0 z-50 flex items-center justify-center'>

          <div className='z-50'>
            <Header />
          </div>

          <Hero />

          <div className='mt-48 bg-white/30 backdrop-blur-sm rounded-md p-4'>
            <p className='text-white w-96 text-lg text-center'>We&apos;re always hungry for great ideas and
              like-minded people. So, if you have a vision, and are looking for the right partners, we&apos;re here.</p>
          </div>

        </div>

        <div className='-z-10 w-screen h-screen'>
          <Stars />
        </div>

      </div>
    </>
  )
}

export default index