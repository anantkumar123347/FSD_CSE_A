import React from 'react'
import Child2 from './Child2'
function Child1({data}) {
  return (
    <div>Child1

      {/* <h1>{data.name}</h1> */}
      <Child2 data2={data}/> 
    </div>
  )
}

export default Child1