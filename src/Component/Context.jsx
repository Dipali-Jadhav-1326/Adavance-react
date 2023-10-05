import React, { Children, createContext, useContext } from "react";
import FetchApi from "./FetchApi";

 export const DataContext = createContext();

export default function Context(){

    return< div>
    <DataContext.Provider value={{name:"dfhdslk"}} >
             <FetchApi/>
    </DataContext.Provider>
    </div>
}