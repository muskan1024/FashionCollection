import {
  AddCircleOutlineOutlined,
  Inventory,
  Logout,
  Menu,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const SideBar = () => {
  const { logout } = useUserContext();
  const history = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    history("/admin/login");
  };

  return (
    <>
      <div className="fixed -mt-1">
        <div className=" mx-1 mt-1 p-1 cursor-pointer rounded-full hover:bg-gray-200 w-fit h-fit border-x-2">
          <Menu onClick={() => setOpen(!isOpen)} />{" "}
        </div>
        <div
          className={`${
            isOpen
              ? "fixed bg-white min-h-screen border-x-2  w-48 shadow-xl shadow-gray-300"
              : "hidden"
          }`}
        >
          <div className="pt-3 pl-6 flex flex-col gap-5">
            <NavLink
              to="/admin/addproducts"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 text-center border border-red-400 border-r-0 p-2 bg-red-100"
                  : "flex text-center gap-3 border border-red-500  border-r-0 p-2 rounded-l-sm"
              }
            >
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
            <div
              onClick={handleLogout}
              className="cursor-pointer flex text-center gap-3 border border-red-500    border-r-0 p-2 rounded-l-sm active:border-red-400 active:bg-red-100"
            >
              <Logout />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
