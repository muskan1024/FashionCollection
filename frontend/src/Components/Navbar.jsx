import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Hidden } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative top-0 w-full z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:justify-around px-2 py-3 shadow-lg">
          <div className="justify-self-center w-full md:w-fit flex items-center gap-2 font-bold text-xl">
            <img src="/images/fc-logo.png" alt="" className="w-5 " />
            <span className="text-red-600 ">FASHION</span>
            <span>COLLECTION</span>
          </div>
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
                    ? "border-b-2 border-red-500  ease-in duration-300"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-red-500  ease-in duration-300"
                    : ""
                }
              >
                Shop
              </NavLink>
              <div>
                <AccountCircle className="mr-1" />
                <button>Login</button>
              </div>
              <a href="">
                <ShoppingCart />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
