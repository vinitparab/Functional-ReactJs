import React from "react";
import Header from "../others/header";
import NewTask from "../others/NewTask";
import AllTask from "../others/AllTask";
const AdminDashboard = (props) => {
  return (
    <div className=" h-screen w-full p-10">
      <Header  changeUser={props.changeUser}/>
     <NewTask></NewTask>
     <AllTask/>


    </div>
  );
};

export default AdminDashboard;
