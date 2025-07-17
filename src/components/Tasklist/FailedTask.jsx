import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className='flex-shrink-0 h-full w-[250px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-2'>
            <button>Failed</button>  
            </div>
      </div>
  )
}

export default FailedTask
