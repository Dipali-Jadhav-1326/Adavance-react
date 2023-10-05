import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    Counter:0
}

 export const counterSlice = createSlice({
    name:"Counter" , 
    initialState ,
    reducers:{
        increment:(state , action )=>{
            console.log(action.payload)
           state.Counter = state.Counter + 1
        },
        decrement :(state , action) =>{
           state.Counter = state.Counter - 1
        }
    }

})

export const {increment , decrement} = counterSlice.actions

export default counterSlice.reducer