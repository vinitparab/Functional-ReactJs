import React from 'react'

const TasklistNumbers = ({data}) => {
  return (
    <div className='flex  justify-between gap-5 mt-10'>
      <div className=' w-[45%] p-10 rounded-xl bg-red-400'>
      <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.newTask}</h2>
      <h3 className='text-xl font-medium text-white'>New Task</h3>
      </div>

      <div className=' w-[45%] p-10 rounded-xl bg-blue-400'>
      <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.completed}</h2>
      <h3 className='text-xl font-medium text-white'>Completed Task</h3>
      </div>

      <div className=' w-[45%] p-10 rounded-xl bg-green-400'>
      <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.active}</h2>
      <h3 className='text-xl font-medium text-white'>Accepted Task</h3>
      </div>

      <div className=' w-[45%] p-10 rounded-xl bg-yellow-400'>
      <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.failed}</h2>
      <h3 className='text-xl font-medium text-white'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumbers
