import React from 'react'

function SignEmail() {
  return (
    <div className='w-[80vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[20vw] flex flex-col gap-4 mx-auto mt-4 items-center'>
      <h1 className='text-2xl font-semibold'>GoodReads</h1>
      <p className='text-xl font-bold'>Sign in with Email</p>
      <form className='w-full flex flex-col gap-4'>
        <input type="email" placeholder="Email" className='w-full p-2 border-2 rounded-md border-gray-400 focus:border-blue-500'/>
        <input type="password" placeholder="Password" className='w-full p-2 border-2 rounded-md border-gray-400 focus:border-blue-500'/>
        <button className='w-full p-2 border-2 rounded-md border-gray-400 focus:border-blue-500 bg-blue-500 text-white'>Sign In</button>
        <p className='text-center'>Don't have an account? <span className='text-blue-900'>Sign Up</span></p>
      </form>
    </div>
  )
}

export default SignEmail