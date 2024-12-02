import React from 'react';
import Student from './Student';
import AbesLogo from './abeslogo.jpeg';
import StudentCount from './StudentCount'
import Studentnew from './Studentnew'
import Changeimage from './Changeimage';
function App() {
  const mystyle = {
    backgroundColor: 'aqua',
    color: 'red',
  };

  const studentData1 = {
    name: 'Anant Kumar',
    rollNo: '18',
    branch: 'CSE',
    college: 'ABES Engineering College',
    image: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  };
  const studentData2 = {
    name: 'Archna Tomer',
    rollNo: '18',
    branch: 'CSE',
    college: 'ABES Engineering College',
    image: AbesLogo,
  };
  const studentData3 = {
    name: 'Ayush Baliyan',
    rollNo: '18',
    branch: 'CSE',
    college: 'ABES Engineering College',
    image: AbesLogo,
  };

  return (
    /*<div style={mystyle}>
      <h1>Abes Engineering College</h1>
      <div style={{ color: 'blue', display:'flex'}}>
        <Student
          name={studentData1.name}
          rollNo={studentData1.rollNo}
          branch={studentData1.branch}
          college={studentData1.college}
          image={studentData1.image}
        />
        <Student
          name={studentData1.name}
          rollNo={studentData1.rollNo}
          branch={studentData1.branch}
          college={studentData1.college}
          image={studentData1.image}
        />
        <Student
          name={studentData1.name}
          rollNo={studentData1.rollNo}
          branch={studentData1.branch}
          college={studentData1.college}
          image={studentData1.image}
        />
        <Studentnew/>
      </div>
    </div>*/
    <Changeimage/>
  );
}

export default App;
