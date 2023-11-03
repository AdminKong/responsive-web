import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Atomic from "../assets/53085-200.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white shadow-2xl shadow-gray-800/60 rounded-b-xl">
        <img src={Atomic} alt="react" className="pl-2 h-8 sm:h-10 md:h-14" />
        <h1 className="w-full text-xl font-bold pl-1 uppercase sm:text-2xl">
          Servite
        </h1>
        <ul className="pr-2 hidden md:flex font-medium">
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/service">Service</a>
          </li>
          <li className="p-4">
            <a href="/about">About</a>
          </li>
          <li className="p-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* responsive */}
        <div className="block items-center pr-4 md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-[#0F044C] p-4 w-full flex items-center justify-center rounded-md shadow-xl tracking-wider active:bg-cyan-800 duration-300"
          >
            {!isOpen ? (
              <AiOutlineMenu size={21} />
            ) : (
              <AiOutlineClose size={21} />
            )}
          </button>

          {isOpen && (
            <div className="bg-[#05062c] absolute top-[15%] block items-center text-center rounded-lg p-7 py-2 shadow-xl right-[7%] ">
              <ul className="w-full text-center items-center p-4 uppercase">
                <li className="p-4 border-b border-b-gray-400">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 border-b border-b-gray-400">
                  <a href="/service">Service</a>
                </li>
                <li className="p-4 border-b border-b-gray-400">
                  <a href="/about">About</a>
                </li>
                <li className="p-4">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
