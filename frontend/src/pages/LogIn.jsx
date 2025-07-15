import React from 'react'
import Sign from '../components/Sign'
import { FaApple,FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  function OnClick(){
      navigate('/signEmail')
  }
  
  return (
    <div className='w-screen h-screen  this mx-auto flex justify-center py-8'>
      <div className='bg-white shadow-2xl flex-col p-4 gap-4 sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]  h-fit flex items-center justify-center '>
      <h1 className='text-xl font-semibold'>Sign in to GoodReads</h1>
      <Sign text={"Continue with Google"} Icon={FaGoogle}/>
      <Sign text={"Continue with Apple"} Icon={FaApple}/>
      <Sign text={"Sign in with Email"} Icon={MdOutlineEmail} OnClick={OnClick}/>
      <p className='font-[500] text-[.8rem]'>Don't have an account? <span className='text-blue-900'>Sign Up</span></p>
      </div>
    </div>
  )
}

export default Login