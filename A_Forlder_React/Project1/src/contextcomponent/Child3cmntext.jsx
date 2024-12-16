import React,{useContext} from 'react'
import { MyContext } from '../AppContext'
function Child3cmntext() {
    const data=useContext(MyContext)
  return (
    <div>Child3cmntext
        <h1>{data.name}</h1>
    </div>
  )
}

export default Child3cmntext