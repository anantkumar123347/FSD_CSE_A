import React from 'react'
import Child1 from './components/Child1'
function Appprops() {
    const data={ name:"Anant",
        branch:"CSE",
        section:"A"}
  return (
    <div>
        <h1>Hello </h1>
        <Child1 data={data}/>
    </div>
  )
}

export default Appprops