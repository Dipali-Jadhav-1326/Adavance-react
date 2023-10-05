import React, { useReducer } from "react";


const initialState = 0;

function reducer(state , action){
    if(action.type === "increment"){
        return state+1;
    }
    if(action.type === "decrement"){
        return state-1;
    }
       
}

export default function Usereducer(){
   
  const [state , dispatch] = useReducer(reducer , initialState)

    return<>
        <div>
          <h1>{state}</h1>
             <button onClick={ ()=>dispatch({type:"increment"})}> Increment</button>
            <button onClick={ ()=>dispatch({type:"decrement"})}> Decrement</button> 
            
        </div>
    </>
}