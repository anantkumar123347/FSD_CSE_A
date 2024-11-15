import React from 'react'
import "./Idcard.css"
function Student() {
  return (
    <div>
      <table className='IDcard'>
        <tbody>
         <tr><th>Name:</th> <td>Anant Kumar</td></tr> 
          <tr><th>Roll No:</th> <td>18</td></tr>
          <tr>
            <th>Branch:</th>
            <td>CSE</td>
          </tr>
          <tr>
            <th>College:</th>
            <td>ABES Engineering College</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student