import React from 'react';
import Student from './Student';
function App(){
  
  const mystyle={
    backgroundColor:'aqua',
    color:'red'
  }
  return(
    <div style={mystyle}>Abes engineering college
    <div style={{color:"blue"}}>
<Student/>
    </div>
    </div>

  )
}
export default App;