import React from 'react'
import Logo from '../assets/logo.png'
import Hero from '../components/hero'


function Navbar() {
  return (
    <nav className='py-4  mx-auto w-screen md:w-[80vw] lg:w-[60vw]'>
      <img src={Logo} alt="" />
    </nav>
  )
}

export default Navbar