import React, { useContext, useEffect, useState } from "react";
import {DataContext} from "./Context"

export default function FetchApi(){
      
    const data = useContext(DataContext);    
    console.log(data);
    /**
     * status : idel
     *        : loding..
     *        : loded !
     *        : error !!
     */
    const [status , setStatus] = useState("idel")

    function clicked (){
            setStatus("loding")
           fetch("https://dummyjson.com/carts")
           .then(res=>res.json())
           .then(res=>{
               setStatus("loded !")
           }).catch(err=>{
                setStatus("error !!")
           })    
    }

    if(status ==="loding"){
        return<h1>Loding....</h1>
    }if(status ==="loded !"){
        return<h1>Loded !!</h1>
    }if(status ==="error !!"){
        return<h1>Error</h1>
    }


    return<>
        <h1 onClick={clicked}>Current State : {status}</h1>
        
    </>

}