import React from 'react'

const AcceptTask = ({data}) => {

  return (
 
      <div className='flex-shrink-0 h-full w-[250px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex justify-between mt-4 gap-2 '>
            <button className='bg-green-500 px-1 py-2  rounded text-xs'>Mark as Completed</button>
            <button className='bg-red-500 rounded px-1 py-2 text-xs'>Mark as Failed</button>
        </div>
      </div>
    
  )
}

export default AcceptTask
