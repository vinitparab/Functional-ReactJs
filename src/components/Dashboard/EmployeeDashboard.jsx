import React from 'react'
import Header from '../others/header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TasklistNumbers/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard
