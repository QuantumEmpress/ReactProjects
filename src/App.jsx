import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { MyContextProvider } from './context/MyContext'
import Box from './component/Box'

function App() {

  return(

    <MyContextProvider>
      <Box/>
    </MyContextProvider>
    
    // <reactScrictMode>
    // <MycontextProvider>
    //   <App/>
    // </MycontextProvider>
    // </reactScrictMode>
  )
// const {name} = useContext(MyContext)
}
export default App
