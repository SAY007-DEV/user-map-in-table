import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    axios .get('http://localhost:8500/api/users/find')
        .then((res)=>{
            setUsers(res.data);
            setLoading(false);
        })
        .catch((err)=>console.log(err));
  },[])


  if(loading){
    return <div><h3>Loading....</h3></div>
  }
  
  return (
    <> 


    
<h3>User List</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>AGE</th>
            <th>Phone</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
             
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phno}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  )
}

export default Users