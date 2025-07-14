import React from 'react'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist'className='h-[50%] overflow-x-auto w-full py-5  mt-10 flex flex-nowrap  items-center justify-start gap-4'>
      <div className='flex-shrink-0 h-full w-[250px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>High</h3>
            <h4 className='text-sm'>12 July 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, id officiis! Quam vitae ullam optio?</p>

      </div>
   <div className='flex-shrink-0 h-full w-[250px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>High</h3>
            <h4 className='text-sm'>12 July 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, id officiis! Quam vitae ullam optio?</p>

      </div>
      <div className='flex-shrink-0 h-full w-[250px] bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>High</h3>
            <h4 className='text-sm'>12 July 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, id officiis! Quam vitae ullam optio?</p>

      </div>
      <div className='flex-shrink-0 h-full w-[250px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-800 text-sm px-3 py-1 rounded text-white'>High</h3>
            <h4 className='text-sm'>12 July 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, id officiis! Quam vitae ullam optio?</p>

      </div>
    </div>
  )
}

export default Tasklist 
