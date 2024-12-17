import { useState } from 'react'

import './App.css'
import Loggin from '../Componets/Loggin'
import Register from '../Componets/Register'
import { NavLink, Route, Routes } from 'react-router-dom'
import Users from '../Componets/Users'

function App() {


  return (
    <>
     {/* <Loggin/> */}
     {/* <Register/> */}
     <NavLink to={""}>  Home </NavLink>
    <NavLink to={"register"}>Register </NavLink>
    <NavLink to={"login"}>  Loggin</NavLink>
    <NavLink to={"user"}>  Users</NavLink>

    <Routes>
    <Route path=''></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='login' element={<Loggin/>}></Route>
      <Route path='user' element={<Users/>}></Route>
    </Routes>

    </>
  )
}

export default App
