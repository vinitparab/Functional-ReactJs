import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import { requestFormReset } from 'react-dom'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist'className='h-[50%] overflow-x-auto w-full py-5  mt-10 flex flex-nowrap  items-center justify-start gap-4'> 
      {data.tasks.map((elem ,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.NewTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default Tasklist 
