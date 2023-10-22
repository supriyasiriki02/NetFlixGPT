import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser, removeUser } from "../utils/store/userSlice";
const Header = () => {
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const signoutHandler = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    

  }
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {email,displayName,uid} = user
        dispatch(addUser({email:email,displayName:displayName,uid:uid}));
        navigate("/browse");
           // ...
      } else {
          dispatch(removeUser());
          navigate("/")
        // User is signed out
        // ...
      }
    });
       },[])
  return (
    <div className='' >
      <div className=' flex justify-between'>
      
      <div><img className='absolute w-52 bg-gradient-to-b from-black flex-1' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/></div>
     <div>{user?.email&&<div><span onClick={signoutHandler}>SignOut</span> {user.displayName}</div>}</div>
      </div>
    </div>
  )
}

export default Header