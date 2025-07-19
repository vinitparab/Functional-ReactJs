import React, { useState } from 'react'
import FailedTask from '../Tasklist/FailedTask'
import CompleteTask from '../Tasklist/CompleteTask'

const NewTask = () => {
  
  const  [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [Ntask, setNtask] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault()
    setNtask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:true,completed:false})
    const data = JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem) {
    if (asignTo == elem.firstName) {
      elem.tasks.push(Ntask)
      elem.taskCounts.Ntask
      
    }
  }
)
localStorage.setItem('employees',JSON.stringify(data))
  }
  



  return (
    <div>
       <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className=" w-full flex-wrap flex items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4"
                type="text"
                placeholder="title"
              />
            </div>
            <div>
              <div>
                {" "}
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input
                value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                  className=" mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                  type="date"
                />
              </div>
              <div>
                {" "}
                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                <input
                value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
                  className="mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                  type="text"
                  placeholder="employee name"
                />
              </div>
              <div>
                {" "}
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input
                value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                  className=" mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                  type="text"
                  placeholder="design,dev,etc"
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              className=" mb-4 w-full h-44 text-sm py-2 px-4  rounded outline-none bg-transparent border-[1px]"
              name=""
              id=""
            ></textarea>
          </div>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewTask
