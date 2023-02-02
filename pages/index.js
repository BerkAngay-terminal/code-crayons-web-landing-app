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
      <div className='bg-black w-full h-screen '>
        <div className='absolute inset-0 z-50'>
          <div className='z-50'>
            <Header />
          </div>
          <Hero />
        </div>
        <div className='-z-10 w-screen h-screen'>
          <Stars />
        </div>

      </div>
    </>
  )
}

export default index