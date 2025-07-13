import React from "react";
import Header from "../others/header";
import NewTask from "../others/NewTask";
import AllTask from "../others/AllTask";
const AdminDashboard = () => {
  return (
    <div className=" h-screen w-full p-10">
      <Header />
     <NewTask></NewTask>
     <AllTask/>


    </div>
  );
};

export default AdminDashboard;
