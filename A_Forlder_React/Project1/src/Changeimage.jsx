import React, { useState } from 'react'
import Logo from './abeslogo.jpeg'
function Changeimage() {
    const[height,setHeight]=useState(150);
    const[width,setWidth]=useState(100);
    const[rotate,setRotate]=useState(0);
    const[red,Nred]=useState(0);
    const[blue,Nblue]=useState(0);
    const[green,Ngreen]=useState(0);
    function Updateheight(){
        setHeight(height+5);
    }
    function UpdateWidth(){
        setWidth(width+5);
    }
    function Rotate(){
        setRotate(rotate+10);
    }
    function BgChange(){
        Nred(Math.random()*255);
        Nblue(Math.random()*255);
        Ngreen(Math.random()*255);
      
        
        
    }
  return (
    <div style={{height:'400px',width:'400px', border:'4px solid green',marginLeft:'50px',marginTop:'100px'}}>
        <div style={{paddingLeft:'100px',paddingTop:'20px',width:'150px',backgroundColor:`RGB(${red},${blue},${green})`}}>
        <img src={Logo} alt="" height={height} width={width} style={{rotate:`${Rotate}deg`}} />
        

        </div>
      <div style={{marginTop:'150px'}}>
      <button onClick={UpdateWidth}>EWidth</button>  &nbsp;&nbsp;&nbsp;
        <button onClick={Updateheight}>EHeight</button> &nbsp;&nbsp;&nbsp;
        <button onClick={Rotate}>Rotate</button> &nbsp;&nbsp;&nbsp;
        <button onClick={BgChange}>BgChange</button> &nbsp;&nbsp;&nbsp;
      </div>
      



    </div>


  )
}

export default Changeimage