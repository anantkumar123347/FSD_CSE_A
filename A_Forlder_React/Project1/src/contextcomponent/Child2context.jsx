import React,{useContext} from 'react'
import { MyContext } from '../AppContext'
function Child2context() {
    const data=useContext(MyContext)
  return (
    <div>Child2context
        <h1>{data.name}</h1>
    </div>
  )
}

export default Child2context