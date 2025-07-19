import { clearCaches } from "browserslist";
import React from "react";

const Header = ( props) => {


  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    //window.location.reload()
    //console.log(props.changeUser)
    props.changeUser('')
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-medium text-2xl">
          Hello, <br />
          <span className="text-3xl font-semibold">
            username 👋
          </span>
        </h1>
        <button onClick={logOutUser} className="text-white font-bold bg-red-500 px-4 py-1 rounded">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
