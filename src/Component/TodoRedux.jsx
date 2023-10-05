import React from "react";
import {removeTodo} from "./feature/Todo/TodoSlice"
import { useDispatch, useSelector } from "react-redux";

export default function TodoRedux(){
       const todo = useSelector(state => state.todoReducer.todo)
       const dispatch = useDispatch();
    return <>
        
        {todo.map(d=>{
            return <li key={d.id}>
                   {d.text}
                   <button onClick={()=>dispatch(removeTodo(d.id))}>Delete</button>
            </li>
        })}
    </>
}