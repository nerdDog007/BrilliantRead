import React, { useEffect } from 'react'
import Book from '../assets/hero.png'
import SignUp from './SignUp'
import axios  from 'axios'

function Hero() {

  return (
    <div className='w-screen h-[20vh]  object-fill bg-[#FFD767] flex sm:flex-col  items-center justify-center relative'>
           <img src={Book} alt="" className='h-full'/>
           <SignUp />
    </div>
  )
}

export default Hero