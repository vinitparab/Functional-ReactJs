import React from "react";

const header = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-medium text-2xl">
          Hello, <br /><span className="text-3xl font-semibold">{data.firstName}👋</span>
           
        </h1>
        <button className="text-white font-bold  border-red bg-red-500 px-4 py-1 rounded">Log out</button>
      </div>
    </div>
  );
};

export default header;
