import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidation } from '../utils/validateForm';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {
  const [isSignIn,setIsSiginIn]= useState(false)
  const [errorMessage,setErrorMessage]= useState(null);
  const signUpHandler = ()=>{
    setIsSiginIn(!isSignIn);
  }
  const email = useRef(null);
  const password = useRef(null);
  const submitHandler=()=>{
   
    const message = checkValidation(email.current.value,password.current.value);
    setErrorMessage(message);

    if(isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
    
  }
  return (
    <>
        <Header/>
        <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        <div className='loginForm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <form onSubmit={(e)=>e.preventDefault()} className='bg-slate-950 h-96 p-10 rounded-md w-96 flex flex-col'>
          <h1 className='text-white font-bold text-3xl py-6'>{!isSignIn?"SignIN":"SignUp"}</h1>
          <div className='mb-4'>
          {isSignIn&&<input
              type='text'
              id='fullName'
              
              className='w-full p-2 rounded-md'
              placeholder='Full Name'
            />
         }
          </div>
          <div className='mb-4'>
         
            <input
              type='text'
              id='email'
              ref={email}
              className='w-full p-2 rounded-md'
              placeholder='Email address or phone number'
            />
          </div>

          <div className='mb-4'>
    
            <input
              type='password'
              id='password'
              ref={password}
              className='w-full p-2 rounded-md'
              placeholder='Password'
            />
          </div>
         <div ><p className=' text-red-600'>{errorMessage}</p></div>
          <button onClick={submitHandler}
            type='submit'
            className='w-full bg-red-500 text-white p-2 rounded-md'
          >
            Sign In
          </button>
          <div>
            <p  className=' text-red-600 py-10'>New to Netflix? <span onClick={signUpHandler}>{isSignIn?"SignIN":"SignUp"}</span></p>

          </div>
        </form>
      </div>
    </>
  )
}

export default Login