import React from "react";
import { Link } from "react-router-dom";
const NavbarA = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-10 bg-white">
        <div className=" flex justify-between text-center p-5 border-b-2 z-20">
          <div className="w-max-(10%,80px)">
            <Link
              to="/admin/home"
              className="justify-self-center w-full md:w-fit flex items-center gap-2 font-bold text-xl"
            >
              <img src="/images/fc-logo.png" alt="" className="w-5 " />
              <span className="text-red-600 ">FASHION</span>
              <span>COLLECTION</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarA;
