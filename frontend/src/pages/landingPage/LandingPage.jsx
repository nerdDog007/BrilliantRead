import React from 'react'
import Navbar from '../../layouts/Navbar'
import Hero from '../../components/hero'
import SignUp from '../../components/SignUp'
function LandingPage() {
  return (
    <div className='bg-white mx-auto'>
        <Navbar />
        <Hero/>
        <SignUp/>
    </div>
  )
}

export default LandingPage