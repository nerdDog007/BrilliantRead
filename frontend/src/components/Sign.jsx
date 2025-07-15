import React from 'react'
import { FaGoogle } from "react-icons/fa";

function Sign ({Icon,text,OnClick}) {
  return (
    <div onClick={OnClick} className='flex items-center gap-2 border-2 w-full lg:w-[80%]  text-[.5rem] md:text-[.8rem] lg:text-[1rem] bg-[#f5d47a] px-4 py-2'>
        <Icon className="text-[.7rem]"/>
        <p className='text-[.6rem]'>{text}</p>
    </div>
  )
}

export default Sign