import React from 'react'
import Img from '../assets/people.png'
import Book from '../assets/bookReading.webp'

function Hero() {
  return (
    <div className='w-screen h-[35vh] bg-yellow-300 flex'>
        <div className='w-[50vw] h-full mx-auto gap-4 flex flex-col justify-center'>
        <div className='text-shadow-gray-400 flex flex-col gap-4 relative'>
            <h1 className='text-6xl'>GOODREADS</h1>
            <h1 className='text-5xl'>Summer</h1>
            <h1 className='text-4xl'>Reading</h1>
            <img src={Book} alt="" className='w-70 h-70 absolute left-1/2'/>

        </div>
        <button className=' inline-block  w-fit rounded-full py-2 bg-black text-white px-4'>Read more</button>
        </div>      
    </div>
  )
}

export default Hero