import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import NewTask from './components/others/NewTask'
import {getLocalStorage, setLocalStorage} from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
 const [user, setUser] = useState(null)
 const [loggedInUser, setLoggedInUser] = useState(null)
  const authdata = useContext(AuthContext)

 const handleLogin=(email,password)=>{
  if(email=='admin@me.com'&& password=='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(authdata){
    const employee = authdata.employees.find((e) => email == e.email && e.password == password)
    if(employee){
    setUser('employee')
    setLoggedInUser(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employees'}))
    }  
  }
  else{
    alert("Invalid Credentials")
  }
 }

  return (
    <>
    { !user ? <Login handleLogin={handleLogin}/>: ''}
    {user=='admin'?<AdminDashboard/>:(user == 'employee' ? <EmployeeDashboard data={loggedInUser}/>:null)}
    </>
  )
}

export default App