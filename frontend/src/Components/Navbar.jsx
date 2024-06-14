import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SideBar } from "./SideBar";
import { useUserContext } from "./UserContext";
import axios from "axios";
import shop from "./shop.css";

const Navbar = ({ setShowLogin }) => {
  const { userData } = useUserContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:3002/api/products/suggestions?q=${query}`
      );
      const processedSuggestions = response.data
        .filter(
          (suggestion) =>
            suggestion.brand.toLowerCase().includes(query.toLowerCase()) ||
            suggestion.category.toLowerCase().includes(query.toLowerCase())
        )
        .map((suggestion) => ({
          brand: suggestion.brand,
          category: suggestion.category,
        }));
      setSuggestions(processedSuggestions);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const suggestionText = `${suggestion.brand} ${suggestion.category}`;
    setSearchQuery(suggestionText);
    setSuggestions([]);
    history(`/search-results?q=${encodeURIComponent(suggestionText)}`);
  };

  const handleSearch = (e) => {
    // dispatch(setSearch(searchQuery.trim()));
    history(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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
            <div className="relative flex border-b-[1.5px] border-black bg-white w-full">
              <input
                type="text"
                placeholder="Search.."
                className="outline-none"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <Search className="cursor-pointer" onClick={handleSearch} />

              {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10 list-none max-h-60 overflow-y-auto cat-list">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200 border-b-[1px] "
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="">
                        {suggestion.brand}{" "}
                        <span className="text-sm text-gray-600">
                          in {suggestion.category}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Menu Bar */}
            <ul className="flex gap-5 text-sm md:text-lg ">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-slate-400 ease-in duration-300"
                    : "hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-slate-400 ease-in duration-300"
                    : "hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/cart"
                // className="hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-slate-400 ease-in duration-300"
                    : "hover:border-b-2 hover:border-red-500 ease-in-out duration-100"
                }
              >
                <ShoppingCart />
              </NavLink>

              {userData ? (
                <div className="hover:border-b-2 hover:border-red-500 ease-in-out duration-100">
                  <AccountCircle onClick={toggleSidebar} />
                </div>
              ) : (
                <div className="flex items-center cursor-pointer hover:border-b-2 hover:border-red-500 ease-in-out duration-100">
                  <AccountCircle
                    onClick={() => {
                      setShowLogin(true);
                      window.scrollTo(0, 0);
                    }}
                    className="mr-1"
                  />
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
