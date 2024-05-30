import {createContext, useState } from "react";

export const MyContext = createContext({}) 

export const MyContextProvider = ({children}) => {

  const [name, setName] = useState("amey")

  const [color, setColor] = useState("Blue")


  return(
    <MyContext.Provider value={{color, setColor,name,setName}}>
      {children}
    </MyContext.Provider>
  )
}
