import React, { use } from 'react'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setEmail, setName, setConfirmPassword } from '../redux/slice/signUp.jsx';
import { setPassword as setLogInPassword, setEmail as setLogInEmail } from '../redux/slice/logIn.jsx';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateAcc() {
  const navigate = useNavigate();
  const user = useSelector(state => state.signUp);
  function onSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/signUp',user)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    navigate('/')

  }
  return (
    <form className='w-[80vw] gap-8 mx-auto flex flex-col items-center justify-center overflow-hidden'>
        <img src={logo} alt="" className='mt-4'/>
        <div className='flex flex-col gap-4 w-[80vw] items-center justify-center mx-auto'>
        <h1 className='text-3xl font-semibold'>Create Account</h1>
        <CreateAccList y="Name" htmlFor="username" placeHold="Your Name" type="text" username="username" id="username"/>
        <CreateAccList y="Email" htmlFor="email" placeHold="Email" type="email" username="email" id="email"/>
        <CreateAccList y="Password" htmlFor="password" placeHold="Password" type="password" username="password" id="password"/>
        <CreateAccList y="ConfirmPassword" htmlFor="confirmPassword" placeHold="Confirm Password" type="password" username="confirmPassword" id="confirmPassword"/>
        <button className='bg-black px-4 py-2 rounded-2xl w-fit text-white' onClick={onSubmit}>Create Account</button>
        <p className='w-[80vw] text-[.8rem] text-center'>By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy</p>
        </div>
    </form>

  )
}


function CreateAccList({htmlFor,placeHold,type,username,id,y}) {
  const user = useSelector(state => state.signUp);
  const dispatch = useDispatch();
  function onChange(type){
    return (e) => {
    if(type === 'Password'){
      dispatch(setPassword(e.target.value));
    }
    else if(type === 'Email'){
      dispatch(setEmail(e.target.value));
    }
    else if(type === 'ConfirmPassword'){
      dispatch(setConfirmPassword(e.target.value));
      console.log(user.confirmPassword)
    }
    else if(type === 'Name'){
      dispatch(setName(e.target.value));
    }}
  
  }
  return (
    <div className='flex flex-col items-start justify-center gap-2'>
      <label htmlFor={htmlFor} className='text-xl font-semibold'>{placeHold}</label>
      <input type={type} onChange={onChange(y)} name={username} id={id} value={user[y]}  className='border-1  border-black border-opacity-0 rounded-2xl outline-0 px-4 py-1'/>
    </div>

  )
}
export default CreateAcc