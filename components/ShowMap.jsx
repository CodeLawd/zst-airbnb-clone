import React from "react";
import { MapIcon } from "@heroicons/react/solid";

const ShowMap = () => {
  return (
    <div className="fixed z-10 bottom-24 -translate-x-[50%] left-[50%] rounded-full bg-black flex items-center gap-4 py-3 px-4 cursor-pointer active:scale-95 transition-all duration-200">
      <span className="text-white text-sm font-semibold hidden md:block"> Show map </span>
      <span className="text-white text-sm font-semibold block md:hidden">  Map </span>
      <MapIcon className="w-5 text-white" />
    </div>
  ); 
};

export default ShowMap;
