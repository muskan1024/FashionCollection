import React from "react";
import NavbarA from "./NavbarA";
import SideBar from "./SideBar";
import ProductList from "../Product/ProductList";

const HomeA = () => {
  return (
    <>
      <NavbarA />
      <div className="mt-20 flex">
        <SideBar />
        <div className="ml-12 m-4 grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default HomeA;
