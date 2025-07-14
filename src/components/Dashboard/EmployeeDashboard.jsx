import React from 'react'
import Header from '../others/header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      
        <Header data={data}/>
        <TasklistNumbers data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard
