import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    showCheckEmail: false,
    clickCopy:false,
   
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        showCheckEmailNotification:(state)=>{
            state.showCheckEmail = true
        },
        hideCheckEmailNotification:(state)=>{
            state.showCheckEmail= false
        },
        ClickCopy:(state)=>{
            state.clickCopy = true
        },
       
    }
})

export const {showCheckEmailNotification, hideCheckEmailNotification, ClickCopy} = userSlice.actions
export default userSlice.reducer