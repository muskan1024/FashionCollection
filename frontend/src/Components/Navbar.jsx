import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SideBar } from "./SideBar";
import { useUserContext } from "./UserContext";

const Navbar = ({ setShowLogin }) => {
  // const [menu, setMenu] = useState("home");
  const { userData } = useUserContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-10 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:justify-around px-2 py-3 shadow-lg">
          <Link
            to="/home"
            className="justify-self-center w-full md:w-fit flex items-center gap-2 font-bold text-xl"
          >
            <img src="/images/fc-logo.png" alt="" className="w-5 " />
            <span className="text-red-600 ">FASHION</span>
            <span>COLLECTION</span>
          </Link>
          <div
            className="justify-self-end md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } w-full grid col-span-2 grid-flow-row md:grid md:grid-flow-col gap-4 justify-evenly`}
          >
            {/* Search Bar */}
            <div className="flex border-b-[1.5px] border-black bg-white">
              <input
                type="text"
                placeholder="Search.."
                className="outline-none "
              />
              <Search />
            </div>
            {/* Menu Bar */}
            <ul className="flex gap-5 text-sm md:text-lg ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-slate-400  ease-in duration-300"
                    : "hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-slate-400  ease-in duration-300"
                    : "hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                }
              >
                Shop
              </NavLink>
              <Link to="/cart" className="hover:border-b-2 hover:border-red-500 ease-in-out duration-100">
                <ShoppingCart/>
              </Link>
              
              {userData ? (
                <div className="hover:border-b-2 hover:border-red-500 ease-in-out duration-100">
                  <AccountCircle onClick={toggleSidebar}/>
                </div>
              ) : (
                <div className="flex items-center cursor-pointer hover:border-b-2 hover:border-red-500 ease-in-out duration-100">
                  <AccountCircle
                    onClick={() => setShowLogin(true)}
                    className="mr-1"
                  />
                  <button onClick={() => setShowLogin(true)}>Login</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
    </>
  );
};

export default Navbar;
