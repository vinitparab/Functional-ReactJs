import React from 'react'
import Header from '../others/header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        <TasklistNumbers data={props.data}/>
        <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
