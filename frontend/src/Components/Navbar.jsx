import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setShowLogin, isLoggedIn, setIsLoggedIn }) => {
  // const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <>
      <div className="fixed top-0 w-full z-10 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:justify-around px-2 py-3 shadow-lg">
          <Link
            to="/"
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
              <Link to="/cart">
                <ShoppingCart />
              </Link>
              
              {isLoggedIn ? (
                <div className="flex items-center">
                  <AccountCircle onClick={handleLogout}/>
                  {/* <button onClick={handleLogout}>Profile</button> */}
                  {/* <button>Profile</button> */}
                </div>
              ) : (
                <div className="flex items-center">
                  <AccountCircle
                    onClick={() => setShowLogin(true)}
                    className="mr-1"
                  />
                  <button onClick={() => setShowLogin(true)}>Login</button>
                </div>
              )}
              {/* <div>
                <AccountCircle onClick={()=>setShowLogin(true)} className="mr-1" />
                <button onClick={()=>setShowLogin(true)}>Login</button>
              </div> */}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
