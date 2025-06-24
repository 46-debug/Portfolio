"use client"
import React from 'react'
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import MyStroy from './Components/MyStroy';
import Footer from './Components/Footer';
import Skils from './Components/Skils';

const page = () => {

  return (
    <div className='text-black flex flex-col'>
      <Hero />
      <div id='scroll'>
        <Skils />
        <Projects />
        <MyStroy />
        <Footer />
      </div>
    </div>
  )
}

export default page;