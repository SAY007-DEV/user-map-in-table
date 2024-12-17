import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Register() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [age, setAge] = useState('');
  const [phno, setPhono] = useState('');

  const registering = () => {
    if (!name || !roll || !age || !phno) {
      alert("Please fill in all fields.");
    } else {
      axios
        .post("http://localhost:8500/api/users/create", { name, roll, age, phno })
        .then((res) => {
          if (res.data === null) {
            alert("User creation failed");
          } else {
            alert("User created successfully");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("An error occurred while creating the user.");
        });
    }
  };


  return (
    <div>
      <h3>Register</h3>

      Name: <input 
        type="text" 
        placeholder="Enter name" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      /> <br />

      Roll No: <input 
        type="number" 
        placeholder="Enter Roll No." 
        onChange={(e) => setRoll(e.target.value)} 
        value={roll} 
      /> <br />

      Age: <input 
        type="number" 
        placeholder="Enter Age" 
        onChange={(e) => setAge(e.target.value)} 
        value={age} 
      /> <br />

      Phone No: <input 
        type="number" 
        placeholder="Enter Phone Number" 
        onChange={(e) => setPhono(e.target.value)} 
        value={phno} 
      /> <br />
    
      <button onClick={registering}>Register</button>
      
    </div>
  );
}

export default Register;
