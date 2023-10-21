import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{},
    reducers:{
        addUser(state,payload){
           console.log(payload)
        },
        removeUser(){
            return null;
        }

    }
});
 export const{addUser,removeUser}= userSlice.actions;
 export default userSlice.reducer;