import React, { useState, useEffect } from "react";
import { mobileNav } from "../helpers/data";

const MobileNavigation = () => {
  const [scrollBottom, setScrollBottom] = useState(false);
  const [filterState, setFilterState] = useState("Explore");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScrollBottom(window.pageYOffset < 100));
    }
  }, []);
  return (
    <div
      className={`${
        scrollBottom ? "" : ""
      } bg-white border-t fixed bottom-0 left-0 z-10 w-full text-sm block md:hidden`}
    >
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto py-4">
        <div className="text-black flex items-center justify-around">
          {mobileNav?.map(({ icon, text }, idx) => (
            <div
              key={idx}
              className="text-xs flex flex-col items-center cursor-pointer"
              onClick={() => setFilterState(text)}
            >
              <span className={`${filterState == text ? "text-[#FF385C]" : "text-gray-400"}`}>{icon}</span>
              <span className={`${filterState == text ? "text-black" : "text-gray-400"}`}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
