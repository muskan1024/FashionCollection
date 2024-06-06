import React from "react";
import { useUserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Close, Logout } from "@mui/icons-material";

export const SideBar = ({ isOpen, onClose }) => {
  const { userData, logout } = useUserContext();
  const history = useNavigate();

  const handleLogout = () => {
    logout();
    window.location.reload();
    history("/");
  };
  return (
      <div
        className={`sidebar fixed top-0 right-0 pb-10 bg-gray-100 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "w-fit" : "w-0"
        } overflow-hidden`}
      >
        <div
          className="close-btn absolute top-4 right-4 block hover:bg-gray-200 p-1 rounded-full "
          onClick={onClose}
        >
          <Close />
        </div>
        <div className="sidebar-content pt-14 p-5">
          {userData ? (
            <p className="text-sm font-rubik text-slate-500">
              Hello, <span className="text-xl block ">{userData.fullName}</span>
            </p>
          ) : (
            <p>Loading...</p>
          )}
          <div className=" text-lg grid justify-items-start gap-2 mt-4 w-[100%]">
            <div className="border-slate-400 bg-slate-400 h-0.5 border-2 w-[100%]"></div>
            <Link className="w-[100%]" to="/profile">
              <p className="hover:bg-gray-200 w-[100%] rounded-md p-1">
                Your Profile
              </p>
            </Link>
            <Link className="w-[100%]" to="/profile/orders">
              <p className="hover:bg-gray-200 w-[100%] rounded-md p-1">
                Your Orders
              </p>
            </Link>
            <Link className="w-[100%]" to="/cart">
              <p className="hover:bg-gray-200 w-[100%] rounded-md p-1">
                Your Shopping Cart
              </p>
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:font-bold"
            >
              <Logout className="text-md" />
              Log Out
            </button>
          </div>
        </div>
      </div>
  );
};
