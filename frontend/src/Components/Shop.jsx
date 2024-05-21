import React from "react";
import Navbar from "./Navbar";

const Shop = () => {
  return (
    <>
      <Navbar />

      <div className="w-80% m-auto ml-20 ">
        <div className="flex  gap-10 mt-10">
          <img className="w-20 h-20" src="/images/Ellipse 1.png" alt="" />
          <img className="w-20 h-20" src="/images/Ellipse 2.png" alt="" />
          <img className="w-20 h-20" src="/images/blue.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Shop;
