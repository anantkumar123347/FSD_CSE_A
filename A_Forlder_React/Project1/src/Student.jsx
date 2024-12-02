import React from 'react';
import './Idcard.css';

function Student({ name, rollNo, branch, college, image ,age=100}) {
  return (
    <div>
      <img src={image} alt="College Logo" />
      <table className='IDcard'>
        <tbody>
          <tr><th>Name:</th> <td>{name}</td></tr>
          <tr><th>Roll No:</th> <td>{rollNo}</td></tr>
          <tr><th>Branch:</th> <td>{branch}</td></tr>
          <tr><th>College:</th> <td>{college}</td></tr>
          <tr><th>Age:</th> <td>{age}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
