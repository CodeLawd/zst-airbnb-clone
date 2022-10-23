import React from "react";
import { GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { UserCircleIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { MobileSearch } from ".";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] md:border-[1.5px]">
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto py-4">
        <MobileSearch />
        <div className="md:flex items-center justify-between hidden">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="logo" className="w-24" />
            </a>
          </Link>

          <div className="rounded-full shadow-sm hover:shadow-md text-sm font-semibold flex items-center gap-4 py-2 pl-6 pr-2 border cursor-pointer">
            <h2>Anywhere</h2>
            <h2 className="px-3 border-x">Any week</h2>
            <h2 className="font-thin text-gray-500">Add guests</h2>
            <div className="p-2 bg-[#FF385C] rounded-full mr-1">
              <SearchIcon className="w-4 text-white" />
            </div>
          </div>

          <div className="text-gray-800 flex items-center gap-1">
            <div className="px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-full">
              <h2 className="text-sm font-semibold">Become a host</h2>
            </div>

            <div className="p-3 cursor-pointer hover:bg-gray-50 rounded-full mr-1">
              <GlobeAltIcon className="w-5" />
            </div>

            <div className="flex gap-2 items-center rounded-full border pl-3 py-[0.20rem] w-fit hover:shadow cursor-pointer">
              <MenuIcon className="w-5" />
              <UserCircleIcon className="w-8 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
