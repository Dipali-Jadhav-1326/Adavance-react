import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateBtn from './Component/Createbtn'
import Home from './Component/Home'
import Usereducer from './Component/Usereducer'
import FetchApi from './Component/FetchApi'
import Context from './Component/Context'
import AddTodoRedux from './Component/AddTodoRedux'
import TodoRedux from './Component/TodoRedux'
import IncDecRedux from './Component/IncDecRedux'

function App() {
  
 const props ={
  underline:true,
  increament:2
 }
  return (
    <>
    {/* <CreateBtn color = "red" underline= {true} increament = {2}  />
    <CreateBtn color="orange" underline= {true} increament = {2}  />
    <CreateBtn color="green"  underline= {true} increament = {2} /> */}

    {/* New Updates In Advance */}

    {/* <CreateBtn color = "red" {...props}  />
    <CreateBtn color="orange" {...props}  />
    <CreateBtn color="green"  {...props} /> */}


    {/* <Usereducer/> */}

    {/* <Fetchapi/> */}
    
{/*
//Redux
<AddTodoRedux />
<TodoRedux/> */}

<IncDecRedux/>


     </>
  )
}

export default App
