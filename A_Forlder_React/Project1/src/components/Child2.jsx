import React from 'react'
import Child3 from './Child3'
function Child2({data2}) {
  return (
    <div>Child2
      {/* <h1>{data2.name}</h1> */}
      <Child3 data3={data2}/>
    </div>
  )
}

export default Child2