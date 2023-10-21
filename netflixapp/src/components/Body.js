import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
const Body =()=>{
   const dispatch = useDispatch();
   const router = createBrowserRouter([{
    path:"/",
    element:<Login/>
   },{
    path:"/browse",
    element:<Browse/>
   }]) 
   useEffect(()=>{

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    dispatch(addUser(user));
       // ...
  } else {
    // User is signed out
    // ...
  }
});
   },[])

    return(
       <div>
            <RouterProvider router={router}/>
       </div>
        
       
    )
}

export default Body;