import React, { useEffect } from 'react'
import Navbar from '../../layouts/Navbar'
import Hero from '../../components/hero'
import SignUp from '../../components/SignUp'
import CreateAcc from '../CreateAccount'
function LandingPage() {
  return (
    <div className='bg-white '>
         <Navbar />
        <Hero/>        
    </div>
  )
}

export default LandingPage