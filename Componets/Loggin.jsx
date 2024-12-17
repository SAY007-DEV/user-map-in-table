import axios from 'axios';
import React, { useState } from 'react'



function Loggin() {
    const[name,setName]=useState();
    const[roll,setRoll]=useState();
    const[age,setAge]=useState();
    const[phno,setPhono]=useState();
const Loggin =()=>{

    if(!name || !roll )
        {
            alert("Enter all Feilds");
        }
        else{
            axios
            .post(),{}
        }
}
    




  return (

    <div>Loggin <br />
    
    Name <input type='text' placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/> <br />
     Roll <input type='number' placeholder='Enter Roll No.' onChange={(e)=>{setRoll( e.target.value)}}/><br />
     
     <button onClick={Loggin}>Loggin</button>

    </div>
  )
}

export default Loggin
