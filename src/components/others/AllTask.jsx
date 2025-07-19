import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext)
  
  return (
    
    <div className=" p-5 rounded mt-5 h-48 ">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="w-1/5 bg-white-500">Employee Name</h2>
        <h3 className="w-1/5 bg-white-500">New Task</h3>
        <h5 className="w-1/5 bg-white-500">Active Task</h5>
        <h5 className="w-1/5 bg-white-500">Completed</h5>
        <h5 className="w-1/5 bg-white-500">Failed</h5>
        
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employees.map(function(elem,idx){
        return  <div key={idx} className="bg-transparent py-2 px-4 mb-2 flex justify-between rounded border">
        <h2 className="w-1/5 text-white">{elem.firstName}</h2>
        <h3 className="w-1/5 text-blue-500">{elem.taskCounts.newTask}</h3>
        <h5 className="w-1/5 text-yellow-200">{elem.taskCounts.active}</h5>
        <h5 className="w-1/5">{elem.taskCounts.completed}</h5>
        <h5 className="w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
        
      </div>
      })}
      </div>
   </div>
  )
}
export default AllTask;
