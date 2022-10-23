import { AdjustmentsIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { filters } from "../helpers/data";

const Filters = () => {
  const [filterState, setFilterState] = useState("Amazing pools");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-white shadow md:shadow-none">
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto py-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-between gap-8 overflow-x-scroll flex-grow scrollbar-hide">
            {filters?.map(({ icon, text }, idx) => (
              <div
                key={idx}
                className={`${
                  filterState == text ? "text-black border-b-2 border-b-black" : "text-gray-500 hover:border-b-2"
                } flex flex-col items-center justify-center space-y-2 py-3 cursor-pointer min-w-fit transition-all duration-700`}
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                onClick={() => setFilterState(text)}
              >
                <img src={icon} alt={icon} className="w-6" />
                <p className="text-xs">{text}</p>
              </div>
            ))}
          </div>
          {currentIndex > 0 && (
            <div
              className="hidden group-hover:flex absolute left-3 md:left-5 -translate-y-[50%] top-[50%] w-8 h-8  justify-center items-center rounded-full bg-white group-:scale-110 shadow-lg text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
              onClick={prev}
            >
              <ChevronLeftIcon className="w-4" />
            </div>
          )}
          {currentIndex < filters.length - 1 && (
            <div
              className="hidden group-hover:flex absolute right-3 md:right-5 -translate-y-[50%] top-[50%] w-8 h-8  justify-center items-center rounded-full bg-white hover:scale-110 shadow-lg text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
              onClick={next}
            >
              <ChevronRightIcon className="w-4" />
            </div>
          )}
          <div className="border p-4 rounded-xl text-black min-w-fit lg:flex items-center gap-2 hidden ml-4 cursor-pointer">
            <AdjustmentsIcon className="w-4" />
            <span className="text-xs"> Filters </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
