import React from 'react'
import Sign from './Sign'
import { FaApple,FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();
  function OnClick(){
      navigate('/signUp')
  }
  return (
    <div className='rounded-xl bg-white flex items-center justify-center flex-col gap-4  p-4 absolute top-[-2rem] right-0 w-[50vw] mr-1 md:w-[30vw] lg:w-[30vw] xl:w-[20vw] h-fit shadow-2xl'>
      <h1 className='text-xl font-semibold'> Discover & read more </h1>
      <Sign text={"Continue with Google"} Icon={FaGoogle} />
      <Sign text={"Continue with Apple"} Icon={FaApple} />
      <Sign text={"Continue with Email"} Icon={MdOutlineEmail} OnClick={OnClick}/>
    <p className='text-[.5rem] items-center justify-center'>
      By creating an account, you agree to the Goodreads <span className='text-blue-900'>Terms of Service</span>  and <span className='text-blue-900'>Privacy Policy</span> . 
      </p>

      <div className='flex flex-row gap-2 px-4 py-2 text-[.5rem] md:text-[.8rem] lg:text-[1rem'>
        Already a Member?
        <p className='' onClick={()=>navigate('/logIn')}>Sign In</p>
      </div>
      </div>
  )
}

export default SignUp