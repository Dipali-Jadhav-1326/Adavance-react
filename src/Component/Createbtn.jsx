import React, { useState } from "react";

export default function CreateBtn({color , underline , increament}){
    const [counter , setCounter] = useState(0)
    return(
    <>
    <h3 style={{color:color , textDecoration : underline ? "underline" : undefined}} onClick={()=>setCounter(counter+increament)}> 
        I am A Button {counter}
    </h3>
    </>
    )
}