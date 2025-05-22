import React from 'react'
import Logo from '../assets/logo.png'
import Hero from '../components/hero'


function Navbar() {
  return (
    <nav className='py-4 w-[50vw] bg-white mx-auto flex justify-between items-center'>
      <img src={Logo} alt="" />
    </nav>
  )
}

export default Navbar