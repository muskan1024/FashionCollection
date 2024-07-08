import React, { useEffect, useRef } from "react";
import shop from './shop.css'

const Brands = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    function scrollStep() {
      if (scrollAmount < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;
        requestAnimationFrame(scrollStep);
      } else {
        scrollContainer.scrollLeft = 0; // Reset scroll position to start
        scrollAmount = 0;
        requestAnimationFrame(scrollStep);
      }
    }

    scrollStep();
  }, []);

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
        ref={scrollContainerRef}
      >
        <div className="flex">
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