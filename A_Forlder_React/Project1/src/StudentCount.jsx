import React, { useState } from 'react'
function StudentCount() {
  function printsome()
  {
    setcount(count+10)
  }
  function printmany()
  {
    setcount(count-10)
  }
  const [count,setcount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={printsome}>Badha de </button>
      <button onClick={printmany}>Ghata de </button>
    </div>
  )
}

export default StudentCount