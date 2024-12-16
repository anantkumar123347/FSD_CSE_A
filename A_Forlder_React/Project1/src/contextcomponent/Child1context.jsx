import React, { useContext } from 'react'
import { MyContext } from '../AppContext'
function Child1context() {
    const data=useContext(MyContext)
  return (
    <div>Child1context
        <h1>{data.name}</h1>
    </div>
  )
}

export default Child1context