import React from "react";
import { footer } from "../helpers/data";
import Link from "next/link";
import { GlobeAltIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { Modal } from ".";

const Footer = () => {
  return (
    <div className="bg-white border-t fixed bottom-0 left-0 z-10 w-full text-sm hidden md:block">
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-800">
            <p> &copy; 2022 Airbib, Inc . </p>
            <p className="flex items-center gap-4">
              {footer?.map((item, idx) => (
                <Link href={item.link} key={idx}>
                  <a className="hover:underline"> {item.title} </a>
                </Link>
              ))}
            </p>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <p className="flex items-center gap-2">
              <GlobeAltIcon className="w-5" />
              <span> English (US) </span>
            </p>
            <p className="">
              <span>$ USD </span>
            </p>
            <label htmlFor="my-modal-6" className="modal-button cursor-pointer group">
              <p className="flex items-center gap-2 group-hover:underline">
                <span>Support & resources </span>
                <ChevronUpIcon className="w-5 " />
              </p>
            </label>
          </div>

          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Footer;
