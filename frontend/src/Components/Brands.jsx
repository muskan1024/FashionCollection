import React from "react";
import shop from './shop.css'

const Brands = () => {
  return (
    <div className="mt-10">
      <div className="text-3xl text-cyan-900 font-mono font-bold tracking-widest">
        BRANDS <span className="text-cyan-700"> WE </span>{" "}
        <span className="text-cyan-600">CARRY.</span>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
        }}
        className="h-72 mt-3 text-center overflow-x-scroll mb-6"
      >
        <div className="scroll-container">
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/RaymondLogo.jpg"
            alt="Raymond Logo"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/siyaram.png"
            alt="Siyaram"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/lenenClub.png"
            alt="Linen Club"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/OCM.png"
            alt="OCM"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/gwalior.png"
            alt="Gwalior"
          />
          {/* Duplicate images to create seamless scroll */}
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/RaymondLogo.jpg"
            alt="Raymond Logo"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/siyaram.png"
            alt="Siyaram"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/lenenClub.png"
            alt="Linen Club"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/OCM.png"
            alt="OCM"
          />
          <img
            className="w-[100%] mx-3 object-cover"
            src="/images/gwalior.png"
            alt="Gwalior"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
