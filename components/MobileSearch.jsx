import { AdjustmentsIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";

const MobileSearch = () => {
  return (
    <div className="flex items-center rounded-full gap-4 border shadow-md md:hidden py-3 px-5 cursor-pointer">
      <div>
        <SearchIcon className="w-5 text-black" />
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-sm text-black">Where to?</p>
        <p className="text-xs text-gray-500 flex items-center gap-4">
          <span className="">Anywhere</span>
          <span className="">Anyweek</span>
          <span className="">Add guest</span>
        </p>
      </div>
      <div className="border p-2 rounded-full">
        <AdjustmentsIcon className="w-5 text-black" />
      </div>
    </div>
  );
};

export default MobileSearch;
