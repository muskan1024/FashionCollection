import React from "react";
import { Link } from "react-router-dom";
const NavbarA = () => {
  return (
    <>
      <div className="flex justify-between text-center p-5 border-b-2">
        <div className="w-max-(10%,80px)">
          <Link
            to="/"
            className="justify-self-center w-full md:w-fit flex items-center gap-2 font-bold text-xl"
          >
            <img src="/images/fc-logo.png" alt="" className="w-5 " />
            <span className="text-red-600 ">FASHION</span>
            <span>COLLECTION</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarA;
