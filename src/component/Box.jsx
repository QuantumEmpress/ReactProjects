import React, { useContext } from 'react'
import {MyContext} from '../context/MyContext'

const Box = () => {

  const {color} = useContext(MyContext)
  return (
    <div>
      {color}
    </div>
  )
}

export default Box
