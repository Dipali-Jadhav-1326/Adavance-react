import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./feature/Todo/IncrementDec";
import { decrement } from "./feature/Todo/IncrementDec";


export default function IncDecRedux(){
   const dispatch = useDispatch();
   const select = useSelector(state => state.CounterReducer.Counter);
    return<>
          <h1>{select}</h1>
          <button onClick={()=>dispatch(increment("dipali"))}>Increment</button>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>

    </>
}