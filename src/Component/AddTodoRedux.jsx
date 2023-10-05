import React, { useState } from "react";
import {addTodo} from "./feature/Todo/TodoSlice"
import { useDispatch } from "react-redux";


export default function AddTodoRedux(){
    const [input , setInput] = useState("")
    const dispatch = useDispatch();
   
    function addTodoFunc(e){
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    return<>
    <h1>Todo</h1>
          <form action="" onSubmit={addTodoFunc}>
            <input type="text" required onChange={(e)=>setInput(e.target.value)}  value={input} placeholder="Enter the Todo Here"/>
            <button type="submit">Add</button>
          </form>
    </>
}