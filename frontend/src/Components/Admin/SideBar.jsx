import {
  AddCircleOutlineOutlined,
  Inventory,
  Logout,
  Menu,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isOpen , setOpen] = useState(false);

  // const toggleSidebar = () =>{
  //   setOpen(!isOpen);
  // }
  return (
    <>
      <div className="ml-2 mt-1 p-1 cursor-pointer rounded-full hover:bg-gray-200 w-fit border-x-2" ><Menu onClick={ ()=>setOpen(!isOpen)}/> </div>
    <div className={`${isOpen ? "min-h-screen border-x-2  w-48 shadow-xl shadow-gray-300": "hidden"}`}>
      {/* <h1 className="pt-3 pl-2 font-bold text-x">Manage Products</h1> */}
      
      <div className="pt-3 pl-6 flex flex-col gap-5">
        <NavLink className=" flex text-center gap-3 border border-red-500  border-r-0 p-2 rounded-l-sm active:border-red-400 active:bg-red-100">
          <AddCircleOutlineOutlined />
          <p>Add Items</p>
        </NavLink>
        <NavLink className="flex text-center gap-3 border border-red-500 border-r-0 p-2 rounded-l-sm active:border-red-400 active:bg-red-100">
          <RemoveCircleOutlineOutlined />
          <p>Remove</p>
        </NavLink>
        <NavLink className="flex text-center gap-3 border border-red-500    border-r-0 p-2 rounded-l-sm active:border-red-400 active:bg-red-100">
          <Inventory />
          <p>Manage Orders</p>
        </NavLink>
        <NavLink className="flex text-center gap-3 border border-red-500    border-r-0 p-2 rounded-l-sm active:border-red-400 active:bg-red-100">
          <Logout />
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default SideBar;
