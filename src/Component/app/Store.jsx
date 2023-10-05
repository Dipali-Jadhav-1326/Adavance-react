import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feature/Todo/TodoSlice"
import CounterReducer from "../feature/Todo/IncrementDec"

export const store = configureStore({
  reducer:{
    todoReducer:todoReducer,
    CounterReducer :CounterReducer
  }
})